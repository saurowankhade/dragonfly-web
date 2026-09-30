import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { RssIcon } from "../components/icons";
import { SITE_URL } from "../lib/content";
import { getAllPosts, formatDate } from "../lib/blog";
import { graph, webPage, breadcrumb } from "../lib/jsonld";

export const metadata = {
  title: "Blog – API Testing in VS Code",
  description:
    "Guides on testing REST APIs inside VS Code: Next.js and Express routes, importing Postman and Thunder Client collections, and keeping API keys local.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = graph([
    webPage({
      path: "/blog",
      name: "Dragonfly Blog",
      description: metadata.description,
    }),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "Dragonfly Blog",
      url: `${SITE_URL}/blog`,
      publisher: { "@id": `${SITE_URL}/#org` },
      blogPost: posts.map((p) => ({ "@id": `${SITE_URL}/blog/${p.slug}#article` })),
    },
  ]);

  return (
    <section>
      <JsonLd data={jsonLd} />
      <p className="font-mono text-sm text-comment">{"// blog/"}</p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
        <a
          href="/blog/rss.xml"
          target="_blank"
          title="RSS feed"
          aria-label="RSS feed"
          className="group relative grid h-9 w-9 flex-none place-items-center rounded-lg border border-line2 text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <RssIcon size={18} />
          <span className="pointer-events-none absolute right-0 top-[calc(100%+6px)] z-50 hidden whitespace-nowrap rounded-md border border-line2 bg-bg px-2 py-1 text-xs text-ink group-hover:block">
            RSS feed
          </span>
        </a>
      </div>

      <p className="mt-4 text-base text-inksoft sm:text-lg">
        Guides on testing APIs without leaving VS Code, from the people building
        Dragonfly.
      </p>

      <div className="mt-[clamp(1.75rem,4vw,2.75rem)] border-t border-line">
        {posts.length === 0 && (
          <p className="py-6 font-mono text-sm text-faint">{"// no posts yet"}</p>
        )}
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group hover:opacity-90">
          <article  className="border-b border-line py-6">
            <p className="font-mono text-xs text-faint">
              <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readingMinutes} min read
              {p.draft && <span className="ml-2 text-amberink">draft</span>}
            </p>
            <h2 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl group-hover:text-brandink">
                {p.title}
            </h2>
            <p className="mt-2 text-base text-muted">{p.description}</p>
            {p.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brandsoft px-2 py-0.5 font-mono text-xs text-brandink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
