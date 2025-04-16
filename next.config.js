/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // PDF.js için canvas modülünü yoksay
    if (isServer) {
      config.externals.push({
        canvas: 'commonjs canvas',
      });
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
