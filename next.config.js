/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.PAYLOAD_URL.includes("https://")? "https": "http",
        hostname: process.env.PAYLOAD_URL.includes("https://")? process.env.PAYLOAD_URL.slice(8): process.env.PAYLOAD_URL.slice(7) ,
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
