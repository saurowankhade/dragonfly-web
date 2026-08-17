import { NextResponse } from "next/server";

// Markdown content negotiation.
//
// Each HTML page ships a token-efficient Markdown twin served by a
// `<name>.md/route.js` handler (see app/*.md). When an AI agent (or any
// client) requests a page with `Accept: text/markdown`, rewrite the request
// to that twin so the same URL returns clean Markdown. The URL the client
// sees is unchanged, so `Vary: Accept` is set to keep caches from mixing the
// HTML and Markdown representations.
//
// Keep MD_ROUTES in sync with the `matcher` config below.

const MD_ROUTES = {
  "/": "/welcome.md",
  "/playground": "/playground.md",
  "/changelog": "/changelog.md",
  "/privacy": "/privacy.md",
  "/vs/postman": "/vs/postman.md",
  "/vs/insomnia": "/vs/insomnia.md",
  "/vs/thunder-client": "/vs/thunder-client.md",
};

export function proxy(request) {
  const accept = request.headers.get("accept") || "";
  const target = MD_ROUTES[request.nextUrl.pathname];

  if (target && accept.includes("text/markdown")) {
    const response = NextResponse.rewrite(new URL(target, request.url));
    response.headers.set("Vary", "Accept");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/playground",
    "/changelog",
    "/privacy",
    "/vs/postman",
    "/vs/insomnia",
    "/vs/thunder-client",
  ],
};
