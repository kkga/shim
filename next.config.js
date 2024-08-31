const localesPlugin = require("@react-aria/optimize-locales-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(localesPlugin.webpack({ locales: [] }))
    }
    return config
  },
  transpilePackages: ["next-mdx-remote"],
}

module.exports = nextConfig
