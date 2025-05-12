import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Caminho da API no cliente
        destination: "https://apipixelboom-production.up.railway.app/:path*", // Destino da API
      },
    ];
  },
};

export default nextConfig;
