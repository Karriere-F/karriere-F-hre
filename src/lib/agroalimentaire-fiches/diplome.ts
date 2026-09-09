// Already-qualified ("emploi direct") Agroalimentaire fiches. Most food-industry
// jobs are non-regulated to work in Germany; some skilled crafts (butchery) or
// the visa route may involve recognition (decided by the competent German
// authorities). The framing throughout is "we study your profile", never "you
// are hired". Salary figures are indicative gross ranges; see SALARY_NOTE.

import type { AgroFiche } from "../agroalimentaire-fiche-types";
import { SALARY_NOTE } from "../agroalimentaire-fiche-types";

const RECOGNITION_SECTION = {
  heading: {
    fr: "Reconnaissance et voie de visa",
    de: "Anerkennung und Visumweg",
    en: "Recognition and visa route",
  },
  body: {
    fr: "La plupart des métiers de production alimentaire ne sont pas réglementés pour exercer : une reconnaissance formelle du diplôme n'est pas toujours nécessaire. Elle peut toutefois être requise selon la voie de visa, et certains métiers de l'artisanat (comme la boucherie) suivent des règles propres. Pour les professionnels expérimentés, le visa pour travailleurs avec expérience professionnelle permet, sous conditions, de travailler sans reconnaissance formelle allemande : il faut notamment une qualification reconnue par l'État de votre pays, au moins deux ans d'expérience qualifiée au cours des cinq dernières années et une offre d'emploi concrète ; d'autres conditions s'appliquent. Nous analysons votre situation et identifions la voie adaptée (source : Make it in Germany).",
    de: "Die meisten Berufe der Lebensmittelproduktion sind nicht reglementiert: Eine formelle Anerkennung des Abschlusses ist nicht immer erforderlich. Je nach Visumweg kann sie aber nötig sein, und einzelne Handwerksberufe (z. B. Fleischerei) folgen eigenen Regeln. Für erfahrene Fachkräfte ermöglicht das Visum für Fachkräfte mit Berufserfahrung unter Bedingungen die Arbeit ohne formelle deutsche Anerkennung: erforderlich sind u. a. ein staatlich anerkannter Abschluss Ihres Landes, mindestens zwei Jahre einschlägige Berufserfahrung in den letzten fünf Jahren und ein konkretes Stellenangebot; weitere Bedingungen gelten. Wir prüfen Ihre Situation und ermitteln den passenden Weg (Quelle: Make it in Germany).",
    en: "Most food-production jobs are non-regulated to work: formal recognition of the qualification is not always required. It may, however, be needed depending on the visa route, and some skilled crafts (e.g. butchery) follow their own rules. For experienced professionals, the visa for skilled workers with professional experience allows, under conditions, working without formal German recognition: it requires among other things a state-recognised qualification from your country, at least two years of relevant experience in the last five years and a concrete job offer; further conditions apply. We assess your situation and identify the right route (source: Make it in Germany).",
  },
};

const PROCESS_SECTION = {
  heading: {
    fr: "Le processus avec Karriere Fähre",
    de: "Der Ablauf mit Karriere Fähre",
    en: "The process with Karriere Fähre",
  },
  body: {
    fr: "Nous étudions votre profil afin d'identifier les métiers et les postes pour lesquels votre qualification, votre expérience et votre situation peuvent correspondre aux exigences allemandes. Nous vous formons en allemand jusqu'au niveau requis, préparons votre candidature et votre dossier, vous mettons en relation avec des employeurs, puis vous accompagnons pour le visa et l'installation.",
    de: "Wir prüfen Ihr Profil, um Berufe und Stellen zu finden, für die Ihre Qualifikation, Ihre Erfahrung und Ihre Situation den deutschen Anforderungen entsprechen können. Wir bilden Sie im Deutschen bis zum erforderlichen Niveau aus, bereiten Bewerbung und Unterlagen vor, vermitteln Arbeitgeber und begleiten Sie bei Visum und Ankunft.",
    en: "We study your profile to identify the professions and positions for which your qualification, experience and situation may match German requirements. We train you in German up to the required level, prepare your application and file, connect you with employers, then support you with the visa and settling in.",
  },
};

