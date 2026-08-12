"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    setStatus("sending");
    setError("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Could not send.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "ok") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-line2 bg-panel p-6">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-green/15 text-greenink">
          <CheckIcon size={18} />
        </span>
        <div>
          <p className="font-medium text-ink">Message sent</p>
          <p className="text-sm text-muted">Thanks. You will hear back at the email you gave.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="font-mono text-xs text-muted">name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-md border border-line2 bg-bg px-3 py-2.5 text-sm outline-none focus:border-brand"
            placeholder="Ada Lovelace"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-xs text-muted">email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-md border border-line2 bg-bg px-3 py-2.5 text-sm outline-none focus:border-brand"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-mono text-xs text-muted">message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="resize-y rounded-md border border-line2 bg-bg px-3 py-2.5 text-sm outline-none focus:border-brand"
          placeholder="A bug report, a feature idea, or just hello."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={status === "sending"} className="btn disabled:opacity-70">
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        {status === "error" && (
          <span className="text-sm text-amberink">{error}</span>
        )}
      </div>
    </form>
  );
}
