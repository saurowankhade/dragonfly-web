import { blogPostMd } from "../../lib/content";
import { getPost, getPostSlugs } from "../../lib/blog";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return new Response(blogPostMd(post), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
