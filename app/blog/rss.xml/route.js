import { SITE_URL } from "../../lib/content";
import { getAllPosts, getPost } from "../../lib/blog";



export const dynamic = "force-static";

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const posts = await Promise.all(getAllPosts().map((p) => getPost(p.slug)));
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
      <content:encoded><![CDATA[${p.html.replaceAll("]]>", "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Dragonfly Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Guides on testing APIs without leaving VS Code.</description>
    <language>en</language>
${posts[0] ? `    <lastBuildDate>${new Date(`${posts[0].updated}T12:00:00Z`).toUTCString()}</lastBuildDate>\n` : ""}${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
