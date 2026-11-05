import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrites: serve English-named pages at Spanish URLs (canonical = Spanish)
  async rewrites() {
    return [
      { source: "/contacto", destination: "/contact" },
    ];
  },
  // Redirects: prevent /contact from being indexed as a duplicate, and send the
  // removed about page (/nosotros, /about) to the home page instead of a 404.
  async redirects() {
    return [
      { source: "/nosotros", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
