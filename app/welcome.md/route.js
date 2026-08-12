import { welcomeMd } from "../lib/content";

export const dynamic = "force-static";

export function GET() {
  return new Response(welcomeMd(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
