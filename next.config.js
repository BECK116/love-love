/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/love-love',
  assetPrefix: '/love-love/',
  trailingSlash: true,
};

module.exports = nextConfig;