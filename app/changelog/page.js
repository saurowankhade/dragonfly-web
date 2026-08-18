import { releases, versionId } from "../lib/nav";
import { SITE_URL } from "../lib/content";
import SubscribeForm from "../components/SubscribeForm";
import JsonLd from "../components/JsonLd";
import { graph, webPage, breadcrumb } from "../lib/jsonld";
import { RssIcon } from "../components/icons";

export const metadata = {
  title: "Changelog – What's New in Dragonfly",
  description:
    "Every release of Dragonfly, the REST API client for VS Code. Full version-by-version release notes, with RSS and email updates so you never miss a feature.",
  alternates: {
    canonical: "/changelog",
    types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
  },
};

const jsonLd = graph([
  webPage({
    path: "/changelog",
    name: "Dragonfly Changelog",
    description: metadata.description,
    image: "/changelog/opengraph-image.png",
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Changelog", path: "/changelog" },
  ]),
]);

export default function ChangelogPage() {
  return (
    <section>
      <JsonLd data={jsonLd} />
      <p className="font-mono text-sm text-comment">{"// changelog.md"}</p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Changelog</h1>
        <a
          href="/rss.xml"
          target="_blank"
          title="RSS feed"
          aria-label="RSS feed"
          className="group relative grid h-9 w-9 flex-none place-items-center rounded-lg border border-line2 text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <RssIcon size={18} />
          <span className="pointer-events-none absolute right-0 top-[calc(100%+6px)] z-50 hidden whitespace-nowrap rounded-md border border-line2 bg-bg px-2 py-1 text-xs text-ink group-hover:block">
            RSS feed
          </span>
        </a>
      </div>

      <p className="mt-4 text-base text-inksoft sm:text-lg">
        What has shipped so far. Dragonfly is early, so this list grows quickly.
      </p>

      {/* subscribe */}
      {/* <div id="subscribe" className="mt-[clamp(1.5rem,3vw,2rem)] scroll-mt-24">
        <p className="mb-2 text-sm text-muted">
          Get release notes by email, or subscribe via RSS.
        </p>
        <SubscribeForm />
      </div> */}

      <div className="mt-[clamp(1.75rem,4vw,2.75rem)] flex flex-col gap-9">
        {releases.map((rel) => (
          <article
            key={rel.version}
            id={versionId(rel.version)}
            className="grid scroll-mt-24 gap-3 sm:grid-cols-[160px_1fr]"
          >
            <div>
              <h2 className="flex flex-wrap items-center gap-2 font-mono text-base font-medium text-ink">
                v{rel.version}
                {rel.tag && (
                  <span className="rounded-full bg-brandsoft px-2 py-0.5 text-xs text-brandink">
                    {rel.tag}
                  </span>
                )}
              </h2>
              <p className="mt-1 font-mono text-xs text-faint">{rel.date}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {rel.changes.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-inksoft">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
