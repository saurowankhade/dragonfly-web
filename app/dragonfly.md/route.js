import { dragonflyMd } from "../lib/content";

export const dynamic = "force-static";

export function GET() {
  return new Response(dragonflyMd(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
