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
    "rest api client for vs code",
    "api client for vs code",
    "rest client vs code",
    "test api in vs code",
    "api testing in vs code",
    "test next.js api routes",
    "next.js api testing",
    "next.js api client",
    "express route discovery",
    "postman alternative",
    "postman alternative for vs code",
    "postman alternative for next.js",
    "lightweight postman alternative",
    "thunder client alternative",
    "insomnia alternative",
    "curl to api request",
    "curl api testing",
    "import curl into vs code",
    "openapi import",
    "swagger import",
    "http client",
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
      "Send requests, organize collections, and pull API routes straight out of your Express and Next.js code, all inside VS Code. Free.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@saurowankhade",
    creator: "@saurowankhade",
    title: "Dragonfly – REST API Client for VS Code",
    description:
      "Test APIs and auto-discover your Express and Next.js routes without leaving VS Code. Free.",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
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
