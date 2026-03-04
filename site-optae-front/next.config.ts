import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // Desactive l'optimisation en local pour contourner le blocage des IPs privees
    unoptimized: true,
  },
};

export default nextConfig;