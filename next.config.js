/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ticket.mn'],
  },
  experimental: {
    urlImports: ['https://cdn.esm.sh'],
  },
}

module.exports = nextConfig
