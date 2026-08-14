import { Geist, Geist_Mono } from "next/font/google";
import Shell from "./components/Shell";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://www.usedragonfly.xyz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dragonfly – REST API Client for VS Code",
    template: "%s | Dragonfly",
  },
  description:
    "A free REST API client inside VS Code. Send requests, save collections, import from Postman, OpenAPI and cURL, and auto-discover Express and Next.js routes.",
  keywords: [
    "vs code rest client",
    "api client for vs code",
    "rest client vs code",
    "postman alternative",
    "thunder client alternative",
    "insomnia alternative",
    "api testing vs code",
    "http client",
    "openapi import",
    "swagger import",
    "curl import",
    "express route discovery",
    "next.js api routes",
    "test api in vs code",
  ],
  authors: [{ name: "Saurabh Wankhade" }],
  creator: "Saurabh Wankhade",
  applicationName: "Dragonfly",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dragonfly",
    title: "Dragonfly – The REST API Client Built Into VS Code",
    description:
      "Send requests, organize collections, and pull API routes straight out of your Express and Next.js code, all inside VS Code. Free and open source.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@saurowankhade",
    creator: "@saurowankhade",
    title: "Dragonfly – REST API Client for VS Code",
    description:
      "Test APIs and auto-discover your Express and Next.js routes without leaving VS Code. Free and open source.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "developer tools",
  verification: {
    google: "coLwj7R3Oog6nmJJHAmSwqhuiTKgPIgxBWr90ffdTh0",
  },
};

export const viewport = {
  themeColor: "#0f1012",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Dragonfly",
      url: SITE_URL,
      logo: `${SITE_URL}/dragonfly.png`,
      sameAs: [
        "https://x.com/saurowankhade",
        "https://linkedin.com/in/saurowankhade",
        "https://peerlist.io/saurowankhade",
        "https://sauro.dev",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Dragonfly",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Dragonfly",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Visual Studio Code",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
      description:
        "A REST API client for VS Code. Send requests, organize collections, import from Postman, OpenAPI/Swagger and cURL, and scan Express and Next.js code for routes, foldered to match your codebase.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      softwareVersion: "0.0.6",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I test an API endpoint inside VS Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Install Dragonfly and open it from the Activity Bar. Build the request in the sidebar with a method, URL, headers, body and auth, then press Send. The response opens next to your code, so there is no second app to switch to.",
          },
        },
        {
          "@type": "Question",
          name: "Can I import my Postman collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and not only Postman. Import from a Postman collection, an OpenAPI or Swagger spec, or a single cURL command. Run Import Collection and Dragonfly detects the format for you. Folders, headers, query params and bodies come across, and live credentials are left out on purpose.",
          },
        },
        {
          "@type": "Question",
          name: "Can it find the API routes in my project automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Run Scan Workspace for Routes and Dragonfly parses your source for Express route handlers and Next.js API routes, then builds a collection from what it finds. Run it again after you add endpoints and it picks up the changes.",
          },
        },
        {
          "@type": "Question",
          name: "Which frameworks does route discovery support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Express and Next.js, covering both the App Router and the Pages Router. For anything else you can import an OpenAPI or Swagger spec, a Postman collection, or a cURL command.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Dragonfly store my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything stays on your machine. Collections, environments and history live in VS Code storage, and tokens go into VS Code secure storage rather than a JSON file. There is no account, no sign in and no server.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Discovery hints: sitemap, robots, llms.txt */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" title="robots.txt" href="/robots.txt" />
        <link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
