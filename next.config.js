/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.technicalsewa.com"],
  },
};

module.exports = nextConfig;
