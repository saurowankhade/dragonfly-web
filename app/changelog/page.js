import { releases, versionId } from "../lib/nav";

export const metadata = {
  title: "Changelog",
  description:
    "What has shipped in Dragonfly, the REST API client for VS Code. Release notes for every version.",
  alternates: { canonical: "/changelog" },
};

export default function ChangelogPage() {
  return (
    <section>
      <p className="font-mono text-sm text-comment">{"// changelog.md"}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Changelog</h1>
      <p className="mt-4 max-w-[60ch] text-base text-inksoft sm:text-lg">
        What has shipped so far. Dragonfly is early, so this list grows quickly.
      </p>

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
