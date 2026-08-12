const SITE_URL = "https://usedragonfly.xyz";

const paths = ["", "/dragonfly", "/changelog"];

export default function sitemap() {
  const now = new Date();
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
