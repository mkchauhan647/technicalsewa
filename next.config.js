/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.technicalsewa.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://crm.technicalsewa.com/api/:path*", // Proxy to Backend
      },
      {
        source: "/spareparts/:path*", // Proxy requests to the spare parts site
        destination: "https://technicalsewa-ecommerce.vercel.app/spareparts/:path*",
      },
    ];
  },

};

module.exports = nextConfig;
