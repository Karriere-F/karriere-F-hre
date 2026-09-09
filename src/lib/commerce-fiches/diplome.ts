// Already-qualified ("emploi direct") Commerce & Vente fiches. Commerce is a
// non-regulated field in Germany: recognition of a foreign qualification is not
// always required to work, but may be needed depending on the residence/visa
// route (decided by the competent German authorities). The framing throughout is
// "we study your profile", never "you are hired". Salary figures are indicative
// gross ranges from public German sources; see SALARY_NOTE.

import type { CommerceFiche } from "../commerce-fiche-types";
import { SALARY_NOTE } from "../commerce-fiche-types";

// Shared recognition / visa section for non-regulated commercial jobs.
const RECOGNITION_SECTION = {
  heading: {
    fr: "Reconnaissance et voie de visa",
    de: "Anerkennung und Visumweg",
    en: "Recognition and visa route",
  },
  body: {
    fr: "Le commerce est un métier non réglementé : une reconnaissance formelle du diplôme n'est pas toujours nécessaire pour exercer. Elle peut toutefois être requise ou utile selon la voie de visa. Pour les professionnels expérimentés, le visa pour travailleurs avec expérience professionnelle permet, sous conditions, de travailler sans reconnaissance formelle allemande : il faut notamment une qualification reconnue par l'État de votre pays, au moins deux ans d'expérience qualifiée au cours des cinq dernières années et une offre d'emploi concrète ; d'autres conditions s'appliquent. Nous analysons votre situation et identifions la voie adaptée (source : Make it in Germany).",
    de: "Der Handel ist ein nicht reglementierter Beruf: Eine formelle Anerkennung des Abschlusses ist nicht immer erforderlich. Je nach Visumweg kann sie aber nötig oder sinnvoll sein. Für erfahrene Fachkräfte ermöglicht das Visum für Fachkräfte mit Berufserfahrung unter Bedingungen die Arbeit ohne formelle deutsche Anerkennung: erforderlich sind u. a. ein staatlich anerkannter Abschluss Ihres Landes, mindestens zwei Jahre einschlägige Berufserfahrung in den letzten fünf Jahren und ein konkretes Stellenangebot; weitere Bedingungen gelten. Wir prüfen Ihre Situation und ermitteln den passenden Weg (Quelle: Make it in Germany).",
    en: "Commerce is a non-regulated profession: formal recognition of the qualification is not always required to work. It may, however, be needed or useful depending on the visa route. For experienced professionals, the visa for skilled workers with professional experience allows, under conditions, working without formal German recognition: it requires among other things a state-recognised qualification from your country, at least two years of relevant experience in the last five years and a concrete job offer; further conditions apply. We assess your situation and identify the right route (source: Make it in Germany).",
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

export const COMMERCE_FICHES_DIPLOME: Record<string, CommerceFiche> = {
  "vente-commerce-detail": {
    slug: "vente-commerce-detail",
    title: {
      fr: "Vendeur / employé de commerce (déjà qualifié)",
      de: "Kaufmann/-frau im Einzelhandel (bereits qualifiziert)",
      en: "Retail sales employee (already qualified)",
    },
    intro: {
      fr: "Vous avez déjà une expérience de la vente et du commerce de détail ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben bereits Erfahrung im Verkauf und Einzelhandel? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you already have retail and sales experience? We study your profile to identify positions that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les vendeurs, employés de commerce et responsables de rayon disposant d'une qualification et d'une expérience réelles en vente, conseil client, encaissement, gestion des marchandises et des stocks.",
          de: "Verkäufer, Handelsangestellte und Abteilungsverantwortliche mit echter Qualifikation und Erfahrung in Verkauf, Kundenberatung, Kasse, Waren- und Bestandsführung.",
          en: "Salespeople, retail employees and department supervisors with genuine qualification and experience in selling, customer advice, checkout, merchandise and stock management.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans le commerce de détail, la rémunération se situe le plus souvent autour de 2 400 à 2 900 €/mois selon l'enseigne, la région et l'expérience (sources : Entgeltatlas de la Bundesagentur für Arbeit, grilles de branche). Les discounters et l'automobile paient souvent davantage. Montants indicatifs.",
          de: "Im Einzelhandel liegt die Vergütung meist bei etwa 2.400 bis 2.900 €/Monat je nach Kette, Region und Erfahrung (Quellen: Entgeltatlas der Bundesagentur für Arbeit, Branchentarife). Discounter und Autohandel zahlen oft mehr. Richtwerte.",
          en: "In retail, pay is usually around 2,400 to 2,900 €/month depending on the chain, region and experience (sources: Entgeltatlas of the Federal Employment Agency, sector scales). Discounters and car retail often pay more. Indicative figures.",
        },
      },
      RECOGNITION_SECTION,
      {
        heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
        body: {
          fr: "Le contact client permanent demande un bon allemand ; le niveau B2 est le standard visé. Nous vous formons jusqu'au niveau requis à Douala, avant le départ.",
          de: "Der ständige Kundenkontakt erfordert gutes Deutsch; B2 ist der angestrebte Standard. Wir bilden Sie in Douala bis zum erforderlichen Niveau aus, vor der Ausreise.",
          en: "Constant customer contact requires good German; B2 is the standard aimed for. We train you to the required level in Douala, before departure.",
        },
      },
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Mon expérience suffit-elle pour travailler en Allemagne ?", de: "Reicht meine Erfahrung, um in Deutschland zu arbeiten?", en: "Is my experience enough to work in Germany?" },
        a: {
          fr: "Cela dépend de votre qualification, de votre expérience, de votre allemand et de la voie de visa. Nous étudions votre profil et vous disons ce qui est réaliste, sans rien promettre à l'avance.",
          de: "Das hängt von Qualifikation, Erfahrung, Deutsch und Visumweg ab. Wir prüfen Ihr Profil und sagen Ihnen, was realistisch ist, ohne im Voraus etwas zu versprechen.",
          en: "It depends on your qualification, experience, German and visa route. We study your profile and tell you what is realistic, without promising anything in advance.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "commercial-vente": {
    slug: "commercial-vente",
    title: {
      fr: "Commercial / chargé de vente (Vertriebsmitarbeiter)",
      de: "Vertriebsmitarbeiter/in",
      en: "Sales representative (Vertriebsmitarbeiter)",
    },
    intro: {
      fr: "Vous êtes commercial, chargé de vente ou de développement clients ? Nous étudions votre profil pour identifier les postes de vente qui peuvent vous correspondre en Allemagne.",
      de: "Sie sind im Vertrieb, im Verkauf oder in der Kundengewinnung tätig? Wir prüfen Ihr Profil, um passende Vertriebsstellen in Deutschland zu finden.",
      en: "Are you a sales rep, account or business-development professional? We study your profile to identify sales roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les commerciaux B2B/B2C, chargés de clientèle, développeurs de comptes et responsables de vente avec une expérience réelle de la prospection, de la négociation et du suivi client.",
          de: "B2B/B2C-Vertriebler, Kundenbetreuer, Account-Entwickler und Verkaufsverantwortliche mit echter Erfahrung in Akquise, Verhandlung und Kundenbetreuung.",
          en: "B2B/B2C sales reps, account managers, business developers and sales leads with genuine experience in prospecting, negotiation and client management.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans la vente, la rémunération varie fortement selon le secteur, l'expérience et la part variable (commissions, primes) : elle combine un salaire de base et une part liée aux résultats. Les chiffres publics allemands (Entgeltatlas, portails de rémunération) donnent des repères, mais votre niveau réel dépend du poste. Nous vous aidons à situer votre profil ; les montants sont indicatifs et non garantis.",
          de: "Im Vertrieb variiert die Vergütung stark nach Branche, Erfahrung und variablem Anteil (Provisionen, Prämien): Sie verbindet ein Grundgehalt mit einem ergebnisabhängigen Teil. Öffentliche deutsche Zahlen (Entgeltatlas, Gehaltsportale) geben Anhaltspunkte, Ihr tatsächliches Niveau hängt aber von der Stelle ab. Wir helfen, Ihr Profil einzuordnen; die Angaben sind Richtwerte und nicht garantiert.",
          en: "In sales, pay varies widely by sector, experience and variable component (commission, bonuses): it combines a base salary with a results-linked part. Public German figures (Entgeltatlas, salary portals) give benchmarks, but your actual level depends on the role. We help position your profile; figures are indicative and not guaranteed.",
        },
      },
      RECOGNITION_SECTION,
      {
        heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
        body: {
          fr: "La vente en Allemagne demande un allemand solide (B2 visé), l'anglais étant un atout en B2B international. Nous vous formons jusqu'au niveau requis avant le départ.",
          de: "Vertrieb in Deutschland erfordert solides Deutsch (B2 angestrebt), Englisch ist im internationalen B2B von Vorteil. Wir bilden Sie bis zum erforderlichen Niveau aus, vor der Ausreise.",
          en: "Sales in Germany requires solid German (B2 aimed for), with English an asset in international B2B. We train you to the required level before departure.",
        },
      },
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Le salaire dépend-il des commissions ?", de: "Hängt das Gehalt von Provisionen ab?", en: "Does pay depend on commission?" },
        a: {
          fr: "Souvent oui : la vente combine un fixe et une part variable liée aux résultats. La structure dépend de l'employeur et du secteur.",
          de: "Oft ja: Vertrieb verbindet ein Fixum mit einem ergebnisabhängigen Anteil. Die Struktur hängt von Arbeitgeber und Branche ab.",
          en: "Often yes: sales combines a fixed salary with a results-based part. The structure depends on the employer and sector.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  ecommerce: {
    slug: "ecommerce",
    title: {
      fr: "Commercial e-commerce (déjà qualifié)",
      de: "Kaufmann/-frau im E-Commerce (bereits qualifiziert)",
      en: "E-commerce specialist (already qualified)",
    },
    intro: {
      fr: "Vous avez une expérience du commerce en ligne ? Nous étudions votre profil pour identifier les postes e-commerce qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben Erfahrung im Onlinehandel? Wir prüfen Ihr Profil, um passende E-Commerce-Stellen in Deutschland zu finden.",
      en: "Do you have online-retail experience? We study your profile to identify e-commerce roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils vente en ligne, gestion de boutique et marketplaces, marketing digital, relation client et analyse commerciale, avec une expérience réelle du commerce numérique.",
          de: "Profile im Onlineverkauf, Shop- und Marktplatzmanagement, Onlinemarketing, Kundenservice und Verkaufsanalyse, mit echter Erfahrung im digitalen Handel.",
          en: "Profiles in online sales, shop and marketplace management, digital marketing, customer service and sales analysis, with genuine online-retail experience.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans le e-commerce, la rémunération se situe souvent autour de 2 800 à 3 500 €/mois selon l'expérience, la spécialité (marketing, gestion de boutique, données) et l'entreprise (sources : portails de rémunération allemands, Entgeltatlas). Montants indicatifs, variables selon le poste.",
          de: "Im E-Commerce liegt die Vergütung oft bei etwa 2.800 bis 3.500 €/Monat je nach Erfahrung, Spezialisierung (Marketing, Shop, Daten) und Unternehmen (Quellen: deutsche Gehaltsportale, Entgeltatlas). Richtwerte, je nach Stelle unterschiedlich.",
          en: "In e-commerce, pay is often around 2,800 to 3,500 €/month depending on experience, specialism (marketing, shop, data) and company (sources: German salary portals, Entgeltatlas). Indicative figures, varying by role.",
        },
      },
      RECOGNITION_SECTION,
      {
        heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
        body: {
          fr: "Un bon allemand (B2 visé) est attendu ; l'anglais et la maîtrise des outils numériques sont des atouts. Nous vous formons jusqu'au niveau requis avant le départ.",
          de: "Gutes Deutsch (B2 angestrebt) wird erwartet; Englisch und der sichere Umgang mit digitalen Werkzeugen sind von Vorteil. Wir bilden Sie bis zum erforderlichen Niveau aus, vor der Ausreise.",
          en: "Good German (B2 aimed for) is expected; English and command of digital tools are assets. We train you to the required level before departure.",
        },
      },
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Le e-commerce recrute-t-il des profils étrangers ?", de: "Werden im E-Commerce ausländische Profile eingestellt?", en: "Does e-commerce hire foreign profiles?" },
        a: {
          fr: "Le secteur manque de profils qualifiés. Nous étudions votre expérience et l'adéquation avec les postes ouverts, sans rien garantir à l'avance.",
          de: "Der Branche fehlen qualifizierte Profile. Wir prüfen Ihre Erfahrung und die Passung zu offenen Stellen, ohne im Voraus zu garantieren.",
          en: "The sector lacks qualified profiles. We study your experience and its fit with open roles, without guaranteeing anything in advance.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "grossiste-commerce-exterieur": {
    slug: "grossiste-commerce-exterieur",
    title: {
      fr: "Commerce de gros et extérieur (déjà qualifié)",
      de: "Groß- und Außenhandelsmanagement (bereits qualifiziert)",
      en: "Wholesale & foreign trade (already qualified)",
    },
    intro: {
      fr: "Vous avez une expérience des achats, de la vente aux entreprises ou du commerce international ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie haben Erfahrung im Einkauf, im B2B-Verkauf oder im internationalen Handel? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you have experience in purchasing, business sales or international trade? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les profils du commerce de gros, des achats, de la vente B2B et du commerce international, avec une expérience réelle de la négociation fournisseurs, de la gestion des commandes et de la logistique.",
          de: "Profile aus Großhandel, Einkauf, B2B-Vertrieb und internationalem Handel, mit echter Erfahrung in Lieferantenverhandlung, Auftragsabwicklung und Logistik.",
          en: "Profiles from wholesale, purchasing, B2B sales and international trade, with genuine experience in supplier negotiation, order handling and logistics.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans le commerce de gros et extérieur, la rémunération se situe souvent autour de 2 900 à 3 500 €/mois et davantage avec l'expérience et les responsabilités (sources : portails de rémunération allemands, Entgeltatlas). Le commerce technique, la chimie et la pharmacie paient au-dessus de la moyenne. Montants indicatifs.",
          de: "Im Groß- und Außenhandel liegt die Vergütung oft bei etwa 2.900 bis 3.500 €/Monat und mehr mit Erfahrung und Verantwortung (Quellen: deutsche Gehaltsportale, Entgeltatlas). Technischer Handel, Chemie und Pharma zahlen überdurchschnittlich. Richtwerte.",
          en: "In wholesale and foreign trade, pay is often around 2,900 to 3,500 €/month and more with experience and responsibility (sources: German salary portals, Entgeltatlas). Technical trade, chemicals and pharma pay above average. Indicative figures.",
        },
      },
      RECOGNITION_SECTION,
      {
        heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
        body: {
          fr: "Un allemand solide (B2 visé) est attendu, l'anglais étant un vrai atout pour le commerce extérieur. Nous vous formons jusqu'au niveau requis avant le départ.",
          de: "Solides Deutsch (B2 angestrebt) wird erwartet, Englisch ist im Außenhandel ein echtes Plus. Wir bilden Sie bis zum erforderlichen Niveau aus, vor der Ausreise.",
          en: "Solid German (B2 aimed for) is expected, with English a real asset for foreign trade. We train you to the required level before departure.",
        },
      },
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "L'expérience internationale est-elle valorisée ?", de: "Wird internationale Erfahrung geschätzt?", en: "Is international experience valued?" },
        a: {
          fr: "Oui, notamment pour le commerce extérieur. Nous étudions votre parcours et l'adéquation avec les postes, sans promesse préalable.",
          de: "Ja, besonders im Außenhandel. Wir prüfen Ihren Werdegang und die Passung zu Stellen, ohne vorherige Zusage.",
          en: "Yes, especially for foreign trade. We study your background and its fit with roles, without prior promises.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "acheteur-approvisionnement": {
    slug: "acheteur-approvisionnement",
    title: {
      fr: "Acheteur / approvisionnement (Einkauf)",
      de: "Mitarbeiter/in im Einkauf",
      en: "Buyer / procurement (Einkauf)",
    },
    intro: {
      fr: "Vous travaillez dans les achats ou l'approvisionnement ? Nous étudions votre profil pour identifier les postes qui peuvent vous correspondre en Allemagne.",
      de: "Sie arbeiten im Einkauf oder in der Beschaffung? Wir prüfen Ihr Profil, um passende Stellen in Deutschland zu finden.",
      en: "Do you work in purchasing or procurement? We study your profile to identify roles that may suit you in Germany.",
    },
    sections: [
      {
        heading: { fr: "Qui est concerné", de: "Wen es betrifft", en: "Who this is for" },
        body: {
          fr: "Les acheteurs, gestionnaires d'approvisionnement et responsables de fournisseurs, avec une expérience réelle de la négociation, des commandes et de la gestion des stocks.",
          de: "Einkäufer, Beschaffungsverantwortliche und Lieferantenmanager mit echter Erfahrung in Verhandlung, Bestellwesen und Bestandsführung.",
          en: "Buyers, procurement managers and supplier managers with genuine experience in negotiation, ordering and stock management.",
        },
      },
      {
        heading: { fr: "Rémunération", de: "Vergütung", en: "Pay" },
        body: {
          fr: "Dans les achats, la rémunération dépend fortement du secteur, de l'expérience et du périmètre (achats opérationnels ou stratégiques). Les chiffres publics allemands (Entgeltatlas, portails de rémunération) donnent des repères, mais le niveau réel dépend du poste. Nous vous aidons à situer votre profil ; les montants sont indicatifs et non garantis.",
          de: "Im Einkauf hängt die Vergütung stark von Branche, Erfahrung und Verantwortungsbereich ab (operativer oder strategischer Einkauf). Öffentliche deutsche Zahlen (Entgeltatlas, Gehaltsportale) geben Anhaltspunkte, das tatsächliche Niveau hängt aber von der Stelle ab. Wir helfen, Ihr Profil einzuordnen; die Angaben sind Richtwerte und nicht garantiert.",
          en: "In purchasing, pay depends heavily on sector, experience and scope (operational or strategic buying). Public German figures (Entgeltatlas, salary portals) give benchmarks, but the actual level depends on the role. We help position your profile; figures are indicative and not guaranteed.",
        },
      },
      RECOGNITION_SECTION,
      {
        heading: { fr: "Niveau d'allemand", de: "Deutschniveau", en: "German level" },
        body: {
          fr: "Un allemand solide (B2 visé) est attendu, l'anglais étant un atout pour les achats internationaux. Nous vous formons jusqu'au niveau requis avant le départ.",
          de: "Solides Deutsch (B2 angestrebt) wird erwartet, Englisch ist im internationalen Einkauf von Vorteil. Wir bilden Sie bis zum erforderlichen Niveau aus, vor der Ausreise.",
          en: "Solid German (B2 aimed for) is expected, with English an asset for international purchasing. We train you to the required level before departure.",
        },
      },
      PROCESS_SECTION,
    ],
    faq: [
      {
        q: { fr: "Les achats sont-ils un métier réglementé ?", de: "Ist der Einkauf ein reglementierter Beruf?", en: "Is purchasing a regulated profession?" },
        a: {
          fr: "Non, c'est un métier non réglementé. Une reconnaissance formelle n'est pas toujours nécessaire pour exercer, mais peut l'être selon la voie de visa. Nous étudions votre cas.",
          de: "Nein, es ist ein nicht reglementierter Beruf. Eine formelle Anerkennung ist nicht immer nötig, kann aber je nach Visumweg erforderlich sein. Wir prüfen Ihren Fall.",
          en: "No, it's a non-regulated profession. Formal recognition is not always required to work, but may be needed depending on the visa route. We assess your case.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
