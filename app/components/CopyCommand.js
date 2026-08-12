"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

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
      className="btn btn-outline max-w-70 truncate font-mono text-sm"
    >
      <code className="min-w-0 truncate text-ink">{command}</code>
      <span className="text-muted">
        {copied ? (
          <CheckIcon size={13} className="text-greenink" />
        ) : (
          <CopyIcon size={13} />
        )}
      </span>
    </button>
  );
}
