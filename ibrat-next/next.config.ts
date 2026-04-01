import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/brat-creator',
        destination: '/brat-maker',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
