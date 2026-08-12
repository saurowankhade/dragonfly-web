import { releases, versionId } from "../lib/nav";
import { SITE_URL } from "../lib/content";

export const dynamic = "force-static";

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const items = releases
    .map((r) => {
      const url = `${SITE_URL}/changelog#${versionId(r.version)}`;
      const desc = r.changes.map((c) => `• ${esc(c)}`).join("<br/>");
      const pub = new Date(`${r.iso}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>Dragonfly v${r.version}${r.tag ? ` (${esc(r.tag)})` : ""}</title>
      <link>${url}</link>
      <guid isPermaLink="false">dragonfly-v${r.version}</guid>
      <pubDate>${pub}</pubDate>
      <description>${desc}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dragonfly Changelog</title>
    <link>${SITE_URL}/changelog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Release notes for Dragonfly, the REST API client for VS Code.</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${releases[0].iso}T12:00:00Z`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
