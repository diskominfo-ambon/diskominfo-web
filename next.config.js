/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
  "@fullcalendar/interaction"
]);

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.weatherapi.com"
    ]
  },
});

module.exports = nextConfig
