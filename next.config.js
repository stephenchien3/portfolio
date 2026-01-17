/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/people',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/people/labs',
        destination: '/research/labs',
        permanent: true,
      },
      {
        source: '/people/labs/:path*',
        destination: '/research/labs/:path*',
        permanent: true,
      },
      {
        source: '/people/teachers',
        destination: '/research/teachers',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
