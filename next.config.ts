import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // The German course moved out of /candidats/formations/* and up to its own /cours-allemand
  // silo. Sources are spelled per-locale because next-intl (not Next's built-in i18n) owns
  // the localized pathnames, so the locale prefix is just part of the path here.
  // `permanent: true` sends 308, which tells search engines to move the ranking across.
  async redirects() {
    return [
      { source: "/fr/candidats/formations/allemand", destination: "/fr/cours-allemand", permanent: true },
      { source: "/de/kandidaten/ausbildung/deutschkurs", destination: "/de/deutschkurs", permanent: true },
      { source: "/en/candidates/trainings/german-course", destination: "/en/german-course", permanent: true },
      {
        source: "/fr/candidats/formations/examens",
        destination: "/fr/cours-allemand/preparation-examens",
        permanent: true,
      },
      {
        source: "/de/kandidaten/ausbildung/pruefungsvorbereitung",
        destination: "/de/deutschkurs/pruefungsvorbereitung",
        permanent: true,
      },
      {
        source: "/en/candidates/trainings/exam-preparation",
        destination: "/en/german-course/exam-preparation",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      // Default is 1MB, too small for image uploads (site logo, etc.). Server Actions
      // in src/actions/{candidate,content}-actions.ts already cap files at 5MB
      // themselves; this just needs to be large enough to let those requests through.
      bodySizeLimit: "6mb",
    },
  },
  // Baseline security headers applied to every response. A full Content-Security-Policy
  // is intentionally left out here — it needs testing against inline styles, framer-motion
  // and Supabase/Google-Fonts origins before it can be enforced without breaking the app.
  async headers() {
    const securityHeaders = [
      // Force HTTPS for 2 years (only takes effect once served over HTTPS).
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      // Stop MIME-type sniffing.
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Disallow the site being framed by other origins (clickjacking).
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Don't leak full URLs to other origins.
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Deny powerful browser features the site doesn't use.
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default withNextIntl(nextConfig);
