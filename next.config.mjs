/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "http://docs.usedragonfly.xyz/",
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
};

export default nextConfig;
