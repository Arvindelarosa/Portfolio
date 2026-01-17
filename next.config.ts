import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fmnl33-4.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "boatr.bfar.da.gov.ph",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
