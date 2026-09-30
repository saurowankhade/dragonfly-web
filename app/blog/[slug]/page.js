import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { SITE_URL } from "../../lib/content";
import { getPost, getPostSlugs, formatDate } from "../../lib/blog";
import { graph, webPage, breadcrumb, blogPosting } from "../../lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
      types: { "text/markdown": `${SITE_URL}/blog/${slug}.md` },
    },
    authors: [{ name: "Saurabh Wankhade", url: "https://sauro.dev" }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: ["Saurabh Wankhade"],
      tags: post.tags,
    },
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const image = `${path}/opengraph-image`;
  const jsonLd = graph([
    webPage({ path, name: post.title, description: post.description, image }),
    blogPosting({ path, image, ...post }),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={jsonLd} />
      <p className="font-mono text-sm text-comment">
        <Link href="/blog" className="hover:text-brand">{"// blog/"}</Link>
        {`${slug}.md`}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-base text-inksoft sm:text-lg">{post.description}</p>
      <p className="mt-4 font-mono text-xs text-faint">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.updated !== post.date && (
          <>
            {" · updated "}
            <time dateTime={post.updated}>{formatDate(post.updated)}</time>
          </>
        )}
        {` · ${post.readingMinutes} min read · Saurabh Wankhade`}
        {post.draft && <span className="ml-2 text-amberink">draft</span>}
      </p>

      <div
        className="prose-df mt-[clamp(1.75rem,4vw,2.5rem)] border-t border-line pt-[clamp(1.5rem,3vw,2.25rem)]"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

    </article>
  );
}
