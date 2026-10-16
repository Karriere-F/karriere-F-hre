// "Secteurs" navigation: choose a route (Ausbildung / already qualified), then a
// sector, then a profession. Only "Santé" is populated for now; the other
// sectors show as "Bientôt disponible" until their content is built.

import { Cog, Cpu, HardHat, HeartPulse, Store, Truck, UtensilsCrossed, Wheat, Wrench, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "./localized";

export type Sector = {
  slug: string;
  name: LocalizedText;
  icon: LucideIcon;
  active: boolean; // false => "Bientôt disponible"
};

const SANTE: Sector = { slug: "sante", name: { fr: "Santé", de: "Gesundheit", en: "Healthcare" }, icon: HeartPulse, active: true };
const INDUSTRIE: Sector = { slug: "industrie", name: { fr: "Industrie", de: "Industrie", en: "Industry" }, icon: Cog, active: true };
const INFORMATIQUE: Sector = { slug: "informatique", name: { fr: "Informatique", de: "IT", en: "IT" }, icon: Cpu, active: true };
const CONSTRUCTION: Sector = { slug: "construction", name: { fr: "Construction / BTP", de: "Bau", en: "Construction" }, icon: HardHat, active: true };
const LOGISTIQUE: Sector = { slug: "logistique", name: { fr: "Logistique & Transport", de: "Logistik & Transport", en: "Logistics & Transport" }, icon: Truck, active: true };
const HOTELLERIE: Sector = { slug: "hotellerie", name: { fr: "Hôtellerie-Restauration", de: "Hotel & Gastronomie", en: "Hospitality" }, icon: UtensilsCrossed, active: true };
const INGENIERIE: Sector = { slug: "ingenierie", name: { fr: "Ingénierie", de: "Ingenieurwesen", en: "Engineering" }, icon: Wrench, active: true };
const COMMERCE: Sector = { slug: "commerce", name: { fr: "Commerce & Vente", de: "Handel & Verkauf", en: "Retail & Sales" }, icon: Store, active: true };
const AGROALIMENTAIRE: Sector = { slug: "agroalimentaire", name: { fr: "Agroalimentaire", de: "Lebensmittel & Landwirtschaft", en: "Food & Agriculture" }, icon: Wheat, active: true };

// Sector-first navigation: one list of sectors; the route (Ausbildung / already
// qualified) is chosen inside each sector.
export const SECTORS_ALL: Sector[] = [
  SANTE,
  INFORMATIQUE,
  INDUSTRIE,
  CONSTRUCTION,
  LOGISTIQUE,
  INGENIERIE,
  HOTELLERIE,
  COMMERCE,
  AGROALIMENTAIRE,
];

// Real photo per sector (reused from the home occupations grid), shown on the
// sector cards across /secteurs and /parcours so the two use one visual language.
export const SECTOR_IMAGES: Record<string, string> = {
  sante: "/images/metiers/sante-equipe.jpg",
  informatique: "/images/metiers/informaticiens.jpg",
  industrie: "/images/metiers/industrie-v3.jpg",
  construction: "/images/metiers/btp.jpg",
  logistique: "/images/metiers/logistique-v2.jpg",
  ingenierie: "/images/metiers/ingenieurs-v2.jpg",
  hotellerie: "/images/metiers/hotellerie-v2.jpg",
};

// Destination for each active sector's landing page. Kept as literal strings so
// the typed <Link> / getPathname keep their route-key checking. A sector absent
// here (still "Bientôt disponible") falls back to the /secteurs grid.
export const ACTIVE_SECTOR_PATH = {
  sante: "/secteurs/sante",
  informatique: "/secteurs/informatique",
  industrie: "/secteurs/industrie",
  construction: "/secteurs/construction",
  logistique: "/secteurs/logistique",
  ingenierie: "/secteurs/ingenierie",
  hotellerie: "/secteurs/hotellerie",
  commerce: "/secteurs/commerce",
  agroalimentaire: "/secteurs/agroalimentaire",
} as const;

export const SECTEURS_UI = {
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  secteurs: { fr: "Secteurs", de: "Branchen", en: "Sectors" },
  hubKicker: { fr: "Travailler ou se former", de: "Arbeiten oder sich ausbilden", en: "Work or train" },
  hubTitle: { fr: "Votre métier a un avenir en Allemagne", de: "Ihr Beruf hat Zukunft in Deutschland", en: "Your profession has a future in Germany" },
  hubIntro: {
    fr: "Choisissez votre secteur, puis découvrez les métiers, les parcours d'accès et les possibilités d'évolution qui peuvent correspondre à votre projet.",
    de: "Wählen Sie Ihre Branche und entdecken Sie dann die Berufe, die Zugangswege und die Entwicklungsmöglichkeiten, die zu Ihrem Vorhaben passen können.",
    en: "Choose your sector, then discover the professions, the access paths and the growth opportunities that may fit your plan.",
  },
  chooseRouteTitle: { fr: "Choisissez votre parcours", de: "Wählen Sie Ihren Weg", en: "Choose your path" },
  routeAusbildungTitle: { fr: "Je veux faire une Ausbildung", de: "Ich möchte eine Ausbildung machen", en: "I want to do an Ausbildung" },
  routeAusbildungIntro: {
    fr: "Vous vous formez directement en Allemagne : une formation rémunérée, diplômante et reconnue.",
    de: "Sie werden direkt in Deutschland ausgebildet: eine vergütete, anerkannte Ausbildung mit Abschluss.",
    en: "You train directly in Germany: a paid, recognised, qualifying programme.",
  },
  routeDiplomeTitle: { fr: "Je suis déjà diplômé", de: "Ich bin bereits qualifiziert", en: "I am already qualified" },
  routeDiplomeIntro: {
    fr: "Vous êtes déjà qualifié : nous faisons reconnaître votre diplôme et vous plaçons auprès d'un employeur.",
    de: "Sie sind bereits qualifiziert: Wir lassen Ihren Abschluss anerkennen und vermitteln Sie an einen Arbeitgeber.",
    en: "You are already qualified: we get your diploma recognised and place you with an employer.",
  },
  chooseSectorTitle: { fr: "Choisissez votre secteur", de: "Wählen Sie Ihre Branche", en: "Choose your sector" },
  choose: { fr: "Choisir", de: "Auswählen", en: "Choose" },
  comingSoon: { fr: "Bientôt disponible", de: "Bald verfügbar", en: "Coming soon" },
  backToSecteurs: { fr: "Tous les secteurs", de: "Alle Branchen", en: "All sectors" },
  backToRoute: { fr: "Choisir un autre parcours", de: "Anderen Weg wählen", en: "Choose another path" },
  ctaTitle: {
    fr: "Vous avez trouvé un métier qui vous intéresse ?",
    de: "Haben Sie einen Beruf gefunden, der Sie interessiert?",
    en: "Found a profession that interests you?",
  },
  ctaText: {
    fr: "Vérifiez maintenant si votre profil correspond au parcours d'accès à ce métier.",
    de: "Prüfen Sie jetzt, ob Ihr Profil zum Zugangsweg dieses Berufs passt.",
    en: "Check now whether your profile matches the access path to this profession.",
  },
  ctaEvaluer: { fr: "Évaluer mon profil", de: "Mein Profil bewerten", en: "Assess my profile" },
  ctaParler: { fr: "Parler à Karriere Fähre", de: "Mit Karriere Fähre sprechen", en: "Talk to Karriere Fähre" },
} satisfies Record<string, LocalizedText>;

// Editorial content for the /secteurs hub (intro, support steps, FAQ). Written to
// give the page textual substance for SEO and to guide the visitor.
export const SECTEURS_PAGE: {
  lead: LocalizedText;
  supportTitle: LocalizedText;
  support: { label: LocalizedText; text: LocalizedText }[];
  faqTitle: LocalizedText;
  faq: { q: LocalizedText; a: LocalizedText }[];
} = {
  lead: {
    fr: "L'Allemagne manque durablement de main-d'œuvre qualifiée. Dans de nombreux secteurs, les employeurs recrutent à l'international. Que vous vouliez vous former sur place par une Ausbildung ou rejoindre directement une entreprise avec un diplôme reconnu, choisissez d'abord votre domaine, puis votre voie d'accès.",
    de: "Deutschland fehlt es dauerhaft an qualifizierten Fachkräften. In vielen Branchen rekrutieren Arbeitgeber international. Ob Sie sich vor Ort über eine Ausbildung qualifizieren oder mit einem anerkannten Abschluss direkt in ein Unternehmen einsteigen möchten: Wählen Sie zuerst Ihr Fachgebiet und dann Ihren Zugangsweg.",
    en: "Germany has a lasting shortage of skilled workers. In many sectors, employers recruit internationally. Whether you want to train on site through an Ausbildung or join a company directly with a recognised qualification, first choose your field, then your access path.",
  },
  supportTitle: {
    fr: "Nous vous accompagnons à chaque étape",
    de: "Wir begleiten Sie bei jedem Schritt",
    en: "We support you at every step",
  },
  support: [
    {
      label: { fr: "Allemand", de: "Deutsch", en: "German" },
      text: {
        fr: "Une formation linguistique jusqu'au niveau requis. Le B2 est le standard visé.",
        de: "Sprachausbildung bis zum erforderlichen Niveau. B2 ist der angestrebte Standard.",
        en: "Language training up to the required level. B2 is the standard we aim for.",
      },
    },
    {
      label: { fr: "Dossier", de: "Bewerbung", en: "Application" },
      text: {
        fr: "Nous construisons votre candidature et vous mettons en relation avec les employeurs.",
        de: "Wir erstellen Ihre Bewerbung und bringen Sie mit Arbeitgebern zusammen.",
        en: "We build your application and connect you with employers.",
      },
    },
    {
      label: { fr: "Visa", de: "Visum", en: "Visa" },
      text: {
        fr: "Nous vous accompagnons dans la reconnaissance de votre diplôme et vos démarches de visa.",
        de: "Wir begleiten Sie bei der Anerkennung Ihres Abschlusses und beim Visumverfahren.",
        en: "We support you with your diploma recognition and visa steps.",
      },
    },
    {
      label: { fr: "Intégration", de: "Integration", en: "Integration" },
      text: {
        fr: "Nous préparons votre départ et votre installation en Allemagne.",
        de: "Wir bereiten Ihre Ausreise und Ihre Ankunft in Deutschland vor.",
        en: "We prepare your departure and your arrival in Germany.",
      },
    },
  ],
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: {
        fr: "Quels secteurs recrutent le plus en Allemagne ?",
        de: "Welche Branchen suchen in Deutschland am meisten?",
        en: "Which sectors recruit the most in Germany?",
      },
      a: {
        fr: "La santé, l'industrie et la technique, la construction, la logistique, l'informatique, l'hôtellerie et la restauration, le commerce et l'agroalimentaire comptent parmi les secteurs les plus recherchés. Les besoins varient selon les régions et les métiers.",
        de: "Gesundheit, Industrie und Technik, Bau, Logistik, IT, Hotel und Gastronomie, Handel sowie Lebensmittel gehören zu den gefragtesten Branchen. Der Bedarf hängt von Region und Beruf ab.",
        en: "Healthcare, industry and technology, construction, logistics, IT, hospitality and catering, retail and food are among the most sought-after sectors. Needs vary by region and profession.",
      },
    },
    {
      q: {
        fr: "Faut-il parler allemand pour travailler en Allemagne ?",
        de: "Muss man Deutsch sprechen, um in Deutschland zu arbeiten?",
        en: "Do you need to speak German to work in Germany?",
      },
      a: {
        fr: "Oui. Le B2 est le niveau standard visé pour la plupart des parcours. Nous vous accompagnons jusqu'à ce niveau.",
        de: "Ja. B2 ist das angestrebte Standardniveau für die meisten Wege. Wir begleiten Sie bis zu diesem Niveau.",
        en: "Yes. B2 is the standard level we aim for on most paths. We support you up to that level.",
      },
    },
    {
      q: {
        fr: "Quelle différence entre l'Ausbildung et l'emploi direct ?",
        de: "Was ist der Unterschied zwischen Ausbildung und direkter Anstellung?",
        en: "What is the difference between an Ausbildung and direct employment?",
      },
      a: {
        fr: "L'Ausbildung est une formation professionnelle rémunérée qui mène à une qualification allemande. L'emploi direct s'adresse aux personnes déjà qualifiées et expérimentées, qui rejoignent directement une entreprise.",
        de: "Die Ausbildung ist eine vergütete Berufsausbildung, die zu einem deutschen Abschluss führt. Die direkte Anstellung richtet sich an bereits qualifizierte und erfahrene Personen, die direkt in ein Unternehmen einsteigen.",
        en: "An Ausbildung is a paid vocational training that leads to a German qualification. Direct employment is for people who are already qualified and experienced and join a company directly.",
      },
    },
    {
      q: {
        fr: "Comment savoir quel secteur me correspond ?",
        de: "Wie finde ich heraus, welche Branche zu mir passt?",
        en: "How do I know which sector is right for me?",
      },
      a: {
        fr: "Faites l'évaluation de profil. En quelques minutes, elle vous oriente vers les secteurs et parcours réalisables selon votre formation, votre expérience et votre projet.",
        de: "Machen Sie die Profilbewertung. In wenigen Minuten zeigt sie Ihnen die Branchen und Wege, die zu Ihrer Ausbildung, Ihrer Erfahrung und Ihrem Ziel passen.",
        en: "Take the profile assessment. In a few minutes it points you to the sectors and paths that fit your education, experience and goal.",
      },
    },
  ],
};
