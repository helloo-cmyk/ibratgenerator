import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|ico|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
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
