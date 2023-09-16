/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    OPENAI_API_KEY: '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',
  },
};
module.exports = nextConfig;
