"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

export default function SubscribeForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const email = e.currentTarget.email.value;
    setStatus("sending");
    setError("");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Could not subscribe.");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "ok") {
    return (
      <p className="inline-flex items-center gap-2 text-sm text-greenink">
        <CheckIcon size={16} /> You are on the list. Watch for the next release.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <form
        noValidate
        onSubmit={onSubmit}
        className="flex h-11 items-center gap-1 rounded-[14px] border border-line2 bg-bg pr-1 transition-colors focus-within:border-brand sm:w-96"
      >
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@youremail.com"
          className="w-full min-w-0 bg-transparent pl-4 font-mono text-sm text-ink outline-none placeholder:text-faint"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-[10px] border border-brand bg-brand px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brandink disabled:opacity-60"
        >
          {status === "sending" ? "…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && <span className="pl-1 text-xs text-amberink">{error}</span>}
    </div>
  );
}
