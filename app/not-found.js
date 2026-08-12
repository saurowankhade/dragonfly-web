import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section>
      <p className="font-mono text-sm text-comment">{"// 404: file not found"}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        This file doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-160 text-base text-inksoft sm:text-lg">
        The page you were looking for isn&apos;t part of Dragonfly, or it may
        have moved. Head back to the start and pick up from there.
      </p>
      <Link href="/" className="btn mt-7">
        Back to welcome.md
      </Link>
    </section>
  );
}
