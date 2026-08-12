"use client";

import { useState } from "react";

export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard?.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex max-w-full items-center truncate gap-2.5 rounded-md border border-line2 bg-bg py-2 pl-3.5 pr-2.5 font-mono text-sm text-inksoft transition-colors hover:border-brand hover:bg-panel"
    >
      <span className="text-greenink">›</span>
      <code className="min-w-0 truncate text-ink">{command}</code>
      <span className="flex-none rounded-md bg-panel2 px-2 py-1 text-xs text-muted">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
