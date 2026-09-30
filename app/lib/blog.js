
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { Marked, Renderer, lexer, walkTokens } from "marked";
import { createHighlighter } from "shiki";

const DIR = join(process.cwd(), "content/blog");

const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

function slugs() {
  return readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => f.slice(0, -3));
}

function isoDate(value) {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(value);
  return d.toISOString().slice(0, 10);
}

function readPost(slug) {
  const { data, content } = matter(readFileSync(join(DIR, `${slug}.md`), "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  const meta = {
    slug,
    title: data.title,
    description: data.description,
    date: isoDate(data.date),
    updated: isoDate(data.updated) || isoDate(data.date),
    tags: data.tags || [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { meta, markdown: content.trim() };
}

export function getAllPosts() {
  return slugs()
    .map((slug) => readPost(slug).meta)
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs() {
  return getAllPosts().map((p) => p.slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Anchor ids in document order, de-duplicated the same way the renderer does.
function makeIdFor() {
  const seen = new Map();
  return (text) => {
    const base = slugify(text);
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    return n ? `${base}-${n}` : base;
  };
}

function outlineOf(markdown) {
  const idFor = makeIdFor();
  const outline = [];
  walkTokens(lexer(markdown), (t) => {
    if (t.type !== "heading") return;
    const id = idFor(t.text);
    if (t.depth === 2) outline.push({ id, label: t.text.replace(/[`*_]/g, "") });
  });
  return outline;
}


export function getPostOutlines() {
  return Object.fromEntries(
    getPostSlugs().map((slug) => {
      const { meta, markdown } = readPost(slug);
      return [`/blog/${slug}`, { title: meta.title, outline: outlineOf(markdown) }];
    })
  );
}

const LANGS = ["js", "jsx", "ts", "tsx", "json", "bash", "shell", "http", "yaml", "diff", "html", "css", "python", "go"];

let highlighterPromise;
function highlighter() {
  highlighterPromise ??= createHighlighter({ themes: ["light-plus"], langs: LANGS });
  return highlighterPromise;
}

export async function getPost(slug) {
  if (!getPostSlugs().includes(slug)) return null;
  const { meta, markdown } = readPost(slug);
  const hl = await highlighter();
  const idFor = makeIdFor();

  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        const id = idFor(text);
        return `<h${depth} id="${id}"><a href="#${id}">${inner}</a></h${depth}>\n`;
      },
      code({ text, lang = "" }) {
        const [language = "", ...rest] = lang.trim().split(/\s+/);
        const file = rest.join(" ");
        const known = hl.getLoadedLanguages().includes(language);
        const body = hl.codeToHtml(text, {
          lang: known ? language : "text",
          theme: "light-plus",
        });
        const caption = file || language;
        return `<figure class="code">${
          caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""
        }${body}</figure>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href) && !href.includes("usedragonfly.xyz");
        return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ""}${
          external ? ' target="_blank" rel="noopener"' : ""
        }>${inner}</a>`;
      },
      table(token) {
        return `<div class="table-wrap">${Renderer.prototype.table.call(this, token)}</div>\n`;
      },
    },
  });

  const html = await marked.parse(markdown);
  return { ...meta, markdown, html, outline: outlineOf(markdown) };
}
