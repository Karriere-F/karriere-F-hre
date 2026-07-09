// Static registry for the 5 SEO landing pages under /candidats/metiers/[slug].
// dbCategory maps each landing page to the matching shortage_occupations.category
// value so the page can show live openings; null means no occupations have been
// published in that DB category yet (page still renders, just with an empty list).

import type { Locale } from "../../i18n/routing";

export const METIER_CATEGORIES: Record<
  string,
  {
    dbCategory: string | null;
    title: Record<Locale, string>;
    subtitle: Record<Locale, string>;
    body: Record<Locale, string>;
  }
> = {
  "sante-soins": {
    dbCategory: "healthcare",
    title: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Healthcare" },
    subtitle: {
      fr: "Infirmiers, aides-soignants, personnel médical : un secteur en tension constante en Allemagne.",
      de: "Krankenpfleger, Pflegehelfer, medizinisches Personal: ein dauerhaft angespannter Sektor in Deutschland.",
      en: "Nurses, care assistants, medical staff: a sector under constant pressure in Germany.",
    },
    body: {
      fr: "Le secteur de la santé allemand recherche activement du personnel qualifié, en particulier dans les soins infirmiers. La reconnaissance du diplôme est une étape clé de ce parcours, que nous accompagnons dès le départ.",
      de: "Der deutsche Gesundheitssektor sucht aktiv qualifiziertes Personal, insbesondere in der Krankenpflege. Die Anerkennung des Abschlusses ist ein zentraler Schritt, den wir von Anfang an begleiten.",
      en: "Germany's healthcare sector is actively looking for qualified staff, especially in nursing care. Diploma recognition is a key step in this path, which we support from the start.",
    },
  },
  "hotellerie-restauration": {
    dbCategory: null,
    title: {
      fr: "Hôtellerie-restauration",
      de: "Hotel- und Gaststättengewerbe",
      en: "Hospitality & catering",
    },
    subtitle: {
      fr: "Cuisine, service, hébergement : un secteur qui recrute dans toute l'Allemagne.",
      de: "Küche, Service, Beherbergung: eine Branche, die in ganz Deutschland einstellt.",
      en: "Kitchen, service, accommodation: a sector hiring across Germany.",
    },
    body: {
      fr: "L'hôtellerie-restauration allemande fait face à une pénurie de personnel qualifié depuis plusieurs années. C'est un secteur accessible avec un niveau d'allemand B2 et une expérience ou une formation dans le métier.",
      de: "Das deutsche Hotel- und Gaststättengewerbe leidet seit Jahren unter Fachkräftemangel. Mit Deutschniveau B2 und Erfahrung oder Ausbildung im Beruf ist dieser Sektor gut zugänglich.",
      en: "German hospitality has faced a staff shortage for years. It's an accessible sector with B2-level German and experience or training in the trade.",
    },
  },
  "btp-artisanat": {
    dbCategory: "skilled_trades",
    title: { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & trades" },
    subtitle: {
      fr: "Électriciens, plombiers, menuisiers : les métiers manuels les plus recherchés.",
      de: "Elektriker, Klempner, Schreiner: die gefragtesten Handwerksberufe.",
      en: "Electricians, plumbers, carpenters: the most sought-after manual trades.",
    },
    body: {
      fr: "Le BTP et l'artisanat allemands manquent de main-d'œuvre qualifiée sur presque tout le territoire. Une expérience pratique ou une qualification reconnue est un atout majeur pour ces métiers.",
      de: "Das deutsche Bau- und Handwerksgewerbe hat fast flächendeckend zu wenig Fachkräfte. Praktische Erfahrung oder eine anerkannte Qualifikation sind für diese Berufe ein großer Vorteil.",
      en: "German construction and trades lack skilled workers almost nationwide. Hands-on experience or a recognized qualification is a major advantage for these occupations.",
    },
  },
  "industrie-technique": {
    dbCategory: "engineering",
    title: { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical trades" },
    subtitle: {
      fr: "Techniciens, mécaniciens, ingénieurs : au cœur de l'industrie allemande.",
      de: "Techniker, Mechaniker, Ingenieure: das Herz der deutschen Industrie.",
      en: "Technicians, mechanics, engineers: at the heart of German industry.",
    },
    body: {
      fr: "L'industrie allemande, moteur de son économie, recherche des profils techniques à tous les niveaux de qualification. Nous orientons les candidats selon leur formation initiale et leur expérience.",
      de: "Die deutsche Industrie, Motor ihrer Wirtschaft, sucht technische Profile auf allen Qualifikationsstufen. Wir orientieren Kandidaten je nach Ausbildung und Erfahrung.",
      en: "German industry, the backbone of its economy, seeks technical profiles at every qualification level. We guide candidates according to their background and experience.",
    },
  },
  informatique: {
    dbCategory: "it",
    title: { fr: "Informatique", de: "IT", en: "IT" },
    subtitle: {
      fr: "Développeurs, administrateurs systèmes, support IT : une demande allemande en forte croissance.",
      de: "Entwickler, Systemadministratoren, IT-Support: eine stark wachsende Nachfrage in Deutschland.",
      en: "Developers, system administrators, IT support: strongly growing demand in Germany.",
    },
    body: {
      fr: "Le secteur informatique allemand recrute à tous les niveaux, avec une attention particulière portée aux compétences techniques autant qu'au niveau d'allemand pour l'intégration en entreprise.",
      de: "Der deutsche IT-Sektor stellt auf allen Ebenen ein, mit besonderem Augenmerk sowohl auf technische Fähigkeiten als auch auf das Deutschniveau für die Integration im Unternehmen.",
      en: "Germany's IT sector hires at every level, with attention to both technical skills and German proficiency for workplace integration.",
    },
  },
};

export type MetierCategorySlug = keyof typeof METIER_CATEGORIES;
