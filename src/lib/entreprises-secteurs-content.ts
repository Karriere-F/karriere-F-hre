import type { LocalizedText } from "./localized";

// Trilingual content for /entreprises/secteurs (employer-facing sectors overview).
// Hedged, factual wording: no guaranteed outcomes, no invented figures. German
// occupational terms (Pflege, Industrie, Bauwesen, Logistik, Hotellerie, IT...) are
// kept untranslated in every locale. The per-sector CTA query value is the FR sector
// label used by the demande-recrutement form's secteur options.

type LT = LocalizedText;

export type SecteurCard = {
  id: "sante" | "industrie" | "btp" | "logistique" | "hotellerie" | "it";
  title: LT;
  subtitle: string; // German, kept untranslated in every locale
  body: LT;
  cta: LT;
  queryValue: string; // FR sector label, matches the demande form's secteur options
};

export const ENT_SECTEURS: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro: LT;
  heroCta: LT;

  secKicker: LT;
  secTitle: LT;
  sectors: SecteurCard[];

  finalTitle: LT;
  finalText: LT;
  finalCta: LT;
} = {
  // SECTION 01 — HERO
  heroKicker: {
    fr: "Votre secteur d'activité",
    de: "Ihre Branche",
    en: "Your sector",
  },
  heroTitle: {
    fr: "Des besoins différents. Une préparation adaptée à chaque métier.",
    de: "Unterschiedliche Bedürfnisse. Eine auf jeden Beruf abgestimmte Vorbereitung.",
    en: "Different needs. Preparation tailored to each occupation.",
  },
  heroIntro: {
    fr: "Les compétences recherchées, le vocabulaire professionnel et les exigences de recrutement dépendent de votre secteur. Nous partons de votre besoin réel pour définir le profil et la préparation nécessaires.",
    de: "Die gesuchten Kompetenzen, der berufliche Wortschatz und die Anforderungen an die Rekrutierung hängen von Ihrer Branche ab. Wir gehen von Ihrem tatsächlichen Bedarf aus, um das erforderliche Profil und die nötige Vorbereitung zu bestimmen.",
    en: "The skills sought, the professional vocabulary and the recruitment requirements depend on your sector. We start from your actual need to define the profile and the preparation required.",
  },
  heroCta: {
    fr: "Présenter mon besoin sectoriel",
    de: "Meinen Bedarf nach Branche schildern",
    en: "Describe my sector-specific need",
  },

  // SECTION 02 — LES SECTEURS
  secKicker: {
    fr: "Les secteurs",
    de: "Die Branchen",
    en: "The sectors",
  },
  secTitle: {
    fr: "Six domaines, une même exigence de préparation.",
    de: "Sechs Bereiche, derselbe Anspruch an die Vorbereitung.",
    en: "Six fields, the same demand for preparation.",
  },
  sectors: [
    {
      id: "sante",
      title: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Health & care" },
      subtitle: "Pflege & Gesundheitswesen",
      body: {
        fr: "Recrutement à examiner selon la qualification, l'expérience, les exigences linguistiques et les procédures applicables aux professions de santé.",
        de: "Rekrutierung je nach Qualifikation, Erfahrung, sprachlichen Anforderungen und den für Gesundheitsberufe geltenden Verfahren zu prüfen.",
        en: "Recruitment to be examined according to qualification, experience, language requirements and the procedures applicable to healthcare professions.",
      },
      cta: { fr: "Recruter dans la santé", de: "Im Gesundheitswesen rekrutieren", en: "Recruit in healthcare" },
      queryValue: "Santé & soins",
    },
    {
      id: "industrie",
      title: { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical" },
      subtitle: "Industrie, Elektrotechnik & Instandhaltung",
      body: {
        fr: "Profils techniques pour la production, la maintenance, l'électricité et l'électronique, selon les compétences recherchées par votre entreprise.",
        de: "Technische Profile für Produktion, Instandhaltung, Elektrik und Elektronik, je nach den von Ihrem Unternehmen gesuchten Kompetenzen.",
        en: "Technical profiles for production, maintenance, electrical and electronic work, according to the skills your company is looking for.",
      },
      cta: { fr: "Recruter dans l'industrie", de: "In der Industrie rekrutieren", en: "Recruit in industry" },
      queryValue: "Industrie & technique",
    },
    {
      id: "btp",
      title: { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & crafts" },
      subtitle: "Bauwesen & Handwerk",
      body: {
        fr: "Métiers du bâtiment et profils techniques, selon la qualification, l'expérience et les exigences du poste.",
        de: "Bauberufe und technische Profile, je nach Qualifikation, Erfahrung und den Anforderungen der Stelle.",
        en: "Building trades and technical profiles, according to qualification, experience and the requirements of the position.",
      },
      cta: { fr: "Recruter dans le BTP", de: "Im Bauwesen rekrutieren", en: "Recruit in construction" },
      queryValue: "BTP & artisanat",
    },
    {
      id: "logistique",
      title: { fr: "Logistique & transport", de: "Logistik & Transport", en: "Logistics & transport" },
      subtitle: "Logistik & Transport",
      body: {
        fr: "Étude de besoins en logistique et transport, sous réserve des compétences, permis ou autorisations éventuellement nécessaires.",
        de: "Prüfung des Bedarfs in Logistik und Transport, vorbehaltlich der gegebenenfalls erforderlichen Kompetenzen, Führerscheine oder Genehmigungen.",
        en: "Review of needs in logistics and transport, subject to the skills, licences or authorisations that may be required.",
      },
      cta: { fr: "Recruter en logistique", de: "In der Logistik rekrutieren", en: "Recruit in logistics" },
      queryValue: "Logistique & transport",
    },
    {
      id: "hotellerie",
      title: { fr: "Hôtellerie & restauration", de: "Hotellerie & Gastronomie", en: "Hospitality & catering" },
      subtitle: "Hotellerie & Gastronomie",
      body: {
        fr: "Profils de cuisine, de service et d'autres métiers de l'hôtellerie-restauration selon les besoins de l'établissement.",
        de: "Profile aus Küche, Service und weiteren Berufen der Hotellerie und Gastronomie, je nach dem Bedarf des Betriebs.",
        en: "Profiles in kitchen, service and other hospitality and catering occupations, according to the establishment's needs.",
      },
      cta: {
        fr: "Recruter en hôtellerie-restauration",
        de: "In Hotellerie und Gastronomie rekrutieren",
        en: "Recruit in hospitality and catering",
      },
      queryValue: "Hôtellerie & restauration",
    },
    {
      id: "it",
      title: { fr: "IT & métiers spécialisés", de: "IT & Spezialberufe", en: "IT & specialised trades" },
      subtitle: "IT & spezialisierte Berufe",
      body: {
        fr: "Examen de besoins en informatique et dans d'autres métiers spécialisés lorsque les compétences recherchées correspondent aux profils disponibles.",
        de: "Prüfung des Bedarfs in der Informatik und in weiteren spezialisierten Berufen, wenn die gesuchten Kompetenzen den verfügbaren Profilen entsprechen.",
        en: "Review of needs in IT and other specialised occupations when the skills sought match the available profiles.",
      },
      cta: { fr: "Présenter un besoin spécialisé", de: "Einen spezialisierten Bedarf schildern", en: "Describe a specialised need" },
      queryValue: "IT & métiers spécialisés",
    },
  ],

  // SECTION 03 — UNE DEMANDE PERSONNALISÉE
  finalTitle: {
    fr: "Parlons de votre poste, pas seulement de votre secteur.",
    de: "Sprechen wir über Ihre Stelle, nicht nur über Ihre Branche.",
    en: "Let's talk about your position, not only your sector.",
  },
  finalText: {
    fr: "Indiquez-nous les fonctions à pourvoir, les qualifications attendues, le niveau linguistique souhaité et votre calendrier. Nous étudierons la faisabilité de votre demande.",
    de: "Nennen Sie uns die zu besetzenden Funktionen, die erwarteten Qualifikationen, das gewünschte Sprachniveau und Ihren Zeitplan. Wir prüfen die Machbarkeit Ihrer Anfrage.",
    en: "Tell us the roles to fill, the qualifications expected, the desired language level and your timeline. We will study the feasibility of your request.",
  },
  finalCta: {
    fr: "Décrire mon besoin de recrutement",
    de: "Meinen Rekrutierungsbedarf beschreiben",
    en: "Describe my recruitment need",
  },
};
