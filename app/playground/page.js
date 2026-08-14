import RequestPlayground from "../components/RequestPlayground";

const MARKETPLACE =
  "https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly";

export const metadata = {
  title: "API Request Playground – Try It in Your Browser",
  description:
    "Try Dragonfly's request builder live: pick a method, set a URL, add headers, body and auth, press Send, and read the response, right in your browser.",
  alternates: { canonical: "/playground" },
};

export default function DragonflyPage() {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-mono text-sm text-comment">{"// new-request.http"}</p>
        <span className="rounded-full border border-line2 bg-brandsoft px-2.5 py-0.5 font-mono text-xs text-brandink">
          Playground
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Try a request, right here in the browser.
        </h1>
        <a href={MARKETPLACE} target="_blank" className="btn btn-outline flex-none">
          Install Dragonfly
        </a>
      </div>
      <p className="mt-4 text-base text-inksoft sm:text-lg">
        This is a live playground for the Dragonfly request builder. Choose a
        method, set the URL, add params, headers, a body and auth, then press
        Send. The response comes back inline with its status, size and timing,
        the same flow you get inside VS Code, where it saves to a collection and
        runs against your real endpoints.
      </p>

      <div className="mt-[clamp(1.5rem,4vw,2.25rem)]">
        <RequestPlayground />
      </div>

      <p className="mt-4 font-mono text-xs text-faint">
        Playground responses are hardcoded per method. Nothing leaves the page.
      </p>
    </section>
  );
}
