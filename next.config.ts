import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {}, // 👈 نضيفها عشان نمنع التحذير
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
