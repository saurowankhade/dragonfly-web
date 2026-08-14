import Image from "next/image";
import CopyCommand from "./components/CopyCommand";
import { CheckIcon } from "./components/icons";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "REST API Client for VS Code",
  description:
    "Test APIs without leaving VS Code. Send requests, save collections, import from Postman, OpenAPI and cURL, and auto-discover Express and Next.js routes. Free.",
  alternates: { canonical: "/" },
};

const MARKETPLACE =
  "https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly";
const INSTALL_CMD = "ext install saurabhwankhade.dragonfly";

const features = [
  {
    key: "request_builder",
    title: "Request builder",
    body: "Method, URL, params, headers, body and auth, docked in the Activity Bar. Send and read the response next to your code.",
  },
  {
    key: "collections",
    title: "Collections and environments",
    body: "Folders, search, and one-click environment switching. {{variables}} resolve across every request.",
  },
  {
    key: "private_auth",
    title: "Auth that stays private",
    body: "Bearer, API key and basic auth. Secrets go into VS Code secure storage, never a JSON file on disk.",
  },
  {
    key: "copy_as_code",
    title: "Copy as code",
    body: "Export any request as cURL, Node.js, Python, Go, PHP, Java or Rust when you need it in a script.",
  },
];

const sources = [
  "Postman collections",
  "OpenAPI and Swagger",
  "cURL commands",
];

const compareRows = [
  {
    label: "Runs inside VS Code",
    df: true,
    postman: true,
    thunder: true,
    insomnia: false,
  },
  {
    label: "Builds requests by scanning your code (Express & Next.js)",
    df: true,
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Collections foldered to match your codebase structure",
    df: true,
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Auth secrets kept in VS Code secure storage",
    df: true,
    postman: false,
    thunder: false,
    insomnia: false,
  },
  {
    label: "Import Postman, OpenAPI & cURL",
    df: true,
    postman: true,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Environments with {{variables}}",
    df: true,
    postman: true,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Copy any request as code (cURL, Python, Go, +)",
    df: true,
    postman: true,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Request history built in",
    df: true,
    postman: true,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Works with no account",
    df: true,
    postman: false,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Everything stays on your machine",
    df: true,
    postman: false,
    thunder: true,
    insomnia: true,
  },
  {
    label: "Free, no paid tier",
    df: true,
    postman: false,
    thunder: false,
    insomnia: false,
  },
];

const faqs = [
  {
    q: "How do I test an API endpoint inside VS Code?",
    a: "Install Dragonfly and open it from the Activity Bar. Build the request in the sidebar with a method, URL, headers, body and auth, then press Send. The response opens next to your code, so there is no second app to switch to.",
  },
  {
    q: "Can I import my Postman collection?",
    a: "Yes, and not only Postman. Import from a Postman collection, an OpenAPI or Swagger spec, or a single cURL command. Run Import Collection and the format is detected for you. Folders, headers, query params and bodies come across, and live credentials are left out on purpose.",
  },
  {
    q: "Can it find the API routes in my project automatically?",
    a: "Yes. Run Scan Workspace for Routes and Dragonfly parses your source for Express route handlers and Next.js API routes, then builds a collection from what it finds. Run it again after you add endpoints and it picks up the changes.",
  },
  {
    q: "Where does Dragonfly store my data?",
    a: "Everything stays on your machine. Collections, environments and history live in VS Code storage, and tokens go into VS Code secure storage rather than a JSON file. There is no account, no sign in and no server.",
  },
];

