// Static registry for /blog/categorie/[slug]. No articles yet -- these are
// placeholder landing pages until real content-marketing writing begins (see
// PRODUCT roadmap step 3, "Contenu & SEO").

import type { Locale } from "../../i18n/routing";

export const BLOG_CATEGORIES: Record<
  string,
  { title: Record<Locale, string>; description: Record<Locale, string> }
> = {
  "travailler-en-allemagne": {
    title: {
      fr: "Travailler en Allemagne",
      de: "Arbeiten in Deutschland",
      en: "Working in Germany",
    },
    description: {
      fr: "Marché du travail, visa, contrats : ce qu'il faut savoir avant de travailler en Allemagne.",
      de: "Arbeitsmarkt, Visum, Verträge: was Sie vor der Arbeit in Deutschland wissen sollten.",
      en: "Labor market, visa, contracts: what to know before working in Germany.",
    },
  },
  "apprendre-allemand": {
    title: { fr: "Apprendre l'allemand", de: "Deutsch lernen", en: "Learning German" },
    description: {
      fr: "Conseils, méthodes et ressources pour progresser vers le niveau B2.",
      de: "Tipps, Methoden und Ressourcen für den Weg zum Niveau B2.",
      en: "Tips, methods, and resources for progressing to B2 level.",
    },
  },
  "vie-integration": {
    title: { fr: "Vie & intégration", de: "Leben & Integration", en: "Life & integration" },
    description: {
      fr: "Logement, démarches administratives, quotidien : s'installer sereinement en Allemagne.",
      de: "Wohnen, Behördengänge, Alltag: sich in Deutschland gelassen niederlassen.",
      en: "Housing, paperwork, daily life: settling into Germany with confidence.",
    },
  },
  "metiers-penurie": {
    title: { fr: "Métiers en pénurie", de: "Mangelberufe", en: "Shortage occupations" },
    description: {
      fr: "Zoom sur les secteurs qui recrutent le plus activement en Allemagne.",
      de: "Im Fokus: die Branchen, die in Deutschland am aktivsten einstellen.",
      en: "A closer look at the sectors hiring most actively in Germany.",
    },
  },
};

export type BlogCategorySlug = keyof typeof BLOG_CATEGORIES;
