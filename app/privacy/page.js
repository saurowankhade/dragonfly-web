import { PRIVACY_SECTIONS } from "../lib/content";
import JsonLd from "../components/JsonLd";
import { graph, webPage, breadcrumb } from "../lib/jsonld";

export const metadata = {
  title: "Privacy",
  description:
    "Dragonfly is local-first: no account, no server, no telemetry. Your collections, environments and history stay in VS Code, and secrets go into VS Code secure storage.",
  alternates: { canonical: "/privacy" },
};

const EMAIL = "saurowankhade@gmail.com";
const sections = PRIVACY_SECTIONS;

const jsonLd = graph([
  webPage({
    path: "/privacy",
    name: "Privacy",
    description: metadata.description,
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ]),
]);

export default function PrivacyPage() {
  return (
    <section>
      <JsonLd data={jsonLd} />
      <p className="font-mono text-sm text-comment">{"// privacy.md"}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-4 max-w-[65ch] text-base text-inksoft sm:text-lg">
        Dragonfly is local-first by design. There is no account to create and no
        server to send anything to. Here is exactly what that means.
      </p>

      <div className="mt-[clamp(1.75rem,4vw,2.75rem)] border-t border-line">
        {sections.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="scroll-mt-24 border-b border-line py-6"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 max-w-[70ch] text-base text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-base text-inksoft">
        Reach me at{" "}
        <a
          href={`mailto:${EMAIL}?subject=Dragonfly privacy`}
          className="font-medium text-brand underline decoration-line2 underline-offset-4 hover:decoration-brand"
        >
          {EMAIL}
        </a>
        .
      </p>
    </section>
  );
}
