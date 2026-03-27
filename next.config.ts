import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.cubix.co" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "resources.cubix.co" },
      { protocol: "https", hostname: "images.dmca.com" },
    ],
  },
};

export default nextConfig;
