import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old multi-page sections now live on the home page.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/qualification", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
