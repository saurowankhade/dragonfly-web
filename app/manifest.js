export default function manifest() {
  return {
    name: "Dragonfly: REST API Client for VS Code",
    short_name: "Dragonfly",
    description:
      "A REST API client for VS Code. Send requests, organize collections, import from Postman, OpenAPI and cURL, and scan Express and Next.js code for routes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f1012",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
