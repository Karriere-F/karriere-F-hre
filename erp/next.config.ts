import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in the website repo; keep Turbopack from treating the repo root as its root.
  turbopack: { root: path.join(__dirname) },
  experimental: {
    serverActions: {
      // Dossier documents are capped at 5 MB in recruitment-actions.ts; leave headroom.
      bodySizeLimit: "6mb",
    },
  },
  async headers() {
    // Internal tool: never indexed, never framed.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
