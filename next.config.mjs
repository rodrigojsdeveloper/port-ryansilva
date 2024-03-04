/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/inicio',
      },
      {
        source: '/projetos/(.*)',
        destination: '/projetos',
      },
    ]
  }
};

export default nextConfig;
