/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () =>{
    return [
      {
        source: '/about/keberapa',
        destination: '/',
        permanent: true
      },{
        source:'/old-blog/:id',
        destination:'/posts/:id',
        permanent: false
      }
    ]
  }
} 

module.exports = nextConfig
