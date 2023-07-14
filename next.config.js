/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'picsum.photos']
  },
  reactStrictMode: true
}
module.exports = nextConfig
