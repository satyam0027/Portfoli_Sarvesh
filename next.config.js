/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thesarveshmishra.com',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig 