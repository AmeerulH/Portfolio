import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: cdn.sanity.io",
  "font-src 'self'",
  "connect-src 'self' *.api.sanity.io *.apicdn.sanity.io vitals.vercel-insights.com",
  "frame-ancestors 'self'",
].join("; ");

const baseHeaders = [
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [...baseHeaders, { key: "Content-Security-Policy", value: csp }, { key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};

export default nextConfig;
