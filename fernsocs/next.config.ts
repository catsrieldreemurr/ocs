// next.config.ts
const nextConfig = {
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
