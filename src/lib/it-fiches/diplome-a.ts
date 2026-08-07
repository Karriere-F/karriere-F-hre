import type { ItFiche } from "../it-fiche-types";
import { SALARY_NOTE } from "../it-fiche-types";

export const IT_FICHES_DIPLOME_A: Record<string, ItFiche> = {
  developpeur: {
    slug: "developpeur",
    title: {
      fr: "Développeur / Software Engineer",
      de: "Softwareentwickler",
      en: "Software Engineer",
    },
    intro: {
      fr: "Vos compétences de développeur sont recherchées en Allemagne, où la demande dépasse largement l'offre.",
      de: "Ihre Fähigkeiten als Softwareentwickler sind in Deutschland gefragt, wo die Nachfrage das Angebot deutlich übersteigt.",
      en: "Your skills as a software engineer are in demand in Germany, where demand far outstrips supply.",
    },
    image: "developpeur",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le développeur conçoit, développe, teste et maintient des logiciels au sein d'une équipe, avec des langages et des frameworks modernes.",
          de: "Der Softwareentwickler konzipiert, entwickelt, testet und wartet Software im Team, mit modernen Sprachen und Frameworks.",
          en: "The software engineer designs, develops, tests and maintains software within a team, using modern languages and frameworks.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane est d'environ 4 266 €/mois (fourchette 3 675 à 5 166 €), l'entrée autour de 4 000 €/mois, et les profils expérimentés ou en grande entreprise peuvent atteindre environ 5 900 €/mois (source : StepStone, 2025).",
          de: "Der Median liegt bei etwa 4.266 €/Monat (Spanne 3.675 bis 5.166 €), der Einstieg bei rund 4.000 €/Monat, und erfahrene Profile oder große Unternehmen können bis zu etwa 5.900 €/Monat erreichen (Quelle: StepStone, 2025).",
          en: "The median is around 4,266 €/month (range 3,675 to 5,166 €), entry level about 4,000 €/month, and experienced profiles or large companies can reach around 5,900 €/month (source: StepStone, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "SAP, Siemens, Bosch, BMW, Mercedes-Benz, Zalando, Delivery Hero, Deutsche Telekom, T-Systems et N26 recrutent régulièrement des développeurs.",
          de: "SAP, Siemens, Bosch, BMW, Mercedes-Benz, Zalando, Delivery Hero, Deutsche Telekom, T-Systems und N26 stellen regelmäßig Softwareentwickler ein.",
          en: "SAP, Siemens, Bosch, BMW, Mercedes-Benz, Zalando, Delivery Hero, Deutsche Telekom, T-Systems and N26 regularly hire software engineers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts et la demande dépasse l'offre (source : Bitkom, IW, 2025).",
          de: "Die Perspektiven sind sehr gut und die Nachfrage übersteigt das Angebot (Quelle: Bitkom, IW, 2025).",
          en: "Prospects are very strong and demand exceeds supply (source: Bitkom, IW, 2025).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution peut mener vers développeur senior, tech lead, architecte logiciel puis engineering manager.",
          de: "Die Entwicklung kann zu Senior-Entwickler, Tech Lead, Softwarearchitekt und Engineering Manager führen.",
          en: "Progression can lead to senior developer, tech lead, software architect and then engineering manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "L'anglais suffit souvent pour les rôles techniques (scale-ups, grandes entreprises tech) ; un niveau B1 ou B2 en allemand élargit le marché et aide la progression dans le Mittelstand et l'automobile.",
          de: "Für technische Rollen (Scale-ups, große Tech-Unternehmen) reicht oft Englisch aus; ein Niveau B1 oder B2 in Deutsch erweitert den Markt und fördert den Aufstieg im Mittelstand und in der Automobilbranche.",
          en: "English is often enough for technical roles (scale-ups, large tech companies); a B1 or B2 level in German widens the market and helps progression in the Mittelstand and the automotive sector.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "En informatique, une reconnaissance formelle du diplôme n'est le plus souvent pas exigée pour travailler en Allemagne. Un diplôme ou une expérience solides facilitent la Carte bleue européenne ; nous évaluons votre profil, vos diplômes et votre expérience.",
          de: "In der Informatik ist eine formelle Anerkennung des Abschlusses für die Arbeit in Deutschland meist nicht erforderlich. Ein solider Abschluss oder solide Erfahrung erleichtern die Blaue Karte EU; wir bewerten Ihr Profil, Ihre Abschlüsse und Ihre Erfahrung.",
          en: "In IT, formal recognition of the diploma is most often not required to work in Germany. A solid degree or experience facilitates the EU Blue Card; we assess your profile, your qualifications and your experience.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "La Carte bleue européenne 2025 demande un salaire brut d'environ 48 300 € par an (seuil général) ou d'environ 43 760 € par an pour les métiers en tension comme l'informatique (source : cabinets juridiques d'immigration, 2025). Les spécialistes IT sans diplôme universitaire peuvent l'obtenir avec au moins 3 ans d'expérience comparable et une offre atteignant le seuil réduit. La Chancenkarte (carte d'opportunité) permet de venir chercher un emploi qualifié jusqu'à un an. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Blaue Karte EU 2025 verlangt ein Bruttogehalt von etwa 48.300 € pro Jahr (allgemeiner Schwellenwert) oder etwa 43.760 € pro Jahr für Mangelberufe wie die Informatik (Quelle: Kanzleien für Einwanderungsrecht, 2025). IT-Spezialisten ohne Hochschulabschluss können sie mit mindestens 3 Jahren vergleichbarer Erfahrung und einem Angebot erhalten, das den reduzierten Schwellenwert erreicht. Die Chancenkarte erlaubt es, bis zu einem Jahr zur Suche einer qualifizierten Beschäftigung nach Deutschland zu kommen. Wir prüfen Ihre Eignung und erstellen die Unterlagen gemeinsam mit Ihnen.",
          en: "The 2025 EU Blue Card requires a gross salary of around 48,300 € per year (general threshold) or around 43,760 € per year for shortage occupations such as IT (source: immigration law firms, 2025). IT specialists without a university degree can obtain it with at least 3 years of comparable experience and an offer reaching the reduced threshold. The Chancenkarte (opportunity card) allows you to come and look for qualified employment for up to one year. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie in Deutsch bis zum nützlichen Niveau aus, stellen Ihr Profil bei deutschen Arbeitgebern vorteilhaft dar, bereiten die Visumsunterlagen vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Dois-je parler allemand pour travailler comme développeur en Allemagne ?",
          de: "Muss ich Deutsch sprechen, um als Softwareentwickler in Deutschland zu arbeiten?",
          en: "Do I need to speak German to work as a software engineer in Germany?",
        },
        a: {
          fr: "Pas toujours : de nombreuses scale-ups et grandes entreprises tech travaillent en anglais, mais un niveau B1 ou B2 en allemand ouvre nettement plus d'opportunités, surtout dans le Mittelstand et l'automobile.",
          de: "Nicht immer: Viele Scale-ups und große Tech-Unternehmen arbeiten auf Englisch, aber ein Niveau B1 oder B2 in Deutsch eröffnet deutlich mehr Möglichkeiten, besonders im Mittelstand und in der Automobilbranche.",
          en: "Not always: many scale-ups and large tech companies work in English, but a B1 or B2 level in German opens up clearly more opportunities, especially in the Mittelstand and the automotive sector.",
        },
      },
      {
        q: {
          fr: "Ai-je besoin d'un diplôme universitaire reconnu ?",
          de: "Brauche ich einen anerkannten Hochschulabschluss?",
          en: "Do I need a recognised university degree?",
        },
        a: {
          fr: "En informatique, une reconnaissance formelle n'est le plus souvent pas exigée ; une expérience d'au moins 3 ans peut suffire pour la Carte bleue européenne selon votre offre.",
          de: "In der Informatik ist eine formelle Anerkennung meist nicht erforderlich; eine Erfahrung von mindestens 3 Jahren kann je nach Angebot für die Blaue Karte EU ausreichen.",
          en: "In IT, formal recognition is most often not required; at least 3 years of experience can be enough for the EU Blue Card depending on your offer.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "developpeur-web": {
    slug: "developpeur-web",
    title: {
      fr: "Développeur web",
      de: "Webentwickler",
      en: "Web Developer",
    },
    intro: {
      fr: "Le web allemand recrute des développeurs capables de construire des sites et des applications performants.",
      de: "Die deutsche Webbranche sucht Entwickler, die leistungsfähige Websites und Anwendungen bauen können.",
      en: "The German web sector is hiring developers able to build high-performing websites and applications.",
    },
    image: "developpeur-web",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le développeur web crée des sites et des applications web, en front-end, back-end ou full-stack.",
          de: "Der Webentwickler erstellt Websites und Webanwendungen, im Front-End, Back-End oder Full-Stack.",
          en: "The web developer builds websites and web applications, in front-end, back-end or full-stack.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire varie selon la spécialisation : full-stack médiane environ 6 064 €/mois (fourchette annuelle environ 51 700 à 73 800 €) et entrée environ 4 770 €/mois, tandis que le front-end est plus bas, avec une moyenne d'environ 3 750 €/mois (source : jobvector, Gehalt.de, 2026).",
          de: "Das Gehalt hängt von der Spezialisierung ab: Full-Stack-Median etwa 6.064 €/Monat (Jahresspanne etwa 51.700 bis 73.800 €) und Einstieg etwa 4.770 €/Monat, während das Front-End niedriger liegt, mit einem Durchschnitt von etwa 3.750 €/Monat (Quelle: jobvector, Gehalt.de, 2026).",
          en: "Salary varies by specialisation: full-stack median around 6,064 €/month (annual range around 51,700 to 73,800 €) and entry level around 4,770 €/month, while front-end is lower, with an average of around 3,750 €/month (source: jobvector, Gehalt.de, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Zalando, About You, Delivery Hero, HelloFresh, N26, Trade Republic, SAP, DATEV, Check24, Otto Group et de nombreuses agences digitales recrutent des développeurs web.",
          de: "Zalando, About You, Delivery Hero, HelloFresh, N26, Trade Republic, SAP, DATEV, Check24, Otto Group und zahlreiche Digitalagenturen stellen Webentwickler ein.",
          en: "Zalando, About You, Delivery Hero, HelloFresh, N26, Trade Republic, SAP, DATEV, Check24, Otto Group and many digital agencies hire web developers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont élevés pour le full-stack et les stacks recherchées (React, Node, Java, Python) ; le segment junior et agence est plus concurrentiel.",
          de: "Die Perspektiven sind hoch für Full-Stack und gefragte Stacks (React, Node, Java, Python); das Junior- und Agentursegment ist umkämpfter.",
          en: "Prospects are high for full-stack and sought-after stacks (React, Node, Java, Python); the junior and agency segment is more competitive.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution peut mener vers full-stack, tech lead ou une spécialisation (architecture front-end, back-end, DevOps).",
          de: "Die Entwicklung kann zu Full-Stack, Tech Lead oder einer Spezialisierung führen (Front-End-Architektur, Back-End, DevOps).",
          en: "Progression can lead to full-stack, tech lead or a specialisation (front-end architecture, back-end, DevOps).",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le niveau attendu est variable : les scale-ups travaillent souvent en anglais, tandis que les agences et le Mittelstand attendent un niveau B1 ou B2 en allemand.",
          de: "Das erwartete Niveau ist unterschiedlich: Scale-ups arbeiten oft auf Englisch, während Agenturen und der Mittelstand ein Niveau B1 oder B2 in Deutsch erwarten.",
          en: "The expected level varies: scale-ups often work in English, while agencies and the Mittelstand expect a B1 or B2 level in German.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "En informatique, une reconnaissance formelle du diplôme n'est le plus souvent pas exigée pour travailler en Allemagne. Un diplôme ou une expérience solides facilitent la Carte bleue européenne ; nous évaluons votre profil, vos diplômes et votre expérience.",
          de: "In der Informatik ist eine formelle Anerkennung des Abschlusses für die Arbeit in Deutschland meist nicht erforderlich. Ein solider Abschluss oder solide Erfahrung erleichtern die Blaue Karte EU; wir bewerten Ihr Profil, Ihre Abschlüsse und Ihre Erfahrung.",
          en: "In IT, formal recognition of the diploma is most often not required to work in Germany. A solid degree or experience facilitates the EU Blue Card; we assess your profile, your qualifications and your experience.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "La Carte bleue européenne 2025 demande un salaire brut d'environ 48 300 € par an (seuil général) ou d'environ 43 760 € par an pour les métiers en tension comme l'informatique (source : cabinets juridiques d'immigration, 2025). Les spécialistes IT sans diplôme universitaire peuvent l'obtenir avec au moins 3 ans d'expérience comparable et une offre atteignant le seuil réduit. La Chancenkarte (carte d'opportunité) permet de venir chercher un emploi qualifié jusqu'à un an. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Blaue Karte EU 2025 verlangt ein Bruttogehalt von etwa 48.300 € pro Jahr (allgemeiner Schwellenwert) oder etwa 43.760 € pro Jahr für Mangelberufe wie die Informatik (Quelle: Kanzleien für Einwanderungsrecht, 2025). IT-Spezialisten ohne Hochschulabschluss können sie mit mindestens 3 Jahren vergleichbarer Erfahrung und einem Angebot erhalten, das den reduzierten Schwellenwert erreicht. Die Chancenkarte erlaubt es, bis zu einem Jahr zur Suche einer qualifizierten Beschäftigung nach Deutschland zu kommen. Wir prüfen Ihre Eignung und erstellen die Unterlagen gemeinsam mit Ihnen.",
          en: "The 2025 EU Blue Card requires a gross salary of around 48,300 € per year (general threshold) or around 43,760 € per year for shortage occupations such as IT (source: immigration law firms, 2025). IT specialists without a university degree can obtain it with at least 3 years of comparable experience and an offer reaching the reduced threshold. The Chancenkarte (opportunity card) allows you to come and look for qualified employment for up to one year. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie in Deutsch bis zum nützlichen Niveau aus, stellen Ihr Profil bei deutschen Arbeitgebern vorteilhaft dar, bereiten die Visumsunterlagen vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le full-stack est-il mieux payé que le front-end ?",
          de: "Wird Full-Stack besser bezahlt als Front-End?",
          en: "Is full-stack better paid than front-end?",
        },
        a: {
          fr: "Oui : la médiane full-stack est d'environ 6 064 €/mois, nettement au-dessus de la moyenne front-end d'environ 3 750 €/mois, mais tout dépend de la spécialisation et de l'expérience.",
          de: "Ja: Der Full-Stack-Median liegt bei etwa 6.064 €/Monat, deutlich über dem Front-End-Durchschnitt von etwa 3.750 €/Monat, aber alles hängt von Spezialisierung und Erfahrung ab.",
          en: "Yes: the full-stack median is around 6,064 €/month, clearly above the front-end average of around 3,750 €/month, but it all depends on specialisation and experience.",
        },
      },
      {
        q: {
          fr: "Quelles technologies ouvrent le plus de portes ?",
          de: "Welche Technologien öffnen die meisten Türen?",
          en: "Which technologies open the most doors?",
        },
        a: {
          fr: "Les stacks recherchées comme React, Node, Java et Python sont particulièrement demandées et facilitent l'accès aux meilleurs postes.",
          de: "Gefragte Stacks wie React, Node, Java und Python sind besonders begehrt und erleichtern den Zugang zu den besten Stellen.",
          en: "Sought-after stacks such as React, Node, Java and Python are particularly in demand and ease access to the best positions.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "administrateur-systeme": {
    slug: "administrateur-systeme",
    title: {
      fr: "Administrateur systèmes et réseaux",
      de: "Systemadministrator",
      en: "Systems and Network Administrator",
    },
    intro: {
      fr: "Les entreprises allemandes ont besoin d'administrateurs fiables pour faire tourner et sécuriser leur infrastructure IT.",
      de: "Deutsche Unternehmen brauchen zuverlässige Administratoren, um ihre IT-Infrastruktur zu betreiben und abzusichern.",
      en: "German companies need reliable administrators to run and secure their IT infrastructure.",
    },
    image: "administrateur-systeme",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'administrateur systèmes et réseaux exploite et sécurise l'infrastructure IT : serveurs, réseaux et support utilisateur.",
          de: "Der Systemadministrator betreibt und sichert die IT-Infrastruktur: Server, Netzwerke und Anwendersupport.",
          en: "The systems and network administrator operates and secures the IT infrastructure: servers, networks and user support.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La fourchette se situe entre environ 3 750 et 4 875 €/mois, avec une moyenne d'environ 4 770 €/mois et jusqu'à environ 5 290 €/mois ; l'entrée est d'environ 3 800 à 4 400 €/mois (source : Glassdoor, jobvector, 2025).",
          de: "Die Spanne liegt zwischen etwa 3.750 und 4.875 €/Monat, mit einem Durchschnitt von etwa 4.770 €/Monat und bis zu etwa 5.290 €/Monat; der Einstieg liegt bei etwa 3.800 bis 4.400 €/Monat (Quelle: Glassdoor, jobvector, 2025).",
          en: "The range is between around 3,750 and 4,875 €/month, with an average of around 4,770 €/month and up to around 5,290 €/month; entry level is around 3,800 to 4,400 €/month (source: Glassdoor, jobvector, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "T-Systems, Bechtle, Cancom, DATEV, le secteur public, les hôpitaux et le Mittelstand recrutent des administrateurs systèmes et réseaux.",
          de: "T-Systems, Bechtle, Cancom, DATEV, der öffentliche Sektor, Krankenhäuser und der Mittelstand stellen Systemadministratoren ein.",
          en: "T-Systems, Bechtle, Cancom, DATEV, the public sector, hospitals and the Mittelstand hire systems and network administrators.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides et stables ; les compétences Linux et BSI-Grundschutz sont particulièrement valorisées.",
          de: "Die Perspektiven sind solide und stabil; Linux-Kenntnisse und BSI-Grundschutz werden besonders geschätzt.",
          en: "Prospects are solid and stable; Linux and BSI-Grundschutz skills are particularly valued.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution peut mener vers administrateur senior, DevOps, cloud, sécurité IT ou responsable IT.",
          de: "Die Entwicklung kann zu Senior-Administrator, DevOps, Cloud, IT-Sicherheit oder IT-Leiter führen.",
          en: "Progression can lead to senior administrator, DevOps, cloud, IT security or IT manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "C'est le rôle IT le moins anglophone : un niveau B1 ou B2 en allemand est généralement attendu, car le support interne et la documentation sont en allemand.",
          de: "Es ist die IT-Rolle mit dem geringsten Englischanteil: Ein Niveau B1 oder B2 in Deutsch wird in der Regel erwartet, da interner Support und Dokumentation auf Deutsch sind.",
          en: "This is the least English-speaking IT role: a B1 or B2 level in German is generally expected, as internal support and documentation are in German.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "En informatique, une reconnaissance formelle du diplôme n'est le plus souvent pas exigée pour travailler en Allemagne. Un diplôme ou une expérience solides facilitent la Carte bleue européenne ; nous évaluons votre profil, vos diplômes et votre expérience.",
          de: "In der Informatik ist eine formelle Anerkennung des Abschlusses für die Arbeit in Deutschland meist nicht erforderlich. Ein solider Abschluss oder solide Erfahrung erleichtern die Blaue Karte EU; wir bewerten Ihr Profil, Ihre Abschlüsse und Ihre Erfahrung.",
          en: "In IT, formal recognition of the diploma is most often not required to work in Germany. A solid degree or experience facilitates the EU Blue Card; we assess your profile, your qualifications and your experience.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "La Carte bleue européenne 2025 demande un salaire brut d'environ 48 300 € par an (seuil général) ou d'environ 43 760 € par an pour les métiers en tension comme l'informatique (source : cabinets juridiques d'immigration, 2025). Les spécialistes IT sans diplôme universitaire peuvent l'obtenir avec au moins 3 ans d'expérience comparable et une offre atteignant le seuil réduit. La Chancenkarte (carte d'opportunité) permet de venir chercher un emploi qualifié jusqu'à un an. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Blaue Karte EU 2025 verlangt ein Bruttogehalt von etwa 48.300 € pro Jahr (allgemeiner Schwellenwert) oder etwa 43.760 € pro Jahr für Mangelberufe wie die Informatik (Quelle: Kanzleien für Einwanderungsrecht, 2025). IT-Spezialisten ohne Hochschulabschluss können sie mit mindestens 3 Jahren vergleichbarer Erfahrung und einem Angebot erhalten, das den reduzierten Schwellenwert erreicht. Die Chancenkarte erlaubt es, bis zu einem Jahr zur Suche einer qualifizierten Beschäftigung nach Deutschland zu kommen. Wir prüfen Ihre Eignung und erstellen die Unterlagen gemeinsam mit Ihnen.",
          en: "The 2025 EU Blue Card requires a gross salary of around 48,300 € per year (general threshold) or around 43,760 € per year for shortage occupations such as IT (source: immigration law firms, 2025). IT specialists without a university degree can obtain it with at least 3 years of comparable experience and an offer reaching the reduced threshold. The Chancenkarte (opportunity card) allows you to come and look for qualified employment for up to one year. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie in Deutsch bis zum nützlichen Niveau aus, stellen Ihr Profil bei deutschen Arbeitgebern vorteilhaft dar, bereiten die Visumsunterlagen vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "L'allemand est-il vraiment indispensable pour ce métier ?",
          de: "Ist Deutsch für diesen Beruf wirklich unverzichtbar?",
          en: "Is German really essential for this role?",
        },
        a: {
          fr: "C'est le rôle IT le moins anglophone : un niveau B1 ou B2 est généralement attendu, car le support interne et la documentation se font en allemand.",
          de: "Es ist die IT-Rolle mit dem geringsten Englischanteil: Ein Niveau B1 oder B2 wird in der Regel erwartet, da interner Support und Dokumentation auf Deutsch erfolgen.",
          en: "It is the least English-speaking IT role: a B1 or B2 level is generally expected, as internal support and documentation are in German.",
        },
      },
      {
        q: {
          fr: "Quelles compétences sont les plus valorisées ?",
          de: "Welche Fähigkeiten werden am meisten geschätzt?",
          en: "Which skills are most valued?",
        },
        a: {
          fr: "Les compétences Linux et BSI-Grundschutz sont particulièrement recherchées et renforcent la stabilité de votre parcours.",
          de: "Linux-Kenntnisse und BSI-Grundschutz sind besonders gefragt und stärken die Stabilität Ihres Werdegangs.",
          en: "Linux and BSI-Grundschutz skills are particularly sought after and reinforce the stability of your career path.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  devops: {
    slug: "devops",
    title: {
      fr: "Ingénieur DevOps",
      de: "DevOps Engineer",
      en: "DevOps Engineer",
    },
    intro: {
      fr: "Les ingénieurs DevOps figurent parmi les profils IT les mieux payés et les plus recherchés en Allemagne.",
      de: "DevOps Engineers gehören zu den bestbezahlten und gefragtesten IT-Profilen in Deutschland.",
      en: "DevOps engineers are among the best-paid and most sought-after IT profiles in Germany.",
    },
    image: "devops",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur DevOps fait le pont entre développement et exploitation, en automatisant le build, le déploiement et l'infrastructure (cloud, CI/CD).",
          de: "Der DevOps Engineer schlägt die Brücke zwischen Entwicklung und Betrieb und automatisiert Build, Deployment und Infrastruktur (Cloud, CI/CD).",
          en: "The DevOps engineer bridges development and operations, automating build, deployment and infrastructure (cloud, CI/CD).",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane est d'environ 4 600 €/mois (fourchette 4 000 à 5 550 €, StepStone 2025) ; certaines sources vont jusqu'à environ 6 190 €/mois et les profils senior atteignent 6 250 à 7 500 €/mois (auto-déclaré, à confirmer). Les portails divergent, nous ne faisons pas de moyenne.",
          de: "Der Median liegt bei etwa 4.600 €/Monat (Spanne 4.000 bis 5.550 €, StepStone 2025); manche Quellen gehen bis zu etwa 6.190 €/Monat, und Senior-Profile erreichen 6.250 bis 7.500 €/Monat (selbst angegeben, zu bestätigen). Die Portale weichen voneinander ab, wir bilden keinen Durchschnitt.",
          en: "The median is around 4,600 €/month (range 4,000 to 5,550 €, StepStone 2025); some sources go up to around 6,190 €/month and senior profiles reach 6,250 to 7,500 €/month (self-reported, to be confirmed). The portals diverge, we do not average them.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Zalando, Delivery Hero, N26, Trade Republic, SAP, T-Systems et les intégrateurs cloud recrutent des ingénieurs DevOps.",
          de: "Zalando, Delivery Hero, N26, Trade Republic, SAP, T-Systems und Cloud-Integratoren stellen DevOps Engineers ein.",
          en: "Zalando, Delivery Hero, N26, Trade Republic, SAP, T-Systems and cloud integrators hire DevOps engineers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts et parmi les mieux payés ; le cloud (AWS, Azure, GCP), le CI/CD et l'automatisation sont particulièrement recherchés.",
          de: "Die Perspektiven sind sehr gut und gehören zu den bestbezahlten; Cloud (AWS, Azure, GCP), CI/CD und Automatisierung sind besonders gefragt.",
          en: "Prospects are very strong and among the best paid; cloud (AWS, Azure, GCP), CI/CD and automation are particularly sought after.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution peut mener vers DevOps senior, platform engineer, SRE ou architecte cloud.",
          de: "Die Entwicklung kann zu Senior-DevOps, Platform Engineer, SRE oder Cloud-Architekt führen.",
          en: "Progression can lead to senior DevOps, platform engineer, SRE or cloud architect.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "C'est l'un des rôles les plus anglophones, courant dans les scale-ups de Berlin et Munich ; l'allemand est un plus, rarement bloquant.",
          de: "Es ist eine der englischsprachigsten Rollen, verbreitet in den Scale-ups von Berlin und München; Deutsch ist ein Vorteil, aber selten ein Hindernis.",
          en: "It is one of the most English-speaking roles, common in the scale-ups of Berlin and Munich; German is a plus, rarely a blocker.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "En informatique, une reconnaissance formelle du diplôme n'est le plus souvent pas exigée pour travailler en Allemagne. Un diplôme ou une expérience solides facilitent la Carte bleue européenne ; nous évaluons votre profil, vos diplômes et votre expérience.",
          de: "In der Informatik ist eine formelle Anerkennung des Abschlusses für die Arbeit in Deutschland meist nicht erforderlich. Ein solider Abschluss oder solide Erfahrung erleichtern die Blaue Karte EU; wir bewerten Ihr Profil, Ihre Abschlüsse und Ihre Erfahrung.",
          en: "In IT, formal recognition of the diploma is most often not required to work in Germany. A solid degree or experience facilitates the EU Blue Card; we assess your profile, your qualifications and your experience.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "La Carte bleue européenne 2025 demande un salaire brut d'environ 48 300 € par an (seuil général) ou d'environ 43 760 € par an pour les métiers en tension comme l'informatique (source : cabinets juridiques d'immigration, 2025). Les spécialistes IT sans diplôme universitaire peuvent l'obtenir avec au moins 3 ans d'expérience comparable et une offre atteignant le seuil réduit. La Chancenkarte (carte d'opportunité) permet de venir chercher un emploi qualifié jusqu'à un an. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Blaue Karte EU 2025 verlangt ein Bruttogehalt von etwa 48.300 € pro Jahr (allgemeiner Schwellenwert) oder etwa 43.760 € pro Jahr für Mangelberufe wie die Informatik (Quelle: Kanzleien für Einwanderungsrecht, 2025). IT-Spezialisten ohne Hochschulabschluss können sie mit mindestens 3 Jahren vergleichbarer Erfahrung und einem Angebot erhalten, das den reduzierten Schwellenwert erreicht. Die Chancenkarte erlaubt es, bis zu einem Jahr zur Suche einer qualifizierten Beschäftigung nach Deutschland zu kommen. Wir prüfen Ihre Eignung und erstellen die Unterlagen gemeinsam mit Ihnen.",
          en: "The 2025 EU Blue Card requires a gross salary of around 48,300 € per year (general threshold) or around 43,760 € per year for shortage occupations such as IT (source: immigration law firms, 2025). IT specialists without a university degree can obtain it with at least 3 years of comparable experience and an offer reaching the reduced threshold. The Chancenkarte (opportunity card) allows you to come and look for qualified employment for up to one year. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie in Deutsch bis zum nützlichen Niveau aus, stellen Ihr Profil bei deutschen Arbeitgebern vorteilhaft dar, bereiten die Visumsunterlagen vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Pourquoi les fourchettes de salaire varient-elles autant ?",
          de: "Warum schwanken die Gehaltsspannen so stark?",
          en: "Why do the salary ranges vary so much?",
        },
        a: {
          fr: "Les portails de salaires divergent nettement pour ce métier : nous présentons chaque source telle quelle, sans en faire de moyenne, pour rester honnêtes.",
          de: "Die Gehaltsportale weichen bei diesem Beruf deutlich voneinander ab: Wir stellen jede Quelle so dar, wie sie ist, ohne einen Durchschnitt zu bilden, um ehrlich zu bleiben.",
          en: "Salary portals diverge markedly for this role: we present each source as it is, without averaging, to stay honest.",
        },
      },
      {
        q: {
          fr: "Quelles compétences cloud sont les plus demandées ?",
          de: "Welche Cloud-Fähigkeiten sind am gefragtesten?",
          en: "Which cloud skills are most in demand?",
        },
        a: {
          fr: "Le cloud (AWS, Azure, GCP), le CI/CD et l'automatisation sont particulièrement recherchés et soutiennent les meilleurs salaires.",
          de: "Cloud (AWS, Azure, GCP), CI/CD und Automatisierung sind besonders gefragt und tragen die besten Gehälter.",
          en: "Cloud (AWS, Azure, GCP), CI/CD and automation are particularly sought after and support the best salaries.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  cloud: {
    slug: "cloud",
    title: {
      fr: "Architecte / Ingénieur cloud",
      de: "Cloud Architect / Engineer",
      en: "Cloud Architect / Engineer",
    },
    intro: {
      fr: "Le cloud est l'un des plus grands goulets d'étranglement du marché IT allemand, avec des salaires parmi les plus élevés.",
      de: "Die Cloud ist einer der größten Engpässe auf dem deutschen IT-Markt, mit Gehältern, die zu den höchsten zählen.",
      en: "The cloud is one of the biggest bottlenecks in the German IT market, with salaries among the highest.",
    },
    image: "cloud",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'architecte ou ingénieur cloud conçoit, construit et exploite l'infrastructure cloud et les migrations sur AWS, Azure ou Google Cloud.",
          de: "Der Cloud Architect oder Engineer konzipiert, baut und betreibt die Cloud-Infrastruktur und die Migrationen auf AWS, Azure oder Google Cloud.",
          en: "The cloud architect or engineer designs, builds and operates cloud infrastructure and migrations on AWS, Azure or Google Cloud.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le Cloud Architect a une médiane d'environ 5 848 €/mois (fourchette 5 186 à 6 595 €) et le Cloud Engineer d'environ 6 087 €/mois (fourchette 5 408 à 6 852 €) ; l'entrée est autour de 5 000 €/mois et le senior jusqu'à environ 8 300 €/mois (indicatif) (source : Gehalt.de, StepStone, 2026).",
          de: "Der Cloud Architect hat einen Median von etwa 5.848 €/Monat (Spanne 5.186 bis 6.595 €) und der Cloud Engineer von etwa 6.087 €/Monat (Spanne 5.408 bis 6.852 €); der Einstieg liegt bei rund 5.000 €/Monat und der Senior bei bis zu etwa 8.300 €/Monat (Richtwert) (Quelle: Gehalt.de, StepStone, 2026).",
          en: "The Cloud Architect has a median of around 5,848 €/month (range 5,186 to 6,595 €) and the Cloud Engineer around 6,087 €/month (range 5,408 to 6,852 €); entry level is around 5,000 €/month and senior up to around 8,300 €/month (indicative) (source: Gehalt.de, StepStone, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "T-Systems, SAP, Siemens, Bosch, Accenture, Capgemini, Deloitte, les filiales allemandes d'AWS, Microsoft et Google, Allianz et Deutsche Bank recrutent des profils cloud.",
          de: "T-Systems, SAP, Siemens, Bosch, Accenture, Capgemini, Deloitte, die deutschen Tochtergesellschaften von AWS, Microsoft und Google, Allianz und Deutsche Bank stellen Cloud-Profile ein.",
          en: "T-Systems, SAP, Siemens, Bosch, Accenture, Capgemini, Deloitte, the German subsidiaries of AWS, Microsoft and Google, Allianz and Deutsche Bank hire cloud profiles.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : c'est le deuxième plus gros goulet d'étranglement après SAP, et le déficit de compétences cloud pourrait atteindre environ 200 000 postes d'ici 2030 (source : Bitkom, eco, 2025).",
          de: "Die Perspektiven sind sehr gut: Es ist der zweitgrößte Engpass nach SAP, und die Lücke an Cloud-Kompetenzen könnte bis 2030 etwa 200.000 Stellen erreichen (Quelle: Bitkom, eco, 2025).",
          en: "Prospects are very strong: it is the second biggest bottleneck after SAP, and the cloud skills gap could reach around 200,000 positions by 2030 (source: Bitkom, eco, 2025).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution peut mener vers architecte cloud principal, platform lead ou responsable cloud.",
          de: "Die Entwicklung kann zu leitendem Cloud-Architekten, Platform Lead oder Cloud-Verantwortlichem führen.",
          en: "Progression can lead to principal cloud architect, platform lead or head of cloud.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "L'environnement est plutôt anglophone, surtout chez les hyperscalers et les cabinets internationaux ; un niveau B1 ou B2 en allemand élargit le marché chez les clients du Mittelstand et du secteur public.",
          de: "Das Umfeld ist eher englischsprachig, besonders bei den Hyperscalern und internationalen Beratungen; ein Niveau B1 oder B2 in Deutsch erweitert den Markt bei Kunden aus dem Mittelstand und dem öffentlichen Sektor.",
          en: "The environment is rather English-speaking, especially at hyperscalers and international consultancies; a B1 or B2 level in German widens the market with Mittelstand and public-sector clients.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "En informatique, une reconnaissance formelle du diplôme n'est le plus souvent pas exigée pour travailler en Allemagne. Un diplôme ou une expérience solides facilitent la Carte bleue européenne ; nous évaluons votre profil, vos diplômes et votre expérience.",
          de: "In der Informatik ist eine formelle Anerkennung des Abschlusses für die Arbeit in Deutschland meist nicht erforderlich. Ein solider Abschluss oder solide Erfahrung erleichtern die Blaue Karte EU; wir bewerten Ihr Profil, Ihre Abschlüsse und Ihre Erfahrung.",
          en: "In IT, formal recognition of the diploma is most often not required to work in Germany. A solid degree or experience facilitates the EU Blue Card; we assess your profile, your qualifications and your experience.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "La Carte bleue européenne 2025 demande un salaire brut d'environ 48 300 € par an (seuil général) ou d'environ 43 760 € par an pour les métiers en tension comme l'informatique (source : cabinets juridiques d'immigration, 2025). Les spécialistes IT sans diplôme universitaire peuvent l'obtenir avec au moins 3 ans d'expérience comparable et une offre atteignant le seuil réduit. La Chancenkarte (carte d'opportunité) permet de venir chercher un emploi qualifié jusqu'à un an. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Blaue Karte EU 2025 verlangt ein Bruttogehalt von etwa 48.300 € pro Jahr (allgemeiner Schwellenwert) oder etwa 43.760 € pro Jahr für Mangelberufe wie die Informatik (Quelle: Kanzleien für Einwanderungsrecht, 2025). IT-Spezialisten ohne Hochschulabschluss können sie mit mindestens 3 Jahren vergleichbarer Erfahrung und einem Angebot erhalten, das den reduzierten Schwellenwert erreicht. Die Chancenkarte erlaubt es, bis zu einem Jahr zur Suche einer qualifizierten Beschäftigung nach Deutschland zu kommen. Wir prüfen Ihre Eignung und erstellen die Unterlagen gemeinsam mit Ihnen.",
          en: "The 2025 EU Blue Card requires a gross salary of around 48,300 € per year (general threshold) or around 43,760 € per year for shortage occupations such as IT (source: immigration law firms, 2025). IT specialists without a university degree can obtain it with at least 3 years of comparable experience and an offer reaching the reduced threshold. The Chancenkarte (opportunity card) allows you to come and look for qualified employment for up to one year. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie in Deutsch bis zum nützlichen Niveau aus, stellen Ihr Profil bei deutschen Arbeitgebern vorteilhaft dar, bereiten die Visumsunterlagen vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le cloud est-il vraiment un secteur en pénurie ?",
          de: "Ist die Cloud wirklich ein Mangelsektor?",
          en: "Is cloud really a shortage sector?",
        },
        a: {
          fr: "Oui : c'est le deuxième plus gros goulet d'étranglement après SAP, et le déficit pourrait atteindre environ 200 000 postes d'ici 2030 (source : Bitkom, eco, 2025).",
          de: "Ja: Es ist der zweitgrößte Engpass nach SAP, und die Lücke könnte bis 2030 etwa 200.000 Stellen erreichen (Quelle: Bitkom, eco, 2025).",
          en: "Yes: it is the second biggest bottleneck after SAP, and the gap could reach around 200,000 positions by 2030 (source: Bitkom, eco, 2025).",
        },
      },
      {
        q: {
          fr: "Quelle est la différence de salaire entre architecte et ingénieur cloud ?",
          de: "Was ist der Gehaltsunterschied zwischen Cloud Architect und Engineer?",
          en: "What is the salary difference between cloud architect and engineer?",
        },
        a: {
          fr: "Les deux sont proches : la médiane du Cloud Architect est d'environ 5 848 €/mois et celle du Cloud Engineer d'environ 6 087 €/mois, avec un senior pouvant atteindre environ 8 300 €/mois (indicatif).",
          de: "Beide liegen nahe beieinander: Der Median des Cloud Architect beträgt etwa 5.848 €/Monat und der des Cloud Engineer etwa 6.087 €/Monat, wobei ein Senior bis zu etwa 8.300 €/Monat erreichen kann (Richtwert).",
          en: "Both are close: the Cloud Architect median is around 5,848 €/month and the Cloud Engineer around 6,087 €/month, with a senior reaching up to around 8,300 €/month (indicative).",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
