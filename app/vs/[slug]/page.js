import { notFound } from "next/navigation";
import { CheckIcon } from "../../components/icons";
import JsonLd from "../../components/JsonLd";
import { graph, webPage, breadcrumb } from "../../lib/jsonld";
import { COMPETITORS, ROWS, vsSlugs } from "../../lib/vs";

const MARKETPLACE =
  "https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly";
const DOCS_URL = "https://docs.usedragonfly.xyz/";
const SITE_URL = "https://www.usedragonfly.xyz";

export function generateStaticParams() {
  return vsSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = COMPETITORS[slug];
  if (!c) return {};
  const title = `Dragonfly vs ${c.name}`;
  return {
    title,
    description: `${c.name} vs Dragonfly, the REST API client for VS Code that builds requests by scanning your Express and Next.js code. See how they compare and when to pick each.`,
    alternates: { canonical: `/vs/${slug}` },
    openGraph: {
      title: `${title} | Dragonfly`,
      description: `How Dragonfly, the code-aware REST API client for VS Code, compares to ${c.name}.`,
      url: `${SITE_URL}/vs/${slug}`,
    },
  };
}

export default async function VsPage({ params }) {
  const { slug } = await params;
  const c = COMPETITORS[slug];
  if (!c) notFound();

  const jsonLd = graph([
    webPage({
      path: `/vs/${slug}`,
      name: `Dragonfly vs ${c.name}`,
      description: c.lede,
      image: `/vs/${slug}/opengraph-image`,
    }),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: `Dragonfly vs ${c.name}`, path: `/vs/${slug}` },
    ]),
  ]);

  return (
    <section>
      <JsonLd data={jsonLd} />
      <p className="font-mono text-sm text-comment">{`// dragonfly-vs-${slug}.md`}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Dragonfly vs {c.name}
      </h1>
      <p className="mt-4 max-w-[68ch] text-base text-inksoft sm:text-lg">{c.lede}</p>

      <div className="mt-7 grid grid-cols-2 md:flex items-center gap-3">
        <a href={MARKETPLACE} target="_blank" className="btn text-center justify-center">
          Install <span className="hidden md:flex">for VS Code</span>
        </a>
        <a
          href={DOCS_URL}
          target="_blank"
          className="btn btn-outline text-center justify-center"
        >
          Read the docs
        </a>
      </div>

      {/* why switch */}
      <section className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Where Dragonfly is different
        </h2>
        <ul className="mt-5 flex flex-col gap-3">
          {c.edges.map((e) => (
            <li key={e} className="flex gap-3 text-base text-inksoft">
              <CheckIcon size={18} className="mt-1 flex-none text-greenink" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* table */}
      <section className="mt-[clamp(2.5rem,5vw,4rem)] scroll-mt-24 border-t border-line pt-[clamp(2.25rem,4vw,3.25rem)]">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="mr-1 font-mono font-normal text-brand">#</span>
          Side by side
        </h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-125 border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-panel text-left">
                <th className="px-4 py-3 font-medium text-muted">Feature</th>
                <th className="border-l border-line bg-brandsoft px-4 py-3 font-semibold text-brandink">
                  Dragonfly
                </th>
                <th className="border-l border-line px-4 py-3 font-medium text-muted">
                  {c.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-inksoft">{row.label}</td>
                  <td className="border-l border-line bg-brandsoft/50 px-4 py-3">
                    <CheckIcon size={17} className="text-greenink" />
                  </td>
                  <td className="border-l border-line px-4 py-3">
                    {row[c.key] ? (
                      <CheckIcon size={17} className="text-greenink" />
                    ) : (
                      <span className="text-faint">–</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-mono text-xs text-faint">
          Comparison reflects the free, out-of-the-box experience of each tool.
        </p>
      </section>
    </section>
  );
}
