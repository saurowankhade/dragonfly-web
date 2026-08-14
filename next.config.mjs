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
    ];
  },
};

export default nextConfig;
