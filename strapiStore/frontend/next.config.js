/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/*', // only works with one '*', not two which was the default from https://nextjs.org/docs/messages/next-image-unconfigured-host
          },
        ],
      },
}

module.exports = nextConfig
