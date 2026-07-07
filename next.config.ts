import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Default is 1MB, too small for image uploads (site logo, etc.). Server Actions
      // in src/actions/{candidate,content}-actions.ts already cap files at 5MB
      // themselves; this just needs to be large enough to let those requests through.
      bodySizeLimit: "6mb",
    },
  },
};

export default withNextIntl(nextConfig);
