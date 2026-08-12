import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Send a bug report, a feature request, or a hello to the maker of Dragonfly, the REST API client for VS Code.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section>
        <p className="font-mono text-sm text-comment">{"// contact.md"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Found a bug, or have an idea?
        </h1>
        <p className="mt-4 max-w-[60ch] text-base text-inksoft sm:text-lg">
          Dragonfly is in beta and built in the open. Send a bug report, a
          feature request, or just say hello. It goes straight to the maker.
        </p>
        <div id="message" className="mt-[clamp(1.75rem,4vw,2.75rem)] max-w-160 scroll-mt-24">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
