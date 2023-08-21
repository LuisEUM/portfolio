/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', 'picsum.photos', 'cdn-images-1.medium.com']
  },
  reactStrictMode: true
}
module.exports = nextConfig
