"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExplorerIcon,
  HistoryIcon,
  DownloadIcon,
  ChevronDownIcon,
  CloseIcon,
  FileIcon,
  GitBranchIcon,
  ErrorIcon,
  WarningIcon,
  BellIcon,
  GoogleDocIcon,
  PlaygroundIcon,
} from "./icons";

const DOCS = "http://docs.usedragonfly.xyz/";
import { VIEWS, OUTLINES } from "../lib/nav";

const MARKETPLACE =
  "https://marketplace.visualstudio.com/items?itemName=saurabhwankhade.dragonfly";

const ICONS = {
  explorer: ExplorerIcon,
  playground: PlaygroundIcon,
  history: HistoryIcon,
};

export default function Shell({ children }) {
  const pathname = usePathname();
  const active = VIEWS.find((v) => v.href === pathname) || VIEWS[0];
  const outline = OUTLINES[active.href] || [];

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      {/* Title bar */}
      <header className="sticky top-0 z-50 flex h-9 items-center gap-3 border-b border-line bg-panel px-4 md:px-3">
        <div className="flex flex-none gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c554]" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap text-sm text-muted">
          <Image src="/dragonfly.png" alt="" width={16} height={16} className="flex-none rounded-sm" />
          <span className="truncate">{active.file} - Dragonfly</span>
        </div>
        <a
          href={MARKETPLACE}
          target="_blank"
          className="btn btn-outline flex-none px-2.5 py-1 text-sm"
        >
          Install
        </a>
      </header>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[48px_250px_minmax(0,1fr)]">
        {/* Activity bar */}
        <nav
          aria-label="Activity bar"
          className="sticky top-9 z-40 hidden h-[calc(100dvh-58px)] flex-col items-center justify-between border-r border-line bg-panel py-2.5 lg:flex"
        >
          <div className="flex flex-col gap-1">
            {VIEWS.map((v) => {
              const Icon = ICONS[v.icon];
              const on = v.href === active.href;
              return (
                <Link
                  key={v.href}
                  href={v.href}
                  title={v.label}
                  aria-label={v.label}
                  aria-current={on ? "page" : undefined}
                  className={`group relative grid h-10 w-10 place-items-center border-l-2 ${
                    on ? "border-brand text-ink" : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  <Icon size={22} />
                  <span className="pointer-events-none absolute left-[46px] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line2 bg-bg px-2 py-1 text-xs text-ink group-hover:block">
                    {v.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <a
              href={DOCS}
              target="_blank"
              title="Documentation"
              aria-label="Documentation"
              className="group relative grid h-10 w-10 place-items-center border-l-2 border-transparent text-muted hover:text-ink"
            >
              <GoogleDocIcon size={22} />
              <span className="pointer-events-none absolute left-[46px] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line2 bg-bg px-2 py-1 text-xs text-ink group-hover:block">
                Documentation
              </span>
            </a>
            <a
              href={MARKETPLACE}
              target="_blank"
              title="Install on Marketplace"
              aria-label="Install on Marketplace"
              className="group relative grid h-10 w-10 place-items-center border-l-2 border-transparent text-muted hover:text-brand"
            >
              <DownloadIcon size={22} />
              <span className="pointer-events-none absolute left-[46px] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line2 bg-bg px-2 py-1 text-xs text-ink group-hover:block">
                Install on Marketplace
              </span>
            </a>
          </div>
        </nav>

        {/* Explorer: shows the OPEN FILE's outline (its h2 headings) */}
        <aside className="sticky top-9 hidden h-[calc(100dvh-58px)] flex-col overflow-y-auto border-r border-line bg-panel lg:flex">
          <div className="px-4 pb-1 pt-3 text-[0.68rem] uppercase tracking-[0.08em] text-muted">
            Outline
          </div>
          <div className="flex-1 px-1.5">
            <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold tracking-wide text-inksoft">
              <ChevronDownIcon size={14} />
              {active.href === "/changelog" ? (
                <HistoryIcon size={14} className="text-brandink" />
              ) : active.href === "/playground" ? (
                <PlaygroundIcon size={14} className="text-[#8dc891]" />
              ) : (
                <FileIcon size={14} className={active.ext === "http" ? "text-[#8dc891]" : "text-[#519aba]"} />
              )}
              {active.file}
            </div>
            <nav aria-label="Outline" className="flex flex-col">
              {outline.length === 0 && (
                <span className="px-2 py-1 pl-7 text-sm text-faint">No symbols</span>
              )}
              {outline.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 rounded py-1.5 pl-7 pr-2 text-sm text-inksoft hover:bg-[#e8e8e8]"
                >
                  <span className="font-mono text-xs text-brandink">#</span>
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
          <a href={MARKETPLACE} target="_blank" className="btn m-3 justify-center">
            Install for VS Code
          </a>
        </aside>

        {/* Editor */}
        <div className="flex min-w-0 flex-col bg-bg">
          <div className="sticky top-9 z-20 flex h-9.5 items-stretch overflow-x-auto border-b border-line bg-panel">
            {VIEWS.map((v) => (
              <Tab
                key={v.href}
                view={v}
                active={active.href === v.href}
                showClose={active.href === v.href}
              />
            ))}
            <span className="ml-auto hidden items-center px-4 text-xs text-faint lg:flex">
              DRAGONFLY › {active.file}
            </span>
          </div>

          <main className="w-full max-w-240 px-4 md:px-[clamp(1rem,4vw,3rem)] pb-[clamp(3rem,6vw,5rem)] pt-[clamp(1.5rem,4vw,3.25rem)]">
            {children}
          </main>
        </div>
      </div>

      {/* Status bar */}
      <footer className="sticky bottom-0 z-50 flex h-[22px] items-center justify-between bg-brand px-1.5 text-xs text-white">
        <div className="flex items-center">
          <span className="inline-flex h-[22px] items-center gap-1 px-2">
            <GitBranchIcon size={13} /> main
          </span>
          <span className="hidden h-[22px] items-center gap-1.5 px-2 sm:inline-flex">
            <span className="inline-flex items-center gap-1">
              <ErrorIcon size={13} /> 0
            </span>
            <span className="inline-flex items-center gap-1">
              <WarningIcon size={13} /> 0
            </span>
          </span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex h-[22px] items-center px-2">{active.file}</span>
          <span className="hidden h-[22px] items-center px-2 sm:inline-flex">Beta</span>
          <span className="hidden h-[22px] items-center px-2 sm:inline-flex">UTF-8</span>
          <span className="inline-flex h-[22px] items-center px-2">
            <BellIcon size={13} />
          </span>
        </div>
      </footer>
    </div>
  );
}

function Tab({ view, active, showClose }) {
  const isPlayground = view.href === "/playground";
  const isChangelog = view.href === "/changelog";
  return (
    <Link
      href={view.href}
      className={`inline-flex items-center gap-1.5 border-r border-line px-3.5 text-sm ${
        active
          ? "-mb-px border-t border-t-brand bg-bg pb-px text-ink"
          : "bg-panel2 text-muted hover:text-ink"
      }`}
    >
      {isPlayground ? (
        <PlaygroundIcon size={14} className="text-[#8dc891]" />
      ) : isChangelog ? (
        <HistoryIcon size={14} className="text-brandink" />
      ) : (
        <FileIcon size={14} className="text-[#519aba]" />
      )}
      {view.file}
      {showClose && <CloseIcon size={13} className="text-faint" />}
    </Link>
  );
}
