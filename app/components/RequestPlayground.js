"use client";

import { useState } from "react";
import { RunIcon, CloseIcon } from "./icons";
import { BASE_URL, METHODS, RESPONSES, urlFor } from "../lib/demo";

const REQ_TABS = ["Params", "Headers", "Body", "Auth"];
const RES_TABS = ["Response", "Headers", "Cookies"];
const AUTH_TYPES = ["No Auth", "Bearer Token", "Basic Auth", "API Key"];

const RES_HEADERS = [
  ["content-type", "application/json; charset=utf-8"],
  ["server", "dragonfly-preview"],
  ["cache-control", "no-store"],
  ["x-powered-by", "Dragonfly"],
];

function emptyRow() {
  return { key: "", value: "" };
}

function buildBody(method, params, bodyText) {
  const base = RESPONSES[method];
  if (method === "DELETE") return base.body;
  let obj = {};
  try {
    obj = JSON.parse(base.body);
  } catch {
    obj = {};
  }
  const out = {};
  const query = {};
  params.forEach((p) => {
    if (p.key.trim()) query[p.key] = p.value;
  });
  if (Object.keys(query).length) out.query = query;
  if (["POST", "PUT", "PATCH"].includes(method) && bodyText.trim()) {
    try {
      out.sent = JSON.parse(bodyText);
    } catch {
      out.sentRaw = bodyText;
    }
  }
  return JSON.stringify({ ...out, ...obj }, null, 2);
}

function Rows({ rows, setRows, keyPh, valPh }) {
  function update(i, field, v) {
    const next = rows.map((r, idx) => (idx === i ? { ...r, [field]: v } : r));
    setRows(next);
  }
  return (
    <div className="flex flex-col gap-2">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            value={r.key}
            onChange={(e) => update(i, "key", e.target.value)}
            placeholder={keyPh}
            className="min-w-0 flex-1 rounded-md border border-line2 bg-bg px-2.5 py-1.5 font-mono text-sm outline-none focus:border-brand"
          />
          <input
            value={r.value}
            onChange={(e) => update(i, "value", e.target.value)}
            placeholder={valPh}
            className="min-w-0 flex-1 rounded-md border border-line2 bg-bg px-2.5 py-1.5 font-mono text-sm outline-none focus:border-brand"
          />
          <button
            type="button"
            onClick={() => setRows(rows.length > 1 ? rows.filter((_, idx) => idx !== i) : [emptyRow()])}
            aria-label="Remove row"
            className="grid h-8 w-8 flex-none place-items-center rounded-md text-faint hover:bg-panel2 hover:text-ink"
          >
            <CloseIcon size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => setRows([...rows, emptyRow()])}
        className="self-start rounded-md border border-line2 px-2.5 py-1 font-mono text-xs text-brandink hover:border-brand"
      >
        + Add
      </button>
    </div>
  );
}

