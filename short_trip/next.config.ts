import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
};

export default nextConfig;
