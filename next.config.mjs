/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.usedragonfly.xyz/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/dragonfly",
        destination: "/playground",
        permanent: true,
      },
      {
        source: "/dragonfly.md",
        destination: "/playground.md",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Signal",
            value: "ai-train=yes, search=yes, ai-input=yes",
          },
          {
            key: "Link",
            value:
              '</llms.txt>; rel="ai-content", </sitemap.xml>; rel="sitemap"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
