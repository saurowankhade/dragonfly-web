import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAllPosts, getPostSlugs } from "../../lib/blog";

export const alt = "Dragonfly blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

const logo = await readFile(join(process.cwd(), "public/dragonfly.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default async function Image({ params }) {
  const { slug } = await params;
  const title = getAllPosts().find((p) => p.slug === slug)?.title || "Dragonfly Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#6a9955", fontFamily: "monospace" }}>
          {`// blog/${slug}.md`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 66,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#1a2230",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} width={64} height={64} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#1a2230" }}>Dragonfly</div>
            <div style={{ fontSize: 24, color: "#5b6675" }}>
              The API client for VS Code that reads your code
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
