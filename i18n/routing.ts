import { defineRouting } from "next-intl/routing";

// Canonical keys (object property names) must match the actual folder structure
// under src/app/[locale]/ exactly, including [dynamic] segment names -- next-intl's
// middleware rewrites the localized URL the visitor sees back to this canonical path
// before Next.js resolves the route. Per-locale values are what's shown in the URL bar.
//
// Candidate/employer/admin dashboards are authenticated, non-indexed areas -- kept
// identical across locales (plain string) rather than translated, since there's no
// SEO value and it keeps auth redirects/deep-links simpler.
export const routing = defineRouting({
  locales: ["fr", "de", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
  pathnames: {
    "/": "/",

    "/a-propos": { fr: "/a-propos", de: "/ueber-uns", en: "/about" },
    "/a-propos/notre-histoire": {
      fr: "/a-propos/notre-histoire",
      de: "/ueber-uns/unsere-geschichte",
      en: "/about/our-story",
    },
    "/a-propos/methode": {
      fr: "/a-propos/methode",
      de: "/ueber-uns/methode",
      en: "/about/method",
    },

    "/candidats": { fr: "/candidats", de: "/kandidaten", en: "/candidates" },

    // SEO silo: the German course is the most-searched entry point ("cours d'allemand"),
    // so it sits at the root rather than three levels down under /candidats. It replaced
    // /candidats/formations/{allemand,examens} -- those URLs 308 to here, see
    // next.config.ts. /candidats#formations is now a teaser that links in, so the depth
    // lives here only and the two pages don't compete for the same query.
    "/cours-allemand": { fr: "/cours-allemand", de: "/deutschkurs", en: "/german-course" },
    "/cours-allemand/preparation-examens": {
      fr: "/cours-allemand/preparation-examens",
      de: "/deutschkurs/pruefungsvorbereitung",
      en: "/german-course/exam-preparation",
    },

    // Silo 2. "Ausbildung" is kept untranslated in every locale -- it's the term people
    // actually search for, francophone candidates included.
    "/ausbildung-allemagne": {
      fr: "/ausbildung-allemagne",
      de: "/ausbildung-in-deutschland",
      en: "/ausbildung-germany",
    },
    "/ausbildung-allemagne/salaire": {
      fr: "/ausbildung-allemagne/salaire",
      de: "/ausbildung-in-deutschland/verguetung",
      en: "/ausbildung-germany/salary",
    },

    // Silo 3. "Chancenkarte" stays untranslated in the slug -- it's a proper noun people
    // search by name, francophone candidates included, like "Ausbildung".
    "/visa-allemagne": {
      fr: "/visa-allemagne",
      de: "/visum-deutschland",
      en: "/germany-visa",
    },
    "/visa-allemagne/chancenkarte": {
      fr: "/visa-allemagne/chancenkarte",
      de: "/visum-deutschland/chancenkarte",
      en: "/germany-visa/chancenkarte",
    },

    "/candidats/formations/integration": {
      fr: "/candidats/formations/integration",
      de: "/kandidaten/ausbildung/integration",
      en: "/candidates/trainings/integration",
    },
    "/candidats/reconnaissance-diplomes": {
      fr: "/candidats/reconnaissance-diplomes",
      de: "/kandidaten/anerkennung",
      en: "/candidates/qualification-recognition",
    },
    "/candidats/vivre-en-allemagne": {
      fr: "/candidats/vivre-en-allemagne",
      de: "/kandidaten/leben-in-deutschland",
      en: "/candidates/living-in-germany",
    },

    "/metiers": { fr: "/metiers", de: "/berufe", en: "/occupations" },
    "/metiers/offre/[slug]": {
      fr: "/metiers/offre/[slug]",
      de: "/berufe/angebot/[slug]",
      en: "/occupations/offer/[slug]",
    },

    "/entreprises": { fr: "/entreprises", de: "/unternehmen", en: "/employers" },
    "/entreprises/partenariat": {
      fr: "/entreprises/partenariat",
      de: "/unternehmen/partnerschaft",
      en: "/employers/partnership",
    },

    "/partenaires": { fr: "/partenaires", de: "/partner", en: "/partners" },
    "/plan-du-site": { fr: "/plan-du-site", de: "/seitenuebersicht", en: "/sitemap" },
    "/temoignages": { fr: "/temoignages", de: "/erfahrungsberichte", en: "/testimonials" },
    "/postuler": { fr: "/postuler", de: "/bewerben", en: "/apply" },
    "/cgu": { fr: "/cgu", de: "/agb", en: "/terms" },
    "/mentions-legales": { fr: "/mentions-legales", de: "/impressum", en: "/imprint" },
    "/confidentialite": { fr: "/confidentialite", de: "/datenschutz", en: "/privacy" },
    "/contact": { fr: "/contact", de: "/kontakt", en: "/contact" },
    "/login": { fr: "/connexion", de: "/anmelden", en: "/login" },
    "/book-appointment": {
      fr: "/prendre-rendez-vous",
      de: "/termin-buchen",
      en: "/book-appointment",
    },

    "/blog": { fr: "/blog", de: "/blog", en: "/blog" },
    "/blog/categorie/[slug]": {
      fr: "/blog/categorie/[slug]",
      de: "/blog/kategorie/[slug]",
      en: "/blog/category/[slug]",
    },

    // Authenticated areas: not localized, no SEO value.
    "/candidate/signup": "/candidate/signup",
    "/candidate/dashboard": "/candidate/dashboard",
    "/candidate/profile": "/candidate/profile",
    "/candidate/cv": "/candidate/cv",
    "/employer/signup": "/employer/signup",
    "/employer/pending": "/employer/pending",
    "/employer/dashboard": "/employer/dashboard",
    "/employer/candidates": "/employer/candidates",
    "/employer/candidates/[id]": "/employer/candidates/[id]",
    "/employer/requests": "/employer/requests",
    "/employer/requests/new": "/employer/requests/new",
    "/employer/requests/[id]": "/employer/requests/[id]",
    "/admin": "/admin",
    "/admin/appointments": "/admin/appointments",
    "/admin/candidates": "/admin/candidates",
    "/admin/candidates/[id]": "/admin/candidates/[id]",
    "/admin/contact-messages": "/admin/contact-messages",
    "/admin/content": "/admin/content",
    "/admin/content/[pageKey]": "/admin/content/[pageKey]",
    "/admin/employers": "/admin/employers",
    "/admin/employers/[id]": "/admin/employers/[id]",
    "/admin/images": "/admin/images",
    "/admin/occupations": "/admin/occupations",
    "/admin/occupations/new": "/admin/occupations/new",
    "/admin/occupations/[id]/edit": "/admin/occupations/[id]/edit",
    "/admin/staffing-requests": "/admin/staffing-requests",
  },
});

export type Locale = (typeof routing.locales)[number];
