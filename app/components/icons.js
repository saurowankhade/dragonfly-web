/**
 * Icon set for Dragonfly, drawn in a VS Code codicon style.
 * Every icon is a small SVG component using currentColor, so colour
 * and size come from Tailwind utilities on the element (text-*, w-*, h-*).
 */

function Svg({
  children,
  size = 24,
  strokeWidth = 1.6,
  className = "",
  ...rest
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ExplorerIcon(props) {
  return (
    <Svg {...props}>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <path d="M13 3v6h6" />
    </Svg>
  );
}

export function SearchIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4-4" />
    </Svg>
  );
}

export function SourceControlIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 10.5c0 3.5-3.4 3.2-7.2 5.4" />
    </Svg>
  );
}

export function ExtensionsIcon(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
      <path d="M16.5 4v6M13.5 7h6" />
    </Svg>
  );
}

export function RunIcon(props) {
  return (
    <Svg {...props}>
      <path d="M8 5.5v13l10-6.5z" />
    </Svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function CopyIcon(props) {
  return (
    <Svg {...props}>
      <path d="M9 15c0-2.83 0-4.24.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z" />
      <path d="M17 9c-.002-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.431 2 12.786 2 9.497 2 6.207 2 4.562 2 3.456 2.908a4 4 0 0 0-.554.554C1.993 4.569 1.993 6.214 1.993 9.503c0 3.29 0 4.935.909 6.041.166.203.351.389.554.555C4.504 16.96 6.036 17.004 8.993 17.007" />
    </Svg>
  );
}

export function FileIcon(props) {
  return (
    <Svg {...props}>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <path d="M13 3v6h6" />
    </Svg>
  );
}

export function CloseIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function GitBranchIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="7" r="2" />
      <path d="M6 8v8" />
      <path d="M18 9c0 4-6 2-6 7" />
    </Svg>
  );
}

export function SyncIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20 11a8 8 0 0 0-14-4L3 9" />
      <path d="M3 5v4h4" />
      <path d="M4 13a8 8 0 0 0 14 4l3-2" />
      <path d="M21 19v-4h-4" />
    </Svg>
  );
}

export function ErrorIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-7 7" />
    </Svg>
  );
}

export function WarningIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 4 2.5 20.5h19z" />
      <path d="M12 10v4.5" />
      <path d="M12 18h.01" />
    </Svg>
  );
}

export function SparkleIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l2 6.5L20.5 12 14 14l-2 6.5L10 14 3.5 12 10 9.5z" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function BellIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </Svg>
  );
}

export function HistoryIcon(props) {
  return (
    <Svg {...props}>
      <path d="M3.5 9a9 9 0 1 1-1 5" />
      <path d="M3 5v4h4" />
      <path d="M12 8v4l3 2" />
    </Svg>
  );
}

export function RssIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 11a8 8 0 0 1 8 8" />
      <path d="M5 5a14 14 0 0 1 14 14" />
      <circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function MailIcon({size = 24}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    width={size}
    height={size}
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
        strokeLinejoin="round"
      />
      <path
        d="M21.996 10.5024C21.9933 10.1357 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.586 18.6482C14.9572 19.0167 13.3086 19.7693 14.3127 20.711C14.8032 21.171 15.3495 21.5 16.0364 21.5H19.9556C20.6424 21.5 21.1887 21.171 21.6792 20.711C22.6834 19.7693 21.0347 19.0167 20.4059 18.6482C18.9314 17.7839 17.0605 17.7839 15.586 18.6482Z" />
      <path d="M19.996 14C19.996 15.1046 19.1005 16 17.996 16C16.8914 16 15.996 15.1046 15.996 14C15.996 12.8954 16.8914 12 17.996 12C19.1005 12 19.996 12.8954 19.996 14Z" />
    </svg>
  );
}

export function GoogleDocIcon(props) {
  return (
    <Svg strokeWidth={1.5} {...props}>
      <path d="M15 2.5V4C15 5.41421 15 6.12132 15.4393 6.56066C15.8787 7 16.5858 7 18 7H19.5" />
      <path d="M4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14.1716C14.5803 2 14.7847 2 14.9685 2.07612C15.1522 2.15224 15.2968 2.29676 15.5858 2.58579L19.4142 6.41421C19.7032 6.70324 19.8478 6.84776 19.9239 7.03153C20 7.2153 20 7.41968 20 7.82843V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16Z" />
      <path d="M8 11H16M8 14H16M8 17H12.1708" />
    </Svg>
  );
}

export function DownloadIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3v11" />
      <path d="m7.5 10.5 4.5 4 4.5-4" />
      <path d="M4 20h16" />
    </Svg>
  );
}

export function DragonflyIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="4" r="1.4" />
      <path d="M12 5.4V19" />
      <path d="M12 9c-3.2-2.3-6.6-1.7-8 .4 2.6 1.5 5.4.9 8-1.2z" />
      <path d="M12 9c3.2-2.3 6.6-1.7 8 .4-2.6 1.5-5.4.9-8-1.2z" />
      <path d="M12 12.2c-2.3-1.5-4.8-1-6 .6 1.9 1.1 3.9.7 6-1z" />
      <path d="M12 12.2c2.3-1.5 4.8-1 6 .6-1.9 1.1-3.9.7-6-1z" />
    </Svg>
  );
}
