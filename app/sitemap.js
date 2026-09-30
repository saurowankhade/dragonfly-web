import { SITE_URL } from "./lib/content";
import { vsSlugs } from "./lib/vs";


const UPDATED = {
  home: "2026-09-30",
  playground: "2026-08-13",
  changelog: "2026-08-13",
  vs: "2026-09-30",
  privacy: "2026-08-15",
};

export default function sitemap() {
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
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED.privacy, changeFrequency: "yearly", priority: 0.3 },
  ];
}
