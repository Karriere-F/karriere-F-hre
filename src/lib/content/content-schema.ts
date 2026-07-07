// Static registry of which pages/fields are CMS-editable. Keeps the page_content
// key-value table safe without DB-level schema enforcement: an unknown field_key is
// rejected at the Server Action layer rather than silently corrupting data.

export const CONTENT_PAGES = {
  home: {
    label: "Accueil",
    path: "/",
    fields: [
      "heroTitle",
      "heroSubtitle",
      "whyTitle",
      "why1Title",
      "why1Body",
      "why2Title",
      "why2Body",
      "why3Title",
      "why3Body",
      "tracksTitle",
      "fastTrackTitle",
      "fastTrackBody",
      "fullTrainingTitle",
      "fullTrainingBody",
      "categoriesTitle",
      "categoriesSubtitle",
      "categoriesCta",
      "finalCtaTitle",
      "finalCtaSubtitle",
    ],
  },
  about: {
    label: "À propos",
    path: "/about",
    fields: [
      "title",
      "intro",
      "missionTitle",
      "missionBody",
      "founderTitle",
      "founderBody",
      "valuesTitle",
      "value1",
      "value2",
      "value3",
    ],
  },
  servicesCandidates: {
    label: "Services : Candidats",
    path: "/services/candidates",
    fields: [
      "title",
      "subtitle",
      "step1Title",
      "step1Body",
      "step2Title",
      "step2Body",
      "step3Title",
      "step3Body",
      "step4Title",
      "step4Body",
    ],
  },
  servicesCompanies: {
    label: "Services : Entreprises",
    path: "/services/companies",
    fields: [
      "title",
      "subtitle",
      "step1Title",
      "step1Body",
      "step2Title",
      "step2Body",
      "step3Title",
      "step3Body",
      "step4Title",
      "step4Body",
    ],
  },
  germanCourses: {
    label: "Cours d'allemand",
    path: "/german-courses",
    fields: [
      "title",
      "subtitle",
      "fastTrack.title",
      "fastTrack.body",
      "fullTraining.title",
      "fullTraining.body",
      "fullTraining.levelsTitle",
      "fullTraining.levelA1",
      "fullTraining.levelA2",
      "fullTraining.levelB1",
      "fullTraining.levelB2",
      "fullTraining.levelPrep",
      "fullTraining.examsTitle",
      "fullTraining.examsBody",
      "fullTraining.includesTitle",
      "fullTraining.includes1",
      "fullTraining.includes2",
      "fullTraining.includes3",
      "fullTraining.includes4",
      "fullTraining.includes5",
      "pricingNote",
    ],
  },
  partners: {
    label: "Partenaires",
    path: "/partners",
    fields: ["title", "subtitle", "growingBody"],
  },
  contact: {
    label: "Contact",
    path: "/contact",
    fields: ["title", "subtitle", "office", "officeLocation"],
  },
  shortageOccupations: {
    label: "Métiers en pénurie (intro)",
    path: "/shortage-occupations",
    fields: ["title", "subtitle"],
  },
} as const;

export type ContentPageKey = keyof typeof CONTENT_PAGES;

export function isValidContentField(pageKey: string, fieldKey: string): boolean {
  const page = CONTENT_PAGES[pageKey as ContentPageKey];
  if (!page) return false;
  return (page.fields as readonly string[]).includes(fieldKey);
}

export const IMAGE_SLOTS = {
  site_logo: { label: "Logo du site" },
} as const;

export type ImageSlotKey = keyof typeof IMAGE_SLOTS;
