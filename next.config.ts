import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    // Never pin /_next/*.js as immutable — that caches stale client
    // bundles in dev and causes hydration mismatches (old Navbar vs new SSR).
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    return [
      {
        source: '/(.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2|woff|ttf|pdf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
