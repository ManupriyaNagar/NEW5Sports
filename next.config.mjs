/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // <- This is important
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
