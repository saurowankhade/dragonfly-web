// Single source for routes, the per-file outline (h2 headings shown in the
// Explorer), and the changelog. Add a release and both the changelog page and
// its outline update automatically.

export const VIEWS = [
  { href: "/", label: "Explorer", file: "welcome.md", ext: "md", icon: "explorer" },
  { href: "/dragonfly", label: "Dragonfly", file: "new-request.http", ext: "http", icon: "dragonfly" },
  { href: "/changelog", label: "Changelog", file: "changelog.md", ext: "md", icon: "history" },
];

export const releases = [
  {
    version: "0.0.6",
    date: "August 12, 2026",
    iso: "2026-08-12",
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
      "Import from HAR captures saved in the browser devtools.",
    ],
  },
  {
    version: "0.0.4",
    date: "August 8, 2026",
    iso: "2026-08-08",
    changes: [
      "OpenAPI 3.1 import, grouped into folders by tag.",
      "Copy any request as Go or Rust.",
    ],
  },
  {
    version: "0.0.3",
    date: "August 6, 2026",
    iso: "2026-08-06",
    changes: [
      "Environments with {{variables}} shared across requests.",
      "Tokens moved into VS Code secure storage.",
    ],
  },
  {
    version: "0.0.2",
    date: "August 4, 2026",
    iso: "2026-08-04",
    changes: [
      "Import Thunder Client and Insomnia collections.",
      "Request history saved to the Activity view.",
    ],
  },
  {
    version: "0.0.1",
    date: "August 2, 2026",
    iso: "2026-08-02",
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
  "/dragonfly": [
    { id: "request", label: "Request" },
    { id: "response", label: "Response" },
  ],
  "/changelog": [
    ...releases.map((r) => ({ id: versionId(r.version), label: "v" + r.version })),
  ],
};
