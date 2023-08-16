/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com'],
},
//   images: {
//     domains: ['https://example.com'],
// }
  // {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.pixabay.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