export default function RequestPlayground() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState(urlFor("GET"));
  const [params, setParams] = useState([emptyRow()]);
  const [headers, setHeaders] = useState([{ key: "Accept", value: "application/json" }]);
  const [body, setBody] = useState('{\n  "name": "Payments API"\n}');
  const [authType, setAuthType] = useState("No Auth");
  const [authA, setAuthA] = useState(""); // token / username / key name
  const [authB, setAuthB] = useState(""); // password / key value
  const [reqTab, setReqTab] = useState("Params");
  const [resTab, setResTab] = useState("Response");
  const [phase, setPhase] = useState("idle"); // idle | sending | done
  const [res, setRes] = useState(null);

  function choose(m) {
    setMethod(m);
    setUrl(urlFor(m));
    setPhase("idle");
  }

  function send() {
    if (phase === "sending") return;
    setPhase("sending");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => {
      const base = RESPONSES[method];
      const respBody = buildBody(method, params, body);
      setRes({ status: base.status, time: base.time, body: respBody, size: respBody.length });
      setResTab("Response");
      setPhase("done");
    }, reduce ? 120 : 520);
  }

  const ok = RESPONSES[method].status.startsWith("2");

  return (
    <div className="overflow-hidden rounded-xl border border-line2 bg-bg">
      {/* request bar */}
      <div id="request" className="flex scroll-mt-24 flex-wrap items-center gap-2 border-b border-line p-3">
        <select
          value={method}
          onChange={(e) => choose(e.target.value)}
          aria-label="Method"
          className="rounded-md border border-line2 bg-bg px-2.5 py-2 font-mono text-sm font-semibold text-ink outline-none focus:border-brand"
        >
          {METHODS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setPhase("idle");
          }}
          spellCheck={false}
          aria-label="Request URL"
          className="min-w-0 flex-1 basis-56 rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm text-ink outline-none focus:border-brand"
          placeholder={`${BASE_URL}api/health`}
        />
        <button
          type="button"
          onClick={send}
          disabled={phase === "sending"}
          className="inline-flex items-center gap-1.5 rounded-md border border-brand bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brandink disabled:opacity-70"
        >
          <RunIcon size={14} strokeWidth={0} className="fill-white" />
          {phase === "sending" ? "Sending" : "Send"}
        </button>
      </div>

      {/* request config | response */}
      <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-line">
        {/* request config */}
        <div className="min-w-0">
          <div className="flex gap-1 overflow-x-auto border-b border-line px-2 pt-2">
            {REQ_TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setReqTab(t)}
                className={`whitespace-nowrap rounded-t-md px-3 py-1.5 text-sm ${
                  reqTab === t ? "border-b-2 border-brand font-medium text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="p-3.5">
            {reqTab === "Params" && (
              <Rows rows={params} setRows={setParams} keyPh="key" valPh="value" />
            )}
            {reqTab === "Headers" && (
              <Rows rows={headers} setRows={setHeaders} keyPh="header" valPh="value" />
            )}
            {reqTab === "Body" && (
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                spellCheck={false}
                rows={7}
                className="w-full resize-y rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm text-inksoft outline-none focus:border-brand"
                placeholder='{ "key": "value" }'
              />
            )}
            {reqTab === "Auth" && (
              <div className="flex flex-col gap-3">
                <select
                  value={authType}
                  onChange={(e) => setAuthType(e.target.value)}
                  className="rounded-md border border-line2 bg-bg px-2.5 py-2 text-sm outline-none focus:border-brand"
                >
                  {AUTH_TYPES.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
                {authType === "Bearer Token" && (
                  <input value={authA} onChange={(e) => setAuthA(e.target.value)} placeholder="Token" className="rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand" />
                )}
                {authType === "Basic Auth" && (
                  <>
                    <input value={authA} onChange={(e) => setAuthA(e.target.value)} placeholder="Username" className="rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand" />
                    <input value={authB} onChange={(e) => setAuthB(e.target.value)} placeholder="Password" type="password" className="rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand" />
                  </>
                )}
                {authType === "API Key" && (
                  <>
                    <input value={authA} onChange={(e) => setAuthA(e.target.value)} placeholder="Key name" className="rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand" />
                    <input value={authB} onChange={(e) => setAuthB(e.target.value)} placeholder="Key value" className="rounded-md border border-line2 bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand" />
                  </>
                )}
                {authType === "No Auth" && (
                  <p className="font-mono text-sm text-faint">
                    This request has no authentication.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* response */}
        <div id="response" className="min-w-0 scroll-mt-24 border-t border-line lg:border-t-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line bg-panel px-3.5 py-2 font-mono text-xs">
            <span className="uppercase tracking-wider text-faint">Response</span>
            {phase === "done" && res ? (
              <>
                <span className={ok ? "font-medium text-greenink" : "font-medium text-amberink"}>{res.status}</span>
                <span className="text-faint">Size {res.size} B</span>
                <span className="text-faint">Time {res.time}</span>
              </>
            ) : (
              <span className="text-faint">{phase === "sending" ? "sending…" : "not sent"}</span>
            )}
          </div>
          <div className="flex gap-1 border-b border-line px-2 pt-2">
            {RES_TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setResTab(t)}
                className={`rounded-t-md px-3 py-1.5 text-sm ${
                  resTab === t ? "border-b-2 border-brand font-medium text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="h-[240px] overflow-auto bg-panel p-3.5 font-mono text-sm">
            {phase !== "done" && (
              <p className="text-faint">
                {phase === "sending" ? "· · ·" : "// Press Send to run this request."}
              </p>
            )}
            {phase === "done" && res && resTab === "Response" && (
              <pre className="whitespace-pre text-inksoft"><code>{res.body}</code></pre>
            )}
            {phase === "done" && resTab === "Headers" && (
              <div className="flex flex-col gap-1.5">
                {RES_HEADERS.map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <span className="text-brandink">{k}:</span>
                    <span className="text-inksoft">{v}</span>
                  </div>
                ))}
              </div>
            )}
            {phase === "done" && resTab === "Cookies" && (
              <p className="text-faint">No cookies set.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
