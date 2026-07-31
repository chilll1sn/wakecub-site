import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only: no Node server, no image optimizer.
  // `export` also emits not-found.tsx as 404.html, which is what Pages serves
  // for /i/AB12CD34 invite links — see src/components/invite-banner.tsx.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
