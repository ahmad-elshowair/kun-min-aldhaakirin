import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

/**
 * withSerwistInit is a function that returns a Next.js config object.
 */
const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tbjhrsvkudeopmkhsiqh.supabase.co",
      },
    ],
  },
};

export default withSerwist(nextConfig);
