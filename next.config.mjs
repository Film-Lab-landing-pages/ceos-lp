/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Para Docker
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  images: {
    unoptimized: true, // Se não usar Next.js Image optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
