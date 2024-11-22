/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.youtube.com'],
    },
    reactStrictMode: false,
    typescript: {
      ignoreBuildErrors: true
    }
  }
  
export default nextConfig;
