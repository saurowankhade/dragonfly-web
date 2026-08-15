import { releases } from "./nav";
import { COMPETITORS, ROWS } from "./vs";

export const SITE_URL = "https://www.usedragonfly.xyz";
export const DOCS_URL = "http://docs.usedragonfly.xyz/";
export const MARKETPLACE =
  "https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly";
export const INSTALL_CMD = "ext install saurabhwankhade.dragonfly";

export const FEATURES = [
  "Request builder: method, URL, params, headers, body and auth, docked in the Activity Bar.",
  "Route discovery: scan a workspace for Express and Next.js routes (App Router and Pages Router) and build a collection from them.",
  "Collections foldered to match your codebase structure.",
  "Collection import: Postman collections, with folders, headers, query params and bodies intact.",
  "OpenAPI and Swagger import: one request per operation, grouped into folders by tag.",
  "cURL import: paste a command and the form fills itself in.",
  "Environments with {{variable}} substitution, one click to switch.",
  "Auth: Bearer Token, API Key and Basic Auth, secrets kept in VS Code secure storage.",
  "Copy any request as cURL, Node.js, Python, Go, PHP, Java or Rust.",
  "Request history: every request you send is saved to Activity.",
];

const FAQS = [
  [
    "How do I test an API endpoint inside VS Code?",
    "Install Dragonfly and open it from the Activity Bar. Build the request in the sidebar (method, URL, headers, body, auth) and press Send. The response shows up next to your code.",
  ],
  [
    "Can it find the API routes in my project automatically?",
    "Yes. Run Scan Workspace for Routes and it parses your source for Express and Next.js routes, then builds a collection from what it finds, foldered to match your codebase.",
  ],
  [
    "Which frameworks does route discovery support?",
    "Express and Next.js, covering both the App Router and the Pages Router. For anything else, import an OpenAPI or Swagger spec, a Postman collection, or a cURL command.",
  ],
  [
    "Where does my data go?",
    "Everything stays on your machine. Collections, environments and history live in VS Code storage, and tokens go into VS Code secure storage. No account, no server, no telemetry.",
  ],
  ["Is it free?", "Yes. No account, no paid tier, no telemetry. MIT licensed."],
];

export function welcomeMd() {
  return `# Dragonfly: REST API Client for VS Code

Send HTTP requests, organize them into collections, and pull the API routes you
already wrote straight out of your codebase. All without leaving the editor.

- Install: ${MARKETPLACE}
- Quick Open: \`${INSTALL_CMD}\`
- Docs: ${DOCS_URL}

## What it does

Most API clients hand you an empty request and let you type the URL yourself.
Dragonfly reads your project first: run a scan and it picks up your Express and
Next.js routes, then turns them into a collection foldered to match your
codebase, so the endpoints you already wrote are ready to send. Everything stays
on your machine. No account, no sign-in, no paid tier.

## Features

${FEATURES.map((f) => `- ${f}`).join("\n")}

## How it compares

Dragonfly runs in the VS Code sidebar, builds requests by scanning your Express
and Next.js code, keeps auth secrets in VS Code secure storage, and is free and
MIT licensed. Postman is a separate app with sign-in and paid plans; Thunder
Client and Insomnia do not read your code to build requests.

## FAQ

${FAQS.map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}
`;
}

export function playgroundMd() {
  return `# Try a request in Dragonfly

Dragonfly gives you a full request builder inside VS Code: pick a method
(GET, POST, PUT, PATCH, DELETE), set the URL, add params, headers, a body and
auth, then press Send. The response opens next to your code with its status,
size and timing.

- Install: ${MARKETPLACE}
- Quick Open: \`${INSTALL_CMD}\`
- Docs: ${DOCS_URL}

Auth types: Bearer Token, API Key and Basic Auth. Secrets are stored in VS Code
secure storage, never written into a collection file. Any request can be copied
out as cURL, Node.js, Python, Go, PHP, Java or Rust.
`;
}

export function changelogMd() {
  const body = releases
    .map((r) => {
      const head = `## v${r.version}${r.tag ? ` (${r.tag})` : ""} - ${r.date}`;
      return `${head}\n${r.changes.map((c) => `- ${c}`).join("\n")}`;
    })
    .join("\n\n");
  return `# Dragonfly Changelog

Release notes for Dragonfly, the REST API client for VS Code.
Subscribe: ${SITE_URL}/rss.xml

${body}
`;
}

export function llmsTxt() {
  return `# Dragonfly

> Dragonfly is a free, REST API client that runs inside Visual Studio
> Code. It sends HTTP requests, organizes them into collections, and can scan your
> Express and Next.js codebase to build a collection of requests automatically,
> foldered to match your project. Everything stays on the user's machine: no
> account, no server, no telemetry.

## What it does

Most API clients hand you an empty request and let you type the URL yourself.
Dragonfly reads your project first: run a scan and it picks up your Express and
Next.js routes (App Router and Pages Router), then turns them into a collection
foldered to match your codebase, so the endpoints you already wrote are ready to
send. The response opens next to your code with its status, size and timing.
Everything stays on your machine. No account, no sign-in, no paid tier.

## Features

${FEATURES.map((f) => `- ${f}`).join("\n")}

## Auth and code export

Auth types are Bearer Token, API Key and Basic Auth. The secret half of each is
stored in VS Code secure storage, never written into a collection file. Any
request can be copied out as cURL, Node.js, Python, Go, PHP, Java or Rust.

## How it compares

Dragonfly runs in the VS Code sidebar, builds requests by scanning your Express
and Next.js code, keeps auth secrets in VS Code secure storage, and is free and
MIT licensed. Postman is a separate app with sign-in and paid plans; Thunder
Client and Insomnia do not read your code to build requests.

## FAQ

${FAQS.map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}

## Install

- VS Code Marketplace: ${MARKETPLACE}
- Quick Open: ${INSTALL_CMD}
- Documentation: ${DOCS_URL}

## Pages

- [Overview](${SITE_URL}/welcome.md): what Dragonfly does, features, comparison, FAQ.
- [Try a request](${SITE_URL}/playground.md): the in-editor request builder and how to test an API.
- [Changelog](${SITE_URL}/changelog.md): release notes (also available as RSS at ${SITE_URL}/rss.xml).
- [Documentation](${DOCS_URL}): guides and reference for using Dragonfly.
- [Privacy](${SITE_URL}/privacy.md): local-first data handling, no account, no telemetry.
- [Dragonfly vs Postman](${SITE_URL}/vs/postman.md), [vs Thunder Client](${SITE_URL}/vs/thunder-client.md), [vs Insomnia](${SITE_URL}/vs/insomnia.md): how Dragonfly compares and when to pick each.

## Key facts

- Category: developer tool, VS Code extension, REST API client, Postman alternative.
- Differentiators: builds requests by scanning Express and Next.js code; collection folders mirror your codebase; auth secrets in VS Code secure storage; free and MIT licensed.
- Imports: Postman collections, OpenAPI/Swagger, cURL.
- Pricing: free, no paid tier, no telemetry, MIT licensed.
- Platform: Visual Studio Code (Marketplace ID saurabhwankhade.dragonfly).
- Contact: saurowankhade@gmail.com
`;
}

export const PRIVACY_SECTIONS = [
  {
    id: "collect",
    title: "What Dragonfly collects",
    body: "Nothing. Dragonfly has no account, no sign in and no backend server. It does not send your requests, responses, collections, environments or usage anywhere, and it ships no analytics or telemetry.",
  },
  {
    id: "storage",
    title: "Where your data lives",
    body: "Collections, environments and request history are saved in VS Code's own workspace and global storage on your machine. Auth secrets, such as bearer tokens, API keys and basic-auth passwords, go into VS Code secure storage (SecretStorage), never written into a collection file on disk.",
  },
  {
    id: "requests",
    title: "The requests you send",
    body: "When you press Send, the request goes directly from your machine to the endpoint you chose. Dragonfly does not proxy, log or inspect that traffic. Where it goes, and what it contains, is entirely up to you.",
  },
  {
    id: "thirdparty",
    title: "Third parties",
    body: "The extension itself talks to no third-party services. This website uses privacy-friendly, cookieless analytics to count page views. Installing from the Visual Studio Marketplace is governed by Microsoft's own terms and privacy policy.",
  },
  {
    id: "contact",
    title: "Questions",
    body: "This is the whole policy: your data stays with you. If anything is unclear, or you spot something that should be tightened, get in touch.",
  },
];

export function privacyMd() {
  const body = PRIVACY_SECTIONS.map(
    (s) => `## ${s.title}\n${s.body}`
  ).join("\n\n");
  return `# Dragonfly Privacy

Dragonfly is local-first by design. There is no account to create and no server
to send anything to. Here is exactly what that means.

${body}

Contact: saurowankhade@gmail.com
`;
}

export function vsMd(slug) {
  const c = COMPETITORS[slug];
  if (!c) return null;
  const edges = c.edges.map((e) => `- ${e}`).join("\n");
  const tableHead = `| Feature | Dragonfly | ${c.name} |\n| --- | --- | --- |`;
  const tableRows = ROWS.map(
    (r) => `| ${r.label} | Yes | ${r[c.key] ? "Yes" : "No"} |`
  ).join("\n");
  return `# Dragonfly vs ${c.name}

${c.lede}

- Install: ${MARKETPLACE}
- Quick Open: \`${INSTALL_CMD}\`
- Docs: ${DOCS_URL}

## Where Dragonfly is different

${edges}

## Side by side

${tableHead}
${tableRows}

Comparison reflects the free, out-of-the-box experience of each tool.

`;
}
