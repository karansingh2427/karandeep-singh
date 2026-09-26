import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/aprs-digitalisation",
        destination: "/projects/ars-automation",
        permanent: true,
      },
      {
        source: "/projects/automated-portfolio-review",
        destination: "/projects/ars-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
