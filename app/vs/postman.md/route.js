import { vsMd } from "../../lib/content";

export const dynamic = "force-static";

export function GET() {
  return new Response(vsMd("postman"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