const GERMAN_SECTION = {
  heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
  body: {
    fr: "Un bon allemand (B2 visé) est attendu, en particulier pour l'hygiène et la sécurité alimentaire. Nous vous formons jusqu'au niveau requis à Douala, avant le départ.",
    de: "Gutes Deutsch (B2 angestrebt) wird erwartet, besonders für Hygiene und Lebensmittelsicherheit. Wir bilden Sie in Douala bis zum erforderlichen Niveau aus, vor der Ausreise.",
    en: "Good German (B2 aimed for) is expected, especially for hygiene and food safety. We train you to the required level in Douala, before departure.",
  },
};

export const AGRO_FICHES_DIPLOME: Record<string, AgroFiche> = {
  "production-alimentaire": {
    slug: "production-alimentaire",
    title: {
      fr: "Production alimentaire (déjà qualifié)",
      de: "Lebensmittelproduktion (bereits qualifiziert)",
      en: "Food production (already qualified)",
    },
    intro: {
      fr: "Vous avez une expérience de la production ou de la transformation alimentaire ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben Erfahrung in der Lebensmittelproduktion oder -verarbeitung? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you have food-production or processing experience? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils de la production alimentaire : conduite de lignes et de machines, fabrication, conditionnement et maintenance de premier niveau, avec une expérience réelle en usine ou atelier.",
          de: "Profile der Lebensmittelproduktion: Anlagen- und Maschinenführung, Herstellung, Verpackung und einfache Instandhaltung, mit echter Erfahrung in Werk oder Betrieb.",
          en: "Food-production profiles: line and machine operation, manufacturing, packaging and basic maintenance, with genuine factory or workshop experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans la technologie et la production alimentaires, le salaire médian est d'environ 3 450 €/mois (fourchette d'environ 2 800 à 4 200 €) selon l'expérience et le poste, d'après l'Entgeltatlas de la Bundesagentur für Arbeit. À l'entrée, les montants sont plus proches du bas de la fourchette. Montants indicatifs.",
          de: "In Lebensmitteltechnik und -produktion liegt der Medianwert bei etwa 3.450 €/Monat (Spanne rund 2.800 bis 4.200 €) je nach Erfahrung und Stelle, laut Entgeltatlas der Bundesagentur für Arbeit. Zum Einstieg liegen die Beträge näher am unteren Rand. Richtwerte.",
          en: "In food technology and production, the median is around 3,450 €/month (range about 2,800 to 4,200 €) depending on experience and role, per the Entgeltatlas of the Federal Employment Agency. On entry, figures are closer to the lower end. Indicative figures.",
        },
      },
      RECOGNITION_SECTION,
      GERMAN_SECTION,
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Mon expérience en usine alimentaire est-elle valorisée ?", de: "Wird meine Erfahrung in der Lebensmittelfabrik anerkannt?", en: "Is my food-factory experience valued?" },
        a: {
          fr: "Oui, l'expérience de production est recherchée. Nous étudions votre profil et l'adéquation avec les postes ouverts, sans rien promettre à l'avance.",
          de: "Ja, Produktionserfahrung ist gefragt. Wir prüfen Ihr Profil und die Passung zu offenen Stellen, ohne im Voraus etwas zu versprechen.",
          en: "Yes, production experience is sought after. We study your profile and its fit with open roles, without promising anything in advance.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "qualite-securite-alimentaire": {
    slug: "qualite-securite-alimentaire",
    title: {
      fr: "Contrôle et assurance qualité (déjà qualifié)",
      de: "Qualitätssicherung Lebensmittel (bereits qualifiziert)",
      en: "Food quality & safety (already qualified)",
    },
    intro: {
      fr: "Vous travaillez dans le contrôle qualité, l'hygiène ou le laboratoire alimentaire ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie arbeiten in Qualitätskontrolle, Hygiene oder Lebensmittellabor? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you work in quality control, hygiene or a food laboratory? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils qualité et sécurité alimentaire : contrôle qualité, hygiène (HACCP), analyses de laboratoire, traçabilité et conformité, avec une expérience réelle en industrie ou laboratoire.",
          de: "Profile in Qualität und Lebensmittelsicherheit: Qualitätskontrolle, Hygiene (HACCP), Laboranalytik, Rückverfolgbarkeit und Konformität, mit echter Erfahrung in Industrie oder Labor.",
          en: "Food quality and safety profiles: quality control, hygiene (HACCP), laboratory analysis, traceability and compliance, with genuine industry or laboratory experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "La rémunération dépend du niveau (opérateur qualité, technicien, responsable), de l'expérience et de l'entreprise. Les repères publics figurent dans l'Entgeltatlas de la Bundesagentur für Arbeit et les portails de rémunération ; les montants sont indicatifs et non garantis. Nous vous aidons à situer votre profil.",
          de: "Die Vergütung hängt vom Niveau (Qualitätsmitarbeiter, Techniker, Leitung), von der Erfahrung und vom Unternehmen ab. Öffentliche Anhaltspunkte bieten der Entgeltatlas der Bundesagentur für Arbeit und Gehaltsportale; die Angaben sind Richtwerte und nicht garantiert. Wir helfen, Ihr Profil einzuordnen.",
          en: "Pay depends on the level (quality operator, technician, manager), experience and company. Public benchmarks are in the Entgeltatlas of the Federal Employment Agency and salary portals; figures are indicative and not guaranteed. We help position your profile.",
        },
      },
      RECOGNITION_SECTION,
      GERMAN_SECTION,
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Faut-il connaître les normes allemandes ?", de: "Muss man die deutschen Normen kennen?", en: "Do I need to know German standards?" },
        a: {
          fr: "Les normes d'hygiène (HACCP) sont largement internationales. La connaissance du cadre allemand s'acquiert sur place ; l'expérience qualité est ce qui compte le plus.",
          de: "Hygienestandards (HACCP) sind weitgehend international. Der deutsche Rahmen wird vor Ort erlernt; entscheidend ist die Qualitätserfahrung.",
          en: "Hygiene standards (HACCP) are largely international. The German framework is learned on site; quality experience matters most.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "transformation-laitiere": {
    slug: "transformation-laitiere",
    title: {
      fr: "Transformation laitière (déjà qualifié)",
      de: "Milchverarbeitung (bereits qualifiziert)",
      en: "Dairy processing (already qualified)",
    },
    intro: {
      fr: "Vous avez une expérience de la transformation du lait et des produits laitiers ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben Erfahrung in der Verarbeitung von Milch und Milchprodukten? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you have experience processing milk and dairy products? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils de la transformation laitière : conduite des procédés (pasteurisation, fermentation, affinage), fabrication de produits laitiers et fromagers, qualité et hygiène, avec une expérience réelle.",
          de: "Profile der Milchverarbeitung: Verfahrensführung (Pasteurisierung, Fermentation, Reifung), Herstellung von Milch- und Käseprodukten, Qualität und Hygiene, mit echter Erfahrung.",
          en: "Dairy-processing profiles: running processes (pasteurisation, fermentation, ripening), making dairy and cheese products, quality and hygiene, with genuine experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans la transformation laitière, la rémunération se situe souvent autour de 2 500 à 3 500 €/mois selon l'expérience et le poste (sources : Entgeltatlas de la Bundesagentur für Arbeit, portails de rémunération). Montants indicatifs, variables selon la région et l'employeur.",
          de: "In der Milchverarbeitung liegt die Vergütung oft bei etwa 2.500 bis 3.500 €/Monat je nach Erfahrung und Stelle (Quellen: Entgeltatlas der Bundesagentur für Arbeit, Gehaltsportale). Richtwerte, je nach Region und Arbeitgeber unterschiedlich.",
          en: "In dairy processing, pay is often around 2,500 to 3,500 €/month depending on experience and role (sources: Entgeltatlas of the Federal Employment Agency, salary portals). Indicative figures, varying by region and employer.",
        },
      },
      RECOGNITION_SECTION,
      GERMAN_SECTION,
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Le secteur laitier recrute-t-il ?", de: "Stellt die Milchbranche ein?", en: "Is the dairy sector hiring?" },
        a: {
          fr: "L'Allemagne est un grand producteur laitier avec des besoins réguliers. Nous étudions votre expérience et l'adéquation avec les postes, sans garantie préalable.",
          de: "Deutschland ist ein großer Milchproduzent mit regelmäßigem Bedarf. Wir prüfen Ihre Erfahrung und die Passung zu Stellen, ohne vorherige Garantie.",
          en: "Germany is a major dairy producer with regular demand. We study your experience and its fit with roles, without prior guarantee.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "boucherie-transformation": {
    slug: "boucherie-transformation",
    title: {
      fr: "Boucherie / transformation carnée (déjà qualifié)",
      de: "Fleischerei / Fleischverarbeitung (bereits qualifiziert)",
      en: "Butchery / meat processing (already qualified)",
    },
    intro: {
      fr: "Vous êtes boucher ou avez une expérience de la transformation de la viande ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie sind Fleischer oder haben Erfahrung in der Fleischverarbeitung? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Are you a butcher or experienced in meat processing? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les bouchers et opérateurs de transformation carnée : découpe, désossage, fabrication de charcuterie et produits carnés, hygiène et sécurité alimentaire, avec une expérience réelle.",
          de: "Fleischer und Mitarbeiter der Fleischverarbeitung: Zerlegung, Entbeinung, Herstellung von Wurst- und Fleischwaren, Hygiene und Lebensmittelsicherheit, mit echter Erfahrung.",
          en: "Butchers and meat-processing operators: cutting, deboning, making sausages and meat products, hygiene and food safety, with genuine experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans la boucherie et la transformation carnée, la rémunération se situe le plus souvent autour de 2 300 à 3 000 €/mois selon l'expérience, la spécialisation et l'entreprise (sources : portails de rémunération allemands, données de branche). Montants indicatifs.",
          de: "In Fleischerei und Fleischverarbeitung liegt die Vergütung meist bei etwa 2.300 bis 3.000 €/Monat je nach Erfahrung, Spezialisierung und Unternehmen (Quellen: deutsche Gehaltsportale, Branchendaten). Richtwerte.",
          en: "In butchery and meat processing, pay is usually around 2,300 to 3,000 €/month depending on experience, specialisation and company (sources: German salary portals, sector data). Indicative figures.",
        },
      },
      RECOGNITION_SECTION,
      GERMAN_SECTION,
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "La boucherie est-elle un métier réglementé ?", de: "Ist die Fleischerei ein reglementierter Beruf?", en: "Is butchery a regulated profession?" },
        a: {
          fr: "C'est un métier de l'artisanat : selon l'entreprise et la voie de visa, une reconnaissance peut être demandée. Nous étudions votre cas et la voie adaptée.",
          de: "Es ist ein Handwerksberuf: je nach Betrieb und Visumweg kann eine Anerkennung verlangt werden. Wir prüfen Ihren Fall und den passenden Weg.",
          en: "It is a skilled craft: depending on the business and visa route, recognition may be required. We assess your case and the right route.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  brasserie: {
    slug: "brasserie",
    title: {
      fr: "Brasserie / production de boissons (déjà qualifié)",
      de: "Brauerei / Getränkeherstellung (bereits qualifiziert)",
      en: "Brewing / beverage production (already qualified)",
    },
    intro: {
      fr: "Vous avez une expérience du brassage ou de la production de boissons ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben Erfahrung im Brauen oder in der Getränkeherstellung? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you have brewing or beverage-production experience? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils du brassage et de la production de boissons : maltage, brassage, fermentation, filtration, embouteillage et contrôle qualité, avec une expérience réelle.",
          de: "Profile aus Brauen und Getränkeherstellung: Mälzen, Brauen, Gärung, Filtration, Abfüllung und Qualitätskontrolle, mit echter Erfahrung.",
          en: "Brewing and beverage-production profiles: malting, brewing, fermentation, filtration, bottling and quality control, with genuine experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans le brassage et les boissons, la rémunération se situe souvent autour de 2 900 à 3 500 €/mois selon l'expérience, la convention et l'entreprise (sources : portails de rémunération allemands, données de branche). Montants indicatifs.",
          de: "Im Brauwesen und bei Getränken liegt die Vergütung oft bei etwa 2.900 bis 3.500 €/Monat je nach Erfahrung, Tarif und Unternehmen (Quellen: deutsche Gehaltsportale, Branchendaten). Richtwerte.",
          en: "In brewing and beverages, pay is often around 2,900 to 3,500 €/month depending on experience, agreement and company (sources: German salary portals, sector data). Indicative figures.",
        },
      },
      RECOGNITION_SECTION,
      GERMAN_SECTION,
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Y a-t-il beaucoup de brasseries en Allemagne ?", de: "Gibt es viele Brauereien in Deutschland?", en: "Are there many breweries in Germany?" },
        a: {
          fr: "Oui, l'Allemagne compte un très grand nombre de brasseries, ce qui crée des besoins réguliers en personnel qualifié. Nous étudions votre profil et l'adéquation avec les postes.",
          de: "Ja, Deutschland hat sehr viele Brauereien, was regelmäßigen Bedarf an Fachkräften schafft. Wir prüfen Ihr Profil und die Passung zu Stellen.",
          en: "Yes, Germany has a very large number of breweries, creating regular demand for skilled staff. We study your profile and its fit with roles.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
