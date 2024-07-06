const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@react-email/render",
    ],
  },
};

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./payload/payload.config.ts"),
});
