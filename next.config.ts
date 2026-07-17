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
};

export default withNextIntl(nextConfig);
