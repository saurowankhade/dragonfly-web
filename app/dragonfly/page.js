import RequestPlayground from "../components/RequestPlayground";

export const metadata = {
  title: "Try a request",
  description:
    "Try the Dragonfly request flow. Pick a method, set a URL, press Send, and read the response, the same way it works inside VS Code.",
  alternates: { canonical: "/dragonfly" },
};

export default function DragonflyPage() {
  return (
    <>
      <section>
        <p className="font-mono text-sm text-comment">{"// new-request.http"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Build a request and send it.
        </h1>
        <p className="mt-4 text-base text-inksoft sm:text-lg">
          This is the same flow you get inside VS Code. Choose a method, set the
          URL, and press Send. The response comes back inline with its status,
          size and timing. In the extension it saves to a collection and runs
          against your real endpoints.
        </p>

        <div className="mt-[clamp(1.5rem,4vw,2.25rem)]">
          <RequestPlayground />
        </div>

        <p className="mt-4 font-mono text-xs text-faint">
          Preview data is hardcoded per method. Nothing leaves the page.
        </p>
      </section>
    </>
  );
}
