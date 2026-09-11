/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // "How I Can Help" moved to a slug that matches the nav label and search intent.
      { source: '/support', destination: '/how-i-can-help', permanent: true },
      // Common variants people and old links use.
      { source: '/services', destination: '/how-i-can-help', permanent: true },
      { source: '/contact', destination: '/booking', permanent: true },
      { source: '/book', destination: '/booking', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      // Short and alternate spellings people type or link with for the location pages.
      { source: '/delhi', destination: '/psychologist-in-delhi', permanent: true },
      { source: '/psychologist-delhi', destination: '/psychologist-in-delhi', permanent: true },
      { source: '/therapist-in-delhi', destination: '/psychologist-in-delhi', permanent: true },
      { source: '/counsellor-in-delhi', destination: '/psychologist-in-delhi', permanent: true },
      {
        source: '/female-psychologist-delhi',
        destination: '/female-psychologist-in-delhi',
        permanent: true,
      },
      { source: '/online-therapy', destination: '/online-therapy-india', permanent: true },
      { source: '/online-counselling', destination: '/online-therapy-india', permanent: true },
      { source: '/online-counselling-india', destination: '/online-therapy-india', permanent: true },
      { source: '/online-psychologist', destination: '/online-therapy-india', permanent: true },
      { source: '/online-psychologist-india', destination: '/online-therapy-india', permanent: true },
      { source: '/online-counsellor-india', destination: '/online-therapy-india', permanent: true },
      { source: '/anxiety-therapy', destination: '/therapy-for-anxiety', permanent: true },
      { source: '/anxiety-counselling', destination: '/therapy-for-anxiety', permanent: true },
      { source: '/depression-therapy', destination: '/therapy-for-depression', permanent: true },
      { source: '/depression-counselling', destination: '/therapy-for-depression', permanent: true },
      { source: '/burnout-therapy', destination: '/therapy-for-stress-and-burnout', permanent: true },
      { source: '/couples-counselling', destination: '/relationship-counselling', permanent: true },
      { source: '/marriage-counselling', destination: '/relationship-counselling', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // googletagmanager.com serves gtag.js for Google Analytics
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

