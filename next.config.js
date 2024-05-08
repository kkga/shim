const localesPlugin = require("@react-aria/optimize-locales-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(localesPlugin.webpack({ locales: [] }))
    }
    return config
  },
}

module.exports = nextConfig
