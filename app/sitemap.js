import { SITE_URL } from "./lib/content";
import { vsSlugs } from "./lib/vs";
import { getAllPosts } from "./lib/blog";


const UPDATED = {
  home: "2026-09-30",
  playground: "2026-08-13",
  changelog: "2026-08-13",
  vs: "2026-09-30",
  privacy: "2026-08-15",
};

export default function sitemap() {
  const posts = getAllPosts();
  return [
    { url: SITE_URL, lastModified: UPDATED.home, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/playground`, lastModified: UPDATED.playground, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/changelog`, lastModified: UPDATED.changelog, changeFrequency: "weekly", priority: 0.6 },
    ...vsSlugs.map((slug) => ({
      url: `${SITE_URL}/vs/${slug}`,
      lastModified: UPDATED.vs,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...(posts.length
      ? [
          { url: `${SITE_URL}/blog`, lastModified: posts[0].updated, changeFrequency: "weekly", priority: 0.7 },
          ...posts.map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: p.updated,
            changeFrequency: "monthly",
            priority: 0.7,
          })),
        ]
      : []),
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED.privacy, changeFrequency: "yearly", priority: 0.3 },
  ];
}
