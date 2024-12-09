import localesPlugin from "@react-aria/optimize-locales-plugin"
import { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(localesPlugin.webpack({ locales: ["en-US"] }))
    }
    return config
  },
  transpilePackages: ["next-mdx-remote"],
}

export default nextConfig