export default function Home() {
  return (
    <>
      {/* welcome / hero */}
      <section>
        <p className="font-mono text-sm text-comment">
          {"// you already wrote these routes. stop retyping their URLs."}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/dragonfly.png"
            alt="Dragonfly"
            width={56}
            height={56}
            className="h-11 w-11 flex-none rounded-xl sm:h-14 sm:w-14"
            priority
          />
          <div className="min-w-0">
            <h1 className="text-4xl font-semibold leading-none tracking-tight sm:text-6xl">
              Dragonfly
            </h1>
            <p className="mt-1.5 font-mono text-base text-muted">
              API testing inside VS Code, without leaving your codebase
            </p>
          </div>
        </div>
        <p className="mt-6 text-lg text-inksoft">
          Dragonfly reads your Express and Next.js code and turns your routes
          into ready-to-send requests. Build, send and inspect them right next
          to your code. No second app, and nothing ever leaves your machine.
        </p>
        <p className="mt-3 font-mono text-sm text-comment">
          {"// tip: open the Dragonfly tab in the sidebar to try a request"}
        </p>
        <div className="mt-7 grid grid-cols-2 md:flex items-center gap-3">
          <a
            href={MARKETPLACE}
            target="_blank"
            className="btn text-center justify-center"
          >
            Install <span className="hidden md:flex">for VS Code</span>
          </a>
          <CopyCommand command={INSTALL_CMD} />
        </div>
        <p className="mt-4 text-sm text-muted">
          New here?{" "}
          <a
            href="http://docs.usedragonfly.xyz/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand underline decoration-line2 underline-offset-4 hover:decoration-brand"
          >
            Read the docs
          </a>{" "}
          to get set up in a minute.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {[
            "Free, no paid tier",
            "No account, no sign in",
            "Runs on your machine",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              {t}
            </li>
          ))}
        </ul>

        <figure className="mt-[clamp(1.75rem,4vw,2.75rem)] overflow-hidden rounded-xl border border-line2 bg-editor">
          <Image
            src="/product-shot.png"
            alt="Dragonfly inside VS Code showing a GET request and its JSON response side by side"
            width={2000}
            height={1019}
            className="block h-auto w-full"
            priority
          />
        </figure>
      </section>

      {/* the difference */}
      <section
        id="difference"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className=" text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Other clients start empty. Dragonfly starts from your code.
        </h2>
        <p className="mt-4 text-base text-inksoft sm:text-lg">
          Most API clients hand you a blank request and wait for a URL. Run{" "}
          <code className="rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-[0.85em] text-brandink">
            Scan Workspace for Routes
          </code>{" "}
          and Dragonfly reads your source, finds every Express and Next.js
          endpoint, and turns them into a collection you can send right away.
          Add a route later, scan again, and it updates.
        </p>
        <div className="mt-[clamp(1.5rem,3vw,2rem)] overflow-hidden rounded-lg border border-line2 bg-bg">
          <div className="flex gap-5 border-b border-line bg-panel px-3.5 py-2">
            <span className="text-[0.7rem] uppercase tracking-wider text-faint">
              Problems
            </span>
            <span className="text-[0.7rem] uppercase tracking-wider text-faint">
              Output
            </span>
            <span className="border-b border-brand pb-0.5 text-[0.7rem] uppercase tracking-wider text-ink">
              Terminal
            </span>
          </div>
          <div className="overflow-x-auto px-4 py-3.5 font-mono text-sm leading-[1.9] text-inksoft">
            <div className="whitespace-nowrap">
              <span className="text-greenink">➜ dragonfly</span> scan workspace
              for routes
            </div>
            {[
              { m: "GET", p: "/api/users", c: "text-greenink" },
              { m: "POST", p: "/api/users", c: "text-brandink" },
              { m: "GET", p: "/api/users/:id", c: "text-greenink" },
              { m: "PATCH", p: "/api/users/:id", c: "text-amberink" },
            ].map((r, i) => (
              <div key={i} className="flex gap-3 whitespace-nowrap">
                <span className={`w-14 shrink-0 font-medium ${r.c}`}>
                  {r.m}
                </span>
                <span>{r.p}</span>
              </div>
            ))}
            <div className="mt-1 whitespace-nowrap text-greenink">
              ✓ 4 routes found in routes/users.js, added to a collection
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section
        id="features"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>A
          complete client, not a cut down one.
        </h2>
        <div className="mt-[clamp(1.5rem,4vw,2.25rem)] grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {features.map((f) => (
            <article key={f.key} className="bg-bg py-6 px-4 md:px-6">
              <p className="font-mono text-sm text-brandink">
                &quot;{f.key}&quot;:
              </p>
              <h3 className="mt-1.5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-base text-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* importing */}
      <section
        id="importing"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Bring the work you already have.
        </h2>
        <p className="mt-4 text-base text-inksoft sm:text-lg">
          One Import command detects the format and pulls in folders, headers,
          params, bodies and environments intact, so{" "}
          <code className="rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-[0.85em] text-brandink">
            {"{{baseUrl}}"}
          </code>{" "}
          resolves right away. Live credentials are left out on purpose.
        </p>
        <ul className="mt-[clamp(1.25rem,3vw,1.75rem)] grid grid-cols-1 gap-x-6 gap-y-2.5 font-mono text-sm text-inksoft sm:grid-cols-2">
          {sources.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span className="text-brandink">+</span>
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* compare */}
      <section
        id="compare"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          How it compares.
        </h2>
        <p className="mt-4 text-base text-inksoft sm:text-lg">
          Postman, Thunder Client and Insomnia are all good tools. Here is where
          Dragonfly is different, and where it overlaps.
        </p>
        <div className="mt-[clamp(1.5rem,4vw,2.25rem)] overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-155 border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-panel text-left">
                <th className="px-4 py-3 font-medium text-muted">Feature</th>
                <th className="border-l border-line bg-brandsoft px-4 py-3 font-semibold text-brandink">
                  Dragonfly
                </th>
                <th className="border-l border-line px-4 py-3 font-medium text-muted">
                  Postman
                </th>
                <th className="border-l border-line px-4 py-3 font-medium text-muted">
                  Thunder Client
                </th>
                <th className="border-l border-line px-4 py-3 font-medium text-muted">
                  Insomnia
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-line last:border-0"
                >
                  <td className="px-4 py-3 text-inksoft">{row.label}</td>
                  {["df", "postman", "thunder", "insomnia"].map((col) => (
                    <td
                      key={col}
                      className={`border-l border-line px-4 py-3 ${
                        col === "df" ? "bg-brandsoft/50" : ""
                      }`}
                    >
                      {row[col] ? (
                        <CheckIcon size={17} className="text-greenink" />
                      ) : (
                        <span className="text-faint">–</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-mono text-xs text-faint">
          Comparison reflects the free, out-of-the-box experience of each tool.
        </p>
      </section>

      {/* scope */}
      <section
        id="scope"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          What Dragonfly is, and is not.
        </h2>
        <p className="mt-4 max-w-[62ch] text-base text-inksoft sm:text-lg">
          Dragonfly does one job well: read your codebase and build your
          requests for you, right inside the editor. Knowing where it stops is
          part of the pitch.
        </p>
        <div className="mt-[clamp(1.5rem,4vw,2.25rem)] grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {[
            {
              k: "// built for",
              title: "Built for this",
              items: [
                "Testing the endpoint you are working on right now",
                "Turning Express & Next.js routes into a collection",
                "Importing Postman, OpenAPI, cURL and more",
                "Staying local, no account, no telemetry",
              ],
            },
            {
              k: "// on the roadmap",
              title: "On the roadmap",
              items: [
                "Team sync for collections and environments",
                "More frameworks for route discovery",
                "Deeper OpenAPI and GraphQL support",
                "Driven by what people ask for",
              ],
            },
          ].map((col) => (
            <div key={col.title} className="bg-bg p-5">
              <p className="font-mono text-sm text-brandink">{col.k}</p>
              <h3 className="mt-1.5 text-lg font-semibold">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* faq */}
      <section
        id="faq"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Questions, answered plainly.
        </h2>
        <div className="mt-[clamp(1.25rem,3vw,2rem)] border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="relative list-none py-4 pr-8 text-base font-medium sm:text-lg">
                {f.q}
                <span className="absolute right-0.5 top-1/2 -translate-y-1/2 font-mono text-xl text-muted group-open:hidden">
                  +
                </span>
                <span className="absolute right-0.5 top-1/2 hidden -translate-y-1/2 font-mono text-xl text-muted group-open:inline">
                  –
                </span>
              </summary>
              <p className="mb-4 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* contact */}
      <section
        id="contact"
        className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Found a bug, or have an idea?
        </h2>
        <p className="mt-4 text-base text-inksoft sm:text-lg">
          Dragonfly is in beta and built in the open. Send a bug report, a
          feature request, or just say hello at{" "}
          <a
            href="mailto:saurowankhade@gmail.com?subject=Dragonfly"
            className="font-medium text-brand underline decoration-line2 underline-offset-4 hover:decoration-brand"
          >
            saurowankhade@gmail.com
          </a>
          .
        </p>
      </section>
      <Analytics />
    </>
  );
}
