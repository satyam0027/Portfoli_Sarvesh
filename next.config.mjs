/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'res.cloudinary.com'],
    unoptimized: true, // Required for static export to handle images
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors from blocking builds
  },
  output: 'export', // Enables static HTML export
};

export default nextConfig;
