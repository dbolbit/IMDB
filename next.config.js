/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol:'https',
        hostname:'imdb-api.com',
      },
      {
        protocol:'http',
        hostname:'img.omdbapi.com',
      }
    ],
  },

}
module.exports = nextConfig
