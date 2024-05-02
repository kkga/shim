/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['vscode-oniguruma', 'shiki'],
  },
}

module.exports = nextConfig
