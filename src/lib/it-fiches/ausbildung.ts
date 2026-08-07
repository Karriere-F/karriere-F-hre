// Ausbildung-path IT fiches (train in Germany). Populated from verified public
// German data; see it-fiche-types.ts for the shape and SALARY_NOTE.

import type { ItFiche } from "../it-fiche-types";
import { SALARY_NOTE } from "../it-fiche-types";

export const IT_FICHES_AUSBILDUNG: Record<string, ItFiche> = {
  "fachinformatiker-systemintegration": {
    slug: "fachinformatiker-systemintegration",
    title: {
      fr: "Fachinformatiker Systemintegration : Ausbildung en Allemagne",
      de: "Fachinformatiker Systemintegration: Ausbildung in Deutschland",
      en: "Fachinformatiker Systemintegration: Ausbildung in Germany",
    },
    intro: {
      fr: "Un métier technique solide et très recherché, accessible par une formation en alternance qui vous ouvre les portes de l'informatique allemande.",
      de: "Ein solider, stark gefragter technischer Beruf, zugänglich über eine duale Ausbildung, die Ihnen die Türen zur deutschen IT öffnet.",
      en: "A solid, highly sought technical profession, reached through a dual training that opens the doors of German IT.",
    },
    image: "fachinformatiker-systemintegration",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Fachinformatiker en intégration de systèmes installe, configure et maintient les systèmes informatiques, les réseaux, les serveurs, le cloud et l'infrastructure. Il assure aussi le support aux utilisateurs et l'administration au quotidien.",
          de: "Der Fachinformatiker Systemintegration installiert, konfiguriert und wartet IT-Systeme, Netzwerke, Server, Cloud und Infrastruktur. Er übernimmt zudem den Anwendersupport und die tägliche Administration.",
          en: "The Fachinformatiker for systems integration installs, configures and maintains IT systems, networks, servers, cloud and infrastructure. They also handle user support and day-to-day administration.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, la rémunération minimale 2025 est d'environ 682 € (1re année), 805 € (2e) et 921 € (3e) par mois ; dans l'industrie sous convention, elle atteint environ 1 050 à 1 200 €. Après le diplôme, le salaire d'entrée se situe autour de 2 800 à 3 300 € brut par mois (petit IT-Systemhaus 2 500 à 2 800 €, grande industrie 3 200 à 3 500 €), et dépasse 3 000 à 4 000 € avec l'expérience (source : Gehalt.de, Bundesagentur für Arbeit, 2025).",
          de: "Während der Ausbildung liegt die Mindestvergütung 2025 bei etwa 682 € (1. Jahr), 805 € (2.) und 921 € (3.) pro Monat; in der tarifgebundenen Industrie erreicht sie rund 1.050 bis 1.200 €. Nach dem Abschluss liegt das Einstiegsgehalt bei etwa 2.800 bis 3.300 € brutto pro Monat (kleines IT-Systemhaus 2.500 bis 2.800 €, große Industrie 3.200 bis 3.500 €) und steigt mit Erfahrung auf über 3.000 bis 4.000 € (Quelle: Gehalt.de, Bundesagentur für Arbeit, 2025).",
          en: "During the Ausbildung, the 2025 minimum pay is about 682 € (year 1), 805 € (year 2) and 921 € (year 3) per month; tariff-bound industry employers reach roughly 1,050 to 1,200 €. After the diploma, entry pay is around 2,800 to 3,300 € gross per month (small IT-Systemhaus 2,500 to 2,800 €, large industry 3,200 to 3,500 €), rising above 3,000 to 4,000 € with experience (source: Gehalt.de, Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance entre l'entreprise et la Berufsschule, réductible à 2,5 ans avec une qualification préalable. Elle se conclut par l'examen final de la chambre de commerce et d'industrie (IHK).",
          de: "Die duale Ausbildung im Betrieb und in der Berufsschule dauert 3 Jahre, bei Vorqualifikation auf 2,5 Jahre verkürzbar. Sie endet mit der Abschlussprüfung der Industrie- und Handelskammer (IHK).",
          en: "The dual training in the company and the Berufsschule lasts 3 years, reducible to 2.5 years with a prior qualification. It ends with the final exam of the Chamber of Industry and Commerce (IHK).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les sociétés de services et d'intégration informatiques (T-Systems, Bechtle, Cancom), le Mittelstand, le secteur public et les hôpitaux recrutent régulièrement.",
          de: "IT-Dienstleister und Systemintegratoren (T-Systems, Bechtle, Cancom), der Mittelstand, der öffentliche Sektor und Krankenhäuser stellen regelmäßig ein.",
          en: "IT service companies and integrators (T-Systems, Bechtle, Cancom), the Mittelstand, the public sector and hospitals hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très élevés et stables : il s'agit d'un métier en pénurie structurelle en Allemagne (source : Bitkom, 2025).",
          de: "Die Perspektiven sind sehr hoch und stabil: Es handelt sich um einen Mangelberuf mit strukturellem Fachkräftemangel in Deutschland (Quelle: Bitkom, 2025).",
          en: "Prospects are very high and stable: this is a core shortage occupation in Germany (source: Bitkom, 2025).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous spécialiser (réseaux, cloud, sécurité), devenir administrateur informatique ou chef d'équipe, ou poursuivre par une qualification supérieure (Fachwirt, études).",
          de: "Sie können sich spezialisieren (Netzwerke, Cloud, Sicherheit), IT-Administrator oder Teamleiter werden oder eine höhere Qualifikation anschließen (Fachwirt, Studium).",
          en: "You can specialise (networks, cloud, security), become an IT administrator or team lead, or continue with a further qualification (Fachwirt, studies).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'entreprise se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Betrieb finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau darauf bereiten wir Sie in unserer Sprachausbildung vor.",
          en: "The vocational school, the exam and the company all operate in German. Level B2 is the standard for success, and it is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "L'accès se fait par un contrat d'Ausbildung signé avec une entreprise allemande ; le diplôme IHK est un titre reconnu dans toute l'Allemagne. Aucune équivalence préalable n'est nécessaire puisque la formation se déroule en Allemagne.",
          de: "Der Zugang erfolgt über einen Ausbildungsvertrag mit einem deutschen Betrieb; der IHK-Abschluss ist ein bundesweit anerkannter Titel. Eine vorherige Gleichwertigkeit ist nicht nötig, da die Ausbildung in Deutschland stattfindet.",
          en: "Access is through an Ausbildung contract signed with a German company; the IHK diploma is a title recognised throughout Germany. No prior equivalence is needed since the training takes place in Germany.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten.",
          en: "Entry is with the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled-worker permit to work in Germany.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie im Deutschen bis zum erforderlichen Niveau aus, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle est la différence avec l'Anwendungsentwicklung ?",
          de: "Was ist der Unterschied zur Anwendungsentwicklung?",
          en: "What is the difference from Anwendungsentwicklung?",
        },
        a: {
          fr: "L'intégration de systèmes porte sur les systèmes, réseaux et infrastructures, tandis que l'Anwendungsentwicklung se concentre sur le développement de logiciels.",
          de: "Die Systemintegration befasst sich mit Systemen, Netzwerken und Infrastruktur, während die Anwendungsentwicklung auf die Softwareentwicklung ausgerichtet ist.",
          en: "Systems integration deals with systems, networks and infrastructure, whereas Anwendungsentwicklung focuses on software development.",
        },
      },
      {
        q: {
          fr: "Le métier est-il concret et pratique ?",
          de: "Ist der Beruf praktisch und handfest?",
          en: "Is the job hands-on and practical?",
        },
        a: {
          fr: "Oui, vous travaillez directement sur l'infrastructure, les serveurs et les réseaux, avec une forte dimension technique et pratique.",
          de: "Ja, Sie arbeiten unmittelbar an Infrastruktur, Servern und Netzwerken, mit einer stark technischen und praktischen Ausrichtung.",
          en: "Yes, you work directly on infrastructure, servers and networks, with a strongly technical and hands-on dimension.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "it-system-elektroniker": {
    slug: "it-system-elektroniker",
    title: {
      fr: "IT-System-Elektroniker : Ausbildung en Allemagne",
      de: "IT-System-Elektroniker: Ausbildung in Deutschland",
      en: "IT-System-Elektroniker: Ausbildung in Germany",
    },
    intro: {
      fr: "Le métier informatique le plus manuel et le plus proche du matériel, pour celles et ceux qui aiment construire et mettre en service de leurs mains.",
      de: "Der handwerklichste und hardwarenächste IT-Beruf, für alle, die gern mit den eigenen Händen aufbauen und in Betrieb nehmen.",
      en: "The most hands-on, hardware-focused IT profession, for those who like to build and commission with their own hands.",
    },
    image: "it-system-elektroniker",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'IT-System-Elektroniker est le métier informatique le plus orienté matériel et le plus manuel : il installe, câble et met en service les systèmes informatiques et de communication, les réseaux et l'alimentation électrique.",
          de: "Der IT-System-Elektroniker ist der hardwarenächste und handwerklichste IT-Beruf: Er installiert, verkabelt und nimmt IT- und Kommunikationssysteme, Netzwerke und die Stromversorgung in Betrieb.",
          en: "The IT-System-Elektroniker is the most hardware-oriented and hands-on IT profession: they install, wire and commission IT and communication systems, networks and power supply.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung dans la métallurgie et l'électrotechnique, la rémunération est d'environ 1 258 / 1 312 / 1 378 € par mois (source : Bundesagentur für Arbeit, 2025). Après le diplôme, le salaire d'entrée va d'environ 2 200 € (sans convention) à 2 800 € (avec convention), atteint environ 3 200 à 3 800 € avec l'expérience, la médiane toutes populations confondues se situant autour de 4 011 € par mois (source : Gehalt.de, 2025).",
          de: "Während der Ausbildung in der Metall- und Elektroindustrie beträgt die Vergütung etwa 1.258 / 1.312 / 1.378 € pro Monat (Quelle: Bundesagentur für Arbeit, 2025). Nach dem Abschluss reicht das Einstiegsgehalt von rund 2.200 € (ohne Tarif) bis 2.800 € (mit Tarif), erreicht mit Erfahrung etwa 3.200 bis 3.800 €, wobei der Median über alle Populationen bei rund 4.011 € pro Monat liegt (Quelle: Gehalt.de, 2025).",
          en: "During the Ausbildung in the metal and electrical industry, pay is about 1,258 / 1,312 / 1,378 € per month (source: Federal Employment Agency, 2025). After the diploma, entry pay ranges from about 2,200 € (no tariff) to 2,800 € (with tariff), reaches roughly 3,200 to 3,800 € with experience, and the cross-population median sits around 4,011 € per month (source: Gehalt.de, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance entre l'entreprise et la Berufsschule. Elle se conclut par l'examen final de la chambre de commerce et d'industrie (IHK).",
          de: "Die duale Ausbildung im Betrieb und in der Berufsschule dauert 3 Jahre. Sie endet mit der Abschlussprüfung der Industrie- und Handelskammer (IHK).",
          en: "The dual training in the company and the Berufsschule lasts 3 years. It ends with the final exam of the Chamber of Industry and Commerce (IHK).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les acteurs des télécoms et de l'infrastructure réseau (Deutsche Telekom en tête), les entreprises informatiques et électriques ainsi que l'industrie recrutent activement.",
          de: "Telekommunikations- und Netzinfrastrukturanbieter (allen voran die Deutsche Telekom), IT- und Elektrobetriebe sowie die Industrie stellen aktiv ein.",
          en: "Telecom and network infrastructure players (Deutsche Telekom foremost), IT and electrical firms as well as industry recruit actively.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont élevés, portés par le déploiement continu des infrastructures de réseau et de communication.",
          de: "Die Perspektiven sind hoch, getragen vom fortlaufenden Ausbau der Netz- und Kommunikationsinfrastruktur.",
          en: "Prospects are high, driven by the ongoing buildout of network and communication infrastructure.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous spécialiser, obtenir un titre de Techniker ou de Meister, ou évoluer vers l'administration des systèmes.",
          de: "Sie können sich spezialisieren, einen Techniker- oder Meistertitel erwerben oder sich in Richtung Systemadministration weiterentwickeln.",
          en: "You can specialise, earn a Techniker or Meister qualification, or move toward systems administration.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'entreprise se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Betrieb finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau darauf bereiten wir Sie in unserer Sprachausbildung vor.",
          en: "The vocational school, the exam and the company all operate in German. Level B2 is the standard for success, and it is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "L'accès se fait par un contrat d'Ausbildung signé avec une entreprise allemande ; le diplôme IHK est un titre reconnu dans toute l'Allemagne. Aucune équivalence préalable n'est nécessaire puisque la formation se déroule en Allemagne.",
          de: "Der Zugang erfolgt über einen Ausbildungsvertrag mit einem deutschen Betrieb; der IHK-Abschluss ist ein bundesweit anerkannter Titel. Eine vorherige Gleichwertigkeit ist nicht nötig, da die Ausbildung in Deutschland stattfindet.",
          en: "Access is through an Ausbildung contract signed with a German company; the IHK diploma is a title recognised throughout Germany. No prior equivalence is needed since the training takes place in Germany.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten.",
          en: "Entry is with the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled-worker permit to work in Germany.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie im Deutschen bis zum erforderlichen Niveau aus, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce plus orienté matériel que le Fachinformatiker ?",
          de: "Ist der Beruf hardwarelastiger als der Fachinformatiker?",
          en: "Is it more hardware-focused than the Fachinformatiker?",
        },
        a: {
          fr: "Oui, c'est le métier informatique le plus proche du matériel, avec beaucoup d'installation, de câblage et de mise en service sur le terrain.",
          de: "Ja, es ist der hardwarenächste IT-Beruf, mit viel Installation, Verkabelung und Inbetriebnahme vor Ort.",
          en: "Yes, it is the most hardware-focused IT profession, with plenty of on-site installation, wiring and commissioning.",
        },
      },
      {
        q: {
          fr: "Puis-je passer un Meister ensuite ?",
          de: "Kann ich danach einen Meister machen?",
          en: "Can I pursue a Meister afterwards?",
        },
        a: {
          fr: "Oui, après quelques années d'expérience vous pouvez viser un Techniker ou un Meister, qui ouvrent des postes d'encadrement et de responsabilité.",
          de: "Ja, nach einigen Jahren Erfahrung können Sie einen Techniker oder Meister anstreben, der Führungs- und Verantwortungspositionen eröffnet.",
          en: "Yes, after a few years of experience you can aim for a Techniker or Meister, which open leadership and responsibility roles.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "kaufmann-digitalisierungsmanagement": {
    slug: "kaufmann-digitalisierungsmanagement",
    title: {
      fr: "Kaufmann für Digitalisierungsmanagement : Ausbildung en Allemagne",
      de: "Kaufmann für Digitalisierungsmanagement: Ausbildung in Deutschland",
      en: "Kaufmann für Digitalisierungsmanagement: Ausbildung in Germany",
    },
    intro: {
      fr: "Le métier qui relie l'informatique et le business, pour celles et ceux qui veulent piloter la transformation numérique au contact des clients.",
      de: "Der Beruf, der IT und Business verbindet, für alle, die die digitale Transformation im Kundenkontakt gestalten wollen.",
      en: "The profession that bridges IT and business, for those who want to steer digital transformation in contact with customers.",
    },
    image: "kaufmann-digitalisierungsmanagement",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Kaufmann für Digitalisierungsmanagement est le métier commercial et de gestion de l'informatique (successeur de l'IT-System-Kaufmann) : il se place entre l'informatique et le business, planifie et pilote les projets de digitalisation et les solutions informatiques avec les clients et les équipes internes.",
          de: "Der Kaufmann für Digitalisierungsmanagement ist der kaufmännische und betriebswirtschaftliche IT-Beruf (Nachfolger des IT-System-Kaufmanns): Er steht zwischen IT und Business, plant und steuert Digitalisierungsprojekte und IT-Lösungen mit Kunden und internen Teams.",
          en: "The Kaufmann für Digitalisierungsmanagement is the commercial and business-IT profession (successor to the IT-System-Kaufmann): they sit between IT and business, planning and managing digitalisation projects and IT solutions with customers and internal teams.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, la rémunération est d'environ 1 258 / 1 312 / 1 383 € par mois (source : aubi-plus.de, 2025). Après le diplôme, le salaire d'entrée se situe autour de 2 500 à 3 200 € par mois, la médiane toutes populations confondues étant d'environ 4 820 € par mois (source : Gehalt.de, 2025).",
          de: "Während der Ausbildung beträgt die Vergütung etwa 1.258 / 1.312 / 1.383 € pro Monat (Quelle: aubi-plus.de, 2025). Nach dem Abschluss liegt das Einstiegsgehalt bei rund 2.500 bis 3.200 € pro Monat, der Median über alle Populationen bei etwa 4.820 € pro Monat (Quelle: Gehalt.de, 2025).",
          en: "During the Ausbildung, pay is about 1,258 / 1,312 / 1,383 € per month (source: aubi-plus.de, 2025). After the diploma, entry pay is around 2,500 to 3,200 € per month, with a cross-population median of about 4,820 € per month (source: Gehalt.de, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance entre l'entreprise et la Berufsschule. Elle se conclut par l'examen final de la chambre de commerce et d'industrie (IHK).",
          de: "Die duale Ausbildung im Betrieb und in der Berufsschule dauert 3 Jahre. Sie endet mit der Abschlussprüfung der Industrie- und Handelskammer (IHK).",
          en: "The dual training in the company and the Berufsschule lasts 3 years. It ends with the final exam of the Chamber of Industry and Commerce (IHK).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises qui digitalisent leurs processus, les prestataires de services informatiques, l'industrie et le commerce recrutent régulièrement.",
          de: "Unternehmen, die ihre Prozesse digitalisieren, IT-Dienstleister sowie Industrie und Handel stellen regelmäßig ein.",
          en: "Companies digitalising their processes, IT service providers, industry and commerce hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont bons et en croissance, portés par la digitalisation continue des entreprises.",
          de: "Die Perspektiven sind gut und wachsend, getragen von der fortschreitenden Digitalisierung der Unternehmen.",
          en: "Prospects are good and growing, driven by the ongoing digitalisation of companies.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers la gestion de projet, le conseil informatique, une qualification de Fachwirt ou des études.",
          de: "Sie können sich in Richtung Projektmanagement, IT-Beratung, eine Fachwirt-Qualifikation oder ein Studium weiterentwickeln.",
          en: "You can move toward project management, IT consulting, a Fachwirt qualification or studies.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "C'est un métier commercial au contact des clients et des parties prenantes, si bien que le niveau B2 est indispensable : les exigences linguistiques y sont plus élevées que dans les métiers purement techniques. C'est ce niveau que nous visons dans notre formation.",
          de: "Es ist ein kaufmännischer Beruf im Kontakt mit Kunden und Stakeholdern, sodass das Niveau B2 unerlässlich ist: Die sprachlichen Anforderungen sind höher als in rein technischen Berufen. Genau dieses Niveau streben wir in unserer Ausbildung an.",
          en: "It is a commercial role in contact with customers and stakeholders, so level B2 is essential: the language demands are higher than in the purely technical roles. This is the level we aim for in our training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "L'accès se fait par un contrat d'Ausbildung signé avec une entreprise allemande ; le diplôme IHK est un titre reconnu dans toute l'Allemagne. Aucune équivalence préalable n'est nécessaire puisque la formation se déroule en Allemagne.",
          de: "Der Zugang erfolgt über einen Ausbildungsvertrag mit einem deutschen Betrieb; der IHK-Abschluss ist ein bundesweit anerkannter Titel. Eine vorherige Gleichwertigkeit ist nicht nötig, da die Ausbildung in Deutschland stattfindet.",
          en: "Access is through an Ausbildung contract signed with a German company; the IHK diploma is a title recognised throughout Germany. No prior equivalence is needed since the training takes place in Germany.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten.",
          en: "Entry is with the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled-worker permit to work in Germany.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie im Deutschen bis zum erforderlichen Niveau aus, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier technique ou commercial ?",
          de: "Ist es ein technischer oder kaufmännischer Beruf?",
          en: "Is it a technical or a commercial role?",
        },
        a: {
          fr: "C'est un métier commercial et de gestion (business IT) : vous pilotez des projets de digitalisation plutôt que d'écrire du code.",
          de: "Es ist ein kaufmännischer und betriebswirtschaftlicher Beruf (Business IT): Sie steuern Digitalisierungsprojekte, statt Code zu schreiben.",
          en: "It is a commercial and management role (business IT): you steer digitalisation projects rather than writing code.",
        },
      },
      {
        q: {
          fr: "Faut-il savoir programmer ?",
          de: "Muss ich programmieren können?",
          en: "Do I need to know how to code?",
        },
        a: {
          fr: "Non, la programmation n'est pas requise ; l'accent porte sur le business, la gestion de projet et les solutions informatiques.",
          de: "Nein, Programmierung ist nicht erforderlich; der Schwerpunkt liegt auf Business, Projektmanagement und IT-Lösungen.",
          en: "No, coding is not required; the focus is on business, project management and IT solutions.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "matse": {
    slug: "matse",
    title: {
      fr: "MATSE (développeur logiciel mathématique et technique) : Ausbildung en Allemagne",
      de: "MATSE (Mathematisch-technischer Softwareentwickler): Ausbildung in Deutschland",
      en: "MATSE (mathematical-technical software developer): Ausbildung in Germany",
    },
    intro: {
      fr: "Le métier le plus exigeant et le mieux rémunéré des Ausbildung informatiques, pour les esprits qui allient mathématiques et développement logiciel.",
      de: "Der anspruchsvollste und bestbezahlte der IT-Ausbildungsberufe, für Köpfe, die Mathematik und Softwareentwicklung verbinden.",
      en: "The most demanding and best-paid of the IT Ausbildung professions, for minds that combine mathematics and software development.",
    },
    image: "matse",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le MATSE fait du développement logiciel à forte composante mathématique, souvent formé dans les universités et instituts de recherche (par exemple Fraunhofer), fréquemment combiné à un Bachelor parallèle en Scientific Programming. Il travaille sur le calcul scientifique, la simulation et les données.",
          de: "Der MATSE betreibt mathematisch geprägte Softwareentwicklung, oft ausgebildet an Universitäten und Forschungsinstituten (zum Beispiel Fraunhofer), häufig kombiniert mit einem parallelen Bachelor Scientific Programming. Er arbeitet an wissenschaftlichem Rechnen, Simulation und Daten.",
          en: "The MATSE does maths-heavy software development, often trained at universities and research institutes (for example Fraunhofer), frequently combined with a parallel Bachelor in Scientific Programming. They work on scientific computing, simulation and data.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, la rémunération est d'environ 980 à 1 200 € par mois (selon l'institution et la convention). Après le diplôme, la fourchette est large, d'environ 2 825 à 4 300 € par mois (souvent autour de 3 800 € vu la charge mathématique et logicielle), la médiane toutes populations confondues étant d'environ 5 630 € par mois, la plus élevée des Ausbildung informatiques (source : Gehalt.de, 2025).",
          de: "Während der Ausbildung beträgt die Vergütung etwa 980 bis 1.200 € pro Monat (je nach Institution und Tarif). Nach dem Abschluss ist die Spanne breit, etwa 2.825 bis 4.300 € pro Monat (oft um 3.800 € angesichts der mathematischen und softwaretechnischen Inhalte), der Median über alle Populationen liegt bei rund 5.630 € pro Monat, dem höchsten der IT-Ausbildungsberufe (Quelle: Gehalt.de, 2025).",
          en: "During the Ausbildung, pay is about 980 to 1,200 € per month (depending on the institution and tariff). After the diploma, the range is wide, about 2,825 to 4,300 € per month (often around 3,800 € given the maths and software content), with a cross-population median of about 5,630 € per month, the highest of the IT Ausbildung professions (source: Gehalt.de, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, souvent avec un Bachelor mené en parallèle. Elle se conclut par l'examen final de la chambre de commerce et d'industrie (IHK).",
          de: "Die Ausbildung dauert 3 Jahre, oft mit einem parallel geführten Bachelor. Sie endet mit der Abschlussprüfung der Industrie- und Handelskammer (IHK).",
          en: "The training lasts 3 years, often with a Bachelor pursued in parallel. It ends with the final exam of the Chamber of Industry and Commerce (IHK).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les instituts de recherche (Fraunhofer), les universités, les employeurs techniques et scientifiques, la finance et l'industrie à forte intensité de données recrutent ce profil.",
          de: "Forschungsinstitute (Fraunhofer), Universitäten, technische und wissenschaftliche Arbeitgeber, die Finanzbranche und datenintensive Industrie stellen dieses Profil ein.",
          en: "Research institutes (Fraunhofer), universities, technical and scientific employers, finance and data-heavy industry hire this profile.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont élevés mais de niche : la barrière mathématique maintient l'offre de candidats faible.",
          de: "Die Perspektiven sind hoch, aber nischig: Die mathematische Hürde hält das Angebot an Bewerbern gering.",
          en: "Prospects are high but niche: the maths barrier keeps the supply of candidates low.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers le calcul scientifique, la data science, la recherche et développement, ou poursuivre vers des études.",
          de: "Sie können sich in Richtung wissenschaftliches Rechnen, Data Science, Forschung und Entwicklung weiterentwickeln oder ein Studium anschließen.",
          en: "You can move toward scientific computing, data science, research and development, or continue into studies.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "C'est le plus exigeant sur le plan linguistique parmi ces métiers, vu la charge en mathématiques et en théorie logicielle ; le niveau B2 est fortement recommandé. C'est ce niveau que nous visons dans notre formation.",
          de: "Es ist der sprachlich anspruchsvollste dieser Berufe, angesichts der mathematischen und softwaretheoretischen Inhalte; das Niveau B2 wird dringend empfohlen. Genau dieses Niveau streben wir in unserer Ausbildung an.",
          en: "It is the most linguistically demanding of these professions, given the maths and software theory; level B2 is strongly recommended. This is the level we aim for in our training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "L'accès se fait par un contrat d'Ausbildung signé avec un institut ou une entreprise en Allemagne ; le diplôme IHK, souvent doublé d'un Bachelor, est reconnu dans tout le pays. Aucune équivalence préalable n'est nécessaire puisque la formation se déroule en Allemagne.",
          de: "Der Zugang erfolgt über einen Ausbildungsvertrag mit einem Institut oder Betrieb in Deutschland; der IHK-Abschluss, oft ergänzt durch einen Bachelor, ist bundesweit anerkannt. Eine vorherige Gleichwertigkeit ist nicht nötig, da die Ausbildung in Deutschland stattfindet.",
          en: "Access is through an Ausbildung contract signed with an institute or company in Germany; the IHK diploma, often paired with a Bachelor, is recognised nationwide. No prior equivalence is needed since the training takes place in Germany.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten.",
          en: "Entry is with the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled-worker permit to work in Germany.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'institut ou l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bilden Sie im Deutschen bis zum erforderlichen Niveau aus, finden das Institut oder den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the institute or company and the Ausbildung contract, prepare the visa file and support you all the way to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il de solides bases en mathématiques ?",
          de: "Brauche ich starke Mathematikkenntnisse?",
          en: "Do I need strong maths skills?",
        },
        a: {
          fr: "Oui, de solides bases en mathématiques sont indispensables : c'est le coeur du métier et la principale barrière à l'entrée.",
          de: "Ja, starke Mathematikkenntnisse sind unerlässlich: Sie sind der Kern des Berufs und die wichtigste Zugangshürde.",
          en: "Yes, strong maths skills are essential: they are the core of the profession and the main barrier to entry.",
        },
      },
      {
        q: {
          fr: "La formation est-elle combinée à un diplôme universitaire ?",
          de: "Wird die Ausbildung mit einem Studium kombiniert?",
          en: "Is the training combined with a degree?",
        },
        a: {
          fr: "Souvent oui : elle est fréquemment menée en parallèle d'un Bachelor en Scientific Programming, ce qui renforce sa valeur.",
          de: "Häufig ja: Sie wird oft parallel zu einem Bachelor Scientific Programming geführt, was ihren Wert steigert.",
          en: "Often yes: it is frequently pursued alongside a Bachelor in Scientific Programming, which strengthens its value.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
