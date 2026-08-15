import { privacyMd } from "../lib/content";

export const dynamic = "force-static";

export function GET() {
  return new Response(privacyMd(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
