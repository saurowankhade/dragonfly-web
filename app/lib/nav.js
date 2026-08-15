// Single source for routes, the per-file outline (h2 headings shown in the
// Explorer), and the changelog. Add a release and both the changelog page and
// its outline update automatically.

export const VIEWS = [
  { href: "/", label: "Explorer", file: "welcome.md", ext: "md", icon: "explorer" },
  { href: "/playground", label: "Playground", file: "playground", ext: "http", icon: "playground" },
  { href: "/changelog", label: "Changelog", file: "changelog.md", ext: "md", icon: "history" },
];

export const releases = [
  {
    version: "0.0.6",
    date: "August 10, 2026",
    iso: "2026-08-10",
    tag: "Latest",
    changes: [
      "Express route discovery now follows nested and Router-level routes.",
      "Collection folders mirror your codebase structure.",
      "Faster workspace scan on large projects.",
      "Fixed cURL import when headers contain quotes.",
    ],
  },
  {
    version: "0.0.5",
    date: "August 10, 2026",
    iso: "2026-08-10",
    changes: [
      "Next.js App Router route groups are picked up by scanning.",
      "Paste a cURL command and the request form fills itself in.",
    ],
  },
  {
    version: "0.0.4",
    date: "August 10, 2026",
    iso: "2026-08-10",
    changes: [
      "Grouped into folders by tag.",
      "Copy any request as Go or Rust.",
    ],
  },
  {
    version: "0.0.3",
    date: "August 7, 2026",
    iso: "2026-08-07",
    changes: [
      "Environments with {{variables}} shared across requests.",
      "Tokens moved into VS Code secure storage.",
    ],
  },
  {
    version: "0.0.2",
    date: "August 6, 2026",
    iso: "2026-08-06",
    changes: [
      "Import Postman collections, with folders and headers intact.",
      "Request history saved to the Activity view.",
    ],
  },
  {
    version: "0.0.1",
    date: "August 6, 2026",
    iso: "2026-08-06",
    tag: "First beta",
    changes: [
      "First public beta on the VS Code Marketplace.",
      "Request builder, collections, and Express and Next.js route scanning.",
    ],
  },
];

export const versionId = (v) => "v" + v.replace(/\./g, "-");

// h2 outline per route, shown in the Explorer panel for the open file.
export const OUTLINES = {
  "/": [
    { id: "difference", label: "The difference" },
    { id: "features", label: "Features" },
    { id: "importing", label: "Importing" },
    { id: "compare", label: "Comparison" },
    { id: "scope", label: "Scope" },
    { id: "faq", label: "FAQ" },
  ],
  "/playground": [
    { id: "request", label: "Request" },
    { id: "response", label: "Response" },
  ],
  "/changelog": [
    ...releases.map((r) => ({ id: versionId(r.version), label: "v" + r.version })),
  ],
};
