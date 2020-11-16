const withOffline = require("next-offline");

const nextConfig = {
  images: {
    domains: ["acnhapi.com"],
  },
};

module.exports = withOffline(nextConfig);
