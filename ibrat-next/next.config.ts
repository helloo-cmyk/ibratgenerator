import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://clarity.ms https://www.clarity.ms https://scripts.clarity.ms https://pagead2.googlesyndication.com",
      "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://clarity.ms https://www.clarity.ms https://scripts.clarity.ms https://pagead2.googlesyndication.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.google.com https://clarity.ms https://www.clarity.ms https://stats.g.doubleclick.net",
      "frame-src 'self' https://pagead2.googlesyndication.com",
    ].join('; ')
  }
]

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'startupfa.me' },
      { protocol: 'https', hostname: 'cdn.openhunts.com' },
      { protocol: 'https', hostname: 'backlinklog.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
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
        source: '/brat-creator/',
        destination: '/brat-maker/',
        permanent: true,
      },
      {
        source: '/brat-summer-meme-generator/',
        destination: '/brat-maker/',
        permanent: true,
      },
      {
        source: '/what-is-brat-generator/',
        destination: '/blog/what-is-brat-generator/',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/terms-conditions/',
        destination: '/terms/',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
