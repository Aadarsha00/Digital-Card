import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ctrlbits.com",
      },
    ],
  },
};

export default nextConfig;
