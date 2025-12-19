// next.config.ts
const nextConfig = {
  basePath: '/ocs',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/catsrieldreemurr/ocstorage/**',
      },
    ],
  },
}

export default nextConfig
