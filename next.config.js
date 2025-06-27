// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Важно для Cloudflare Pages и Next.js 15+
  // другие настройки можно добавлять ниже, если нужно
};

module.exports = nextConfig;