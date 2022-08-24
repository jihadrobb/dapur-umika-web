/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  i18n: {
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextTranslate(nextConfig);
