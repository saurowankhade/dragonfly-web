import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { COMPETITORS, vsSlugs } from "../../lib/vs";

export const alt = "Dragonfly, the REST API client for VS Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return vsSlugs.map((slug) => ({ slug }));
}

const logo = await readFile(join(process.cwd(), "public/dragonfly.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default async function Image({ params }) {
  const { slug } = await params;
  const name = COMPETITORS[slug]?.name || "Postman";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 56,
            width: 14,
            height: 14,
            borderRadius: 9999,
            background: "#c7d6ea",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 52,
            width: 10,
            height: 10,
            borderRadius: 9999,
            background: "#c7d6ea",
          }}
        />
        <img src={logoSrc} width={104} height={104} alt="" />
        <div
          style={{
            marginTop: 34,
            fontSize: 66,
            fontWeight: 700,
            color: "#1a2230",
            letterSpacing: "-0.02em",
          }}
        >
          {`Dragonfly vs ${name}`}
        </div>
        <div
          style={{
            marginTop: 22,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 30,
            lineHeight: 1.4,
            color: "#5b6675",
            textAlign: "center",
          }}
        >
          <div>The REST API client for VS Code that builds</div>
          <div>requests from your Express and Next.js code.</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
