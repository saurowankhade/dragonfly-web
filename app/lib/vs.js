// Single source for the "Dragonfly vs <tool>" comparison pages: used by the
// page, the generated OG image, and the .md route handlers.

// Rows are truthful: Dragonfly is always true; the competitor value reflects
// its free, out-of-the-box behaviour. Keep in sync with the homepage table.
export const ROWS = [
  {
    label: "Runs inside VS Code",
    postman: true,
    thunder: true,
    insomnia: false,
  },
  {
    label: "Builds requests by scanning your code (Express & Next.js)",
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Collections foldered to match your codebase",
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Auth secrets kept in VS Code secure storage",
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Environments with {{variables}}",
    postman: true,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Works with no account",
    postman: false,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Everything stays on your machine",
    postman: false,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Free, no paid tier",
    postman: false,
    thunder: false,
    insomnia: false,
  },
];

export const COMPETITORS = {
  postman: {
    name: "Postman",
    key: "postman",
    lede: "Postman is a full API platform: a standalone app with accounts, cloud-synced workspaces, mock servers and paid team plans. Dragonfly is the opposite bet, a focused client that lives in your editor and builds requests from the code you already wrote.",
    edges: [
      "No app to switch to, no account to create, no sign in.",
      "Scan your Express and Next.js code and get a collection you can send right away.",
      "Everything stays on your machine, with no telemetry.",
      "Free and MIT licensed, with no paid tier gating features.",
    ],
    pickThem: [
      "Your team shares workspaces and collections in the cloud.",
      "You rely on mock servers, monitors or scheduled collection runs.",
      "You write pre-request and test scripts and run them in CI.",
    ],
    pickUs: [
      "You work solo or in small teams and live in VS Code.",
      "Your API is built with Express or Next.js and you want requests generated from it.",
      "You want no account, no sync and nothing leaving your machine.",
    ],
  },
  "thunder-client": {
    name: "Thunder Client",
    key: "thunder",
    lede: "Thunder Client is the closest peer: a REST client that also runs inside VS Code. The difference is where your requests come from. Dragonfly reads your codebase and builds them for you, and it stays free with no paid tier.",
    edges: [
      "Scan Express and Next.js routes into a collection instead of typing every URL.",
      "Collections are foldered to match your codebase structure.",
      "Auth secrets live in VS Code secure storage, never a JSON file.",
      "Free and MIT licensed, with nothing held back behind a paid plan.",
    ],
    pickThem: [
      "You already have a large Thunder Client setup and its scripting works for you.",
      "You need features from its paid plans, such as team sync or its CLI.",
    ],
    pickUs: [
      "You want your Express or Next.js routes turned into requests automatically.",
      "You want collections organized the same way as your code.",
      "You want everything free, with auth secrets in VS Code secure storage. Your Thunder Client collections import directly.",
    ],
  },
  insomnia: {
    name: "Insomnia",
    key: "insomnia",
    lede: "Insomnia is a dedicated desktop API client with strong GraphQL and design-first workflows. Dragonfly trades the separate app for staying inside VS Code, next to the code that defines your endpoints.",
    edges: [
      "No second desktop app, everything happens in the editor you already have open.",
      "Scan your Express and Next.js code to build requests automatically.",
      "Local-first: no account, no sign in, no telemetry.",
      "Free and MIT licensed.",
    ],
    pickThem: [
      "You work heavily with GraphQL, gRPC or WebSockets.",
      "You design APIs spec-first and edit OpenAPI documents in the client.",
      "You prefer a standalone desktop app outside your editor.",
    ],
    pickUs: [
      "You test REST endpoints while writing them, in VS Code.",
      "Your API is built with Express or Next.js and you want requests generated from it.",
      "You want to bring your Insomnia export along and keep working in the editor.",
    ],
  },
};

export const vsSlugs = Object.keys(COMPETITORS);
