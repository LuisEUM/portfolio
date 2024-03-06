/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'picsum.photos',
      'cdn-images-1.medium.com',
      'medium.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
