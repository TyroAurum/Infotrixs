/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/quotes/random",
          destination: "https://api.quotable.io/quotes/random",
        }
      ];
    },
  };

module.exports = nextConfig
