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
  },
};

export const vsSlugs = Object.keys(COMPETITORS);
