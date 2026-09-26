import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/aprs-digitalisation",
        destination: "/projects/automated-portfolio-review",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
