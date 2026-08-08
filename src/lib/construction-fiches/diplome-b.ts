import type { ConstructionFiche } from "../construction-fiche-types";
import { SALARY_NOTE } from "../construction-fiche-types";

export const CONSTR_FICHES_DIPLOME_B: Record<string, ConstructionFiche> = {
  "couvreur": {
    slug: "couvreur",
    image: "couvreur",
    title: {
      fr: "Couvreur",
      de: "Dachdecker",
      en: "Roofer",
    },
    intro: {
      fr: "Votre savoir-faire de couvreur est recherché en Allemagne, où les toitures et l'étanchéité demandent des professionnels qualifiés.",
      de: "Ihr Können als Dachdecker ist in Deutschland gefragt, wo Dächer und Abdichtungen qualifizierte Fachkräfte erfordern.",
      en: "Your roofing skills are in demand in Germany, where roofs and waterproofing call for qualified professionals.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le couvreur pose et rénove les toitures, assure l'étanchéité, la zinguerie et l'isolation du toit, et intervient parfois sur les installations solaires.",
          de: "Der Dachdecker verlegt und saniert Dächer, sorgt für Abdichtung, Klempnerarbeiten und Dachdämmung und arbeitet mitunter an Solaranlagen.",
          en: "The roofer installs and renovates roofs, handles waterproofing, sheet-metal work and roof insulation, and sometimes works on solar installations.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 2 800 à 3 500 €/mois selon la source (moyenne environ 2 780 € chez un portail, médiane environ 3 493 € chez un autre) (source : gehaltsvergleich.com, gehalt.de, 2026). Le minimum de branche pour un compagnon (Geselle) est d'environ 16,60 €/h en 2026, le salaire de référence de la convention montant vers 23,28 €/h, un plancher garanti et un vrai argument.",
          de: "Etwa 2.800 bis 3.500 €/Monat je nach Quelle (Durchschnitt rund 2.780 € bei einem Portal, Median rund 3.493 € bei einem anderen) (Quelle: gehaltsvergleich.com, gehalt.de, 2026). Der Branchenmindestlohn für einen Gesellen liegt 2026 bei rund 16,60 €/h, der tarifliche Ecklohn steigt Richtung 23,28 €/h, eine garantierte Untergrenze und ein echtes Argument.",
          en: "About 2,800 to 3,500 €/month depending on the source (average around 2,780 € on one portal, median around 3,493 € on another) (source: gehaltsvergleich.com, gehalt.de, 2026). The sector minimum for a journeyman (Geselle) is about 16.60 €/h in 2026, with the collective reference wage rising toward 23.28 €/h, a guaranteed floor and a real selling point.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises artisanales de couverture (Innungsbetriebe) recrutent dans toute l'Allemagne.",
          de: "Handwerkliche Dachdeckerbetriebe (Innungsbetriebe) stellen in ganz Deutschland ein.",
          en: "Craft roofing firms (Innungsbetriebe) hire across the whole of Germany.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Le métier de couvreur est explicitement classé métier en pénurie pour 2025 par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2025).",
          de: "Der Beruf des Dachdeckers wird von der Bundesagentur für Arbeit ausdrücklich als Mangelberuf für 2025 eingestuft (Quelle: Bundesagentur für Arbeit, 2025).",
          en: "Roofing is explicitly classified as a shortage occupation for 2025 by the Federal Employment Agency (source: Bundesagentur für Arbeit, 2025).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe, puis vers le titre de maître (Meister), et vous spécialiser dans la façade et l'étanchéité.",
          de: "Sie können sich zum Vorarbeiter, dann zum Meister weiterentwickeln und sich auf Fassade und Abdichtung spezialisieren.",
          en: "You can move up to team leader, then to master craftsman (Meister), and specialise in facade work and waterproofing.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitsvorschriften, Anweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety rules, instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer notwendig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are qualified craft occupations. The master title (Meister) is only required to set up your own business, not to be an employee. For the skilled worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is required; we have it assessed and start the procedure together with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit bei gleichzeitigem Abschluss der Anerkennung vor Ort erlaubt (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows entry and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the application file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail se fait-il en hauteur et par tous les temps ?",
          de: "Wird in der Höhe und bei jedem Wetter gearbeitet?",
          en: "Is the work done at height and in all weather?",
        },
        a: {
          fr: "Oui, le couvreur travaille en hauteur et souvent en extérieur, avec des équipements et des règles de sécurité stricts.",
          de: "Ja, der Dachdecker arbeitet in der Höhe und oft im Freien, mit Ausrüstung und strengen Sicherheitsregeln.",
          en: "Yes, the roofer works at height and often outdoors, with equipment and strict safety rules.",
        },
      },
      {
        q: {
          fr: "Faut-il le Meister pour être salarié ?",
          de: "Braucht man den Meister, um angestellt zu sein?",
          en: "Do you need the Meister to be an employee?",
        },
        a: {
          fr: "Non, le titre de maître n'est exigé que pour s'installer à son compte, pas pour travailler comme salarié.",
          de: "Nein, der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung.",
          en: "No, the master title is only required to set up your own business, not to work as an employee.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "carreleur": {
    slug: "carreleur",
    image: "carreleur",
    title: {
      fr: "Carreleur",
      de: "Fliesenleger",
      en: "Tiler",
    },
    intro: {
      fr: "Votre maîtrise de la pose de carrelage a toute sa place en Allemagne, où le second oeuvre du bâtiment manque de bras qualifiés.",
      de: "Ihr Können im Fliesenlegen ist in Deutschland gefragt, wo dem Ausbau qualifizierte Fachkräfte fehlen.",
      en: "Your tiling expertise has a real place in Germany, where the building finishing trades are short of qualified hands.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le carreleur pose le carrelage et la faïence, prépare les supports, prend les mesures et réalise les revêtements de sol et de mur.",
          de: "Der Fliesenleger verlegt Boden- und Wandfliesen, bereitet die Untergründe vor, nimmt Maß und stellt Boden- und Wandbeläge her.",
          en: "The tiler lays floor and wall tiles, prepares the substrates, takes measurements and installs floor and wall coverings.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 2 800 à 3 700 €/mois (médiane environ 3 251 €, une source citant la Bundesagentur donne environ 3 365 €) (source : meingehalt.net, news.de citant la Bundesagentur, 2026). La rémunération suit la convention du bâtiment (Bauhauptgewerbe), avec un minimum d'ouvrier qualifié d'environ 17,34 €/h en 2026, un plancher garanti.",
          de: "Etwa 2.800 bis 3.700 €/Monat (Median rund 3.251 €, eine Quelle unter Berufung auf die Bundesagentur nennt rund 3.365 €) (Quelle: meingehalt.net, news.de unter Berufung auf die Bundesagentur, 2026). Die Vergütung folgt dem Bautarif (Bauhauptgewerbe), mit einem Facharbeitermindestlohn von rund 17,34 €/h im Jahr 2026, einer garantierten Untergrenze.",
          en: "About 2,800 to 3,700 €/month (median around 3,251 €, one source citing the Federal Employment Agency gives around 3,365 €) (source: meingehalt.net, news.de citing the Bundesagentur, 2026). Pay follows the construction agreement (Bauhauptgewerbe), with a skilled-worker minimum of about 17.34 €/h in 2026, a guaranteed floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises de carrelage et de second oeuvre (finition, Ausbau) recrutent régulièrement.",
          de: "Fliesenleger- und Ausbaubetriebe (Innenausbau) stellen regelmäßig ein.",
          en: "Tiling and finishing firms (interior fit-out, Ausbau) hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, au sein du cluster du bâtiment en tension.",
          de: "Die Perspektiven sind stark, innerhalb der angespannten Baubranche.",
          en: "Prospects are strong, within the tight construction cluster.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe (Vorarbeiter), puis vers le titre de maître (Meister) et chef de chantier.",
          de: "Sie können sich zum Vorarbeiter, dann zum Meister und Bauleiter weiterentwickeln.",
          en: "You can progress to team leader (Vorarbeiter), then to master craftsman (Meister) and site manager.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitsvorschriften, Anweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety rules, instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer notwendig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are qualified craft occupations. The master title (Meister) is only required to set up your own business, not to be an employee. For the skilled worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is required; we have it assessed and start the procedure together with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit bei gleichzeitigem Abschluss der Anerkennung vor Ort erlaubt (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows entry and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the application file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un travail de précision et physique ?",
          de: "Ist es eine präzise und körperliche Arbeit?",
          en: "Is it precise and physical work?",
        },
        a: {
          fr: "Oui, la pose de carrelage demande à la fois de la précision dans les mesures et les coupes et une bonne condition physique.",
          de: "Ja, das Fliesenlegen verlangt sowohl Präzision beim Messen und Schneiden als auch eine gute körperliche Verfassung.",
          en: "Yes, tiling calls for both precision in measuring and cutting and good physical fitness.",
        },
      },
      {
        q: {
          fr: "La rémunération suit-elle la convention du bâtiment ?",
          de: "Richtet sich die Vergütung nach dem Bautarif?",
          en: "Does pay follow the construction agreement?",
        },
        a: {
          fr: "Oui, la rémunération suit la convention du bâtiment (Bauhauptgewerbe), avec un minimum d'ouvrier qualifié garanti.",
          de: "Ja, die Vergütung folgt dem Bautarif (Bauhauptgewerbe), mit einem garantierten Facharbeitermindestlohn.",
          en: "Yes, pay follows the construction agreement (Bauhauptgewerbe), with a guaranteed skilled-worker minimum.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "peintre": {
    slug: "peintre",
    image: "peintre",
    title: {
      fr: "Peintre en bâtiment",
      de: "Maler und Lackierer",
      en: "Painter and decorator",
    },
    intro: {
      fr: "Votre métier de peintre en bâtiment ouvre de nombreuses portes en Allemagne, où les postes sont nombreux et l'artisanat en pénurie.",
      de: "Ihr Beruf als Maler und Lackierer öffnet in Deutschland viele Türen, wo es viele Stellen gibt und das Handwerk Fachkräfte sucht.",
      en: "Your trade as a painter and decorator opens many doors in Germany, where positions are plentiful and the crafts are short of workers.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le peintre en bâtiment réalise les peintures, enduits, revêtements, protections et façades, en neuf comme en rénovation.",
          de: "Der Maler und Lackierer führt Anstriche, Putze, Beschichtungen, Schutzarbeiten und Fassaden aus, im Neubau wie in der Sanierung.",
          en: "The painter and decorator carries out paintwork, plaster, coatings, protective treatments and facades, in both new build and renovation.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 2 500 à 3 250 €/mois selon la source (moyenne environ 2 503 € chez un portail, médiane environ 2 960 € chez un autre), c'est le plus bas des quatre métiers (source : gehaltsvergleich.com, meingehalt.net, 2026). Le minimum de branche pour un compagnon est d'environ 15,55 €/h en 2025 puis 16,13 €/h à partir de juillet 2026, un plancher garanti.",
          de: "Etwa 2.500 bis 3.250 €/Monat je nach Quelle (Durchschnitt rund 2.503 € bei einem Portal, Median rund 2.960 € bei einem anderen), das ist der niedrigste der vier Berufe (Quelle: gehaltsvergleich.com, meingehalt.net, 2026). Der Branchenmindestlohn für einen Gesellen liegt 2025 bei rund 15,55 €/h und ab Juli 2026 bei 16,13 €/h, einer garantierten Untergrenze.",
          en: "About 2,500 to 3,250 €/month depending on the source (average around 2,503 € on one portal, median around 2,960 € on another), the lowest of the four trades (source: gehaltsvergleich.com, meingehalt.net, 2026). The sector minimum for a journeyman is about 15.55 €/h in 2025, then 16.13 €/h from July 2026, a guaranteed floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises artisanales de peinture (Innungsbetriebe), la maintenance immobilière et la gestion de patrimoine recrutent.",
          de: "Handwerkliche Malerbetriebe (Innungsbetriebe), die Immobilienbewirtschaftung und die Hausverwaltung stellen ein.",
          en: "Craft painting firms (Innungsbetriebe), property maintenance and estate management are hiring.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides, au sein de la pénurie de l'artisanat, avec un large volume de postes.",
          de: "Die Perspektiven sind solide, angesichts des Fachkräftemangels im Handwerk und eines großen Stellenvolumens.",
          en: "Prospects are solid, within the shortage of craft workers, with a large volume of positions.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe, puis vers le titre de maître (Meister) et technicien.",
          de: "Sie können sich zum Vorarbeiter, dann zum Meister und Techniker weiterentwickeln.",
          en: "You can progress to team leader, then to master craftsman (Meister) and technician.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitsvorschriften, Anweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety rules, instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer notwendig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are qualified craft occupations. The master title (Meister) is only required to set up your own business, not to be an employee. For the skilled worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is required; we have it assessed and start the procedure together with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit bei gleichzeitigem Abschluss der Anerkennung vor Ort erlaubt (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows entry and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the application file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier couvre-t-il le neuf et la rénovation ?",
          de: "Umfasst der Beruf Neubau und Sanierung?",
          en: "Does the trade cover new build and renovation?",
        },
        a: {
          fr: "Oui, le peintre en bâtiment intervient aussi bien sur les constructions neuves que sur les chantiers de rénovation.",
          de: "Ja, der Maler und Lackierer arbeitet sowohl an Neubauten als auch an Sanierungsprojekten.",
          en: "Yes, the painter and decorator works on both new builds and renovation projects.",
        },
      },
      {
        q: {
          fr: "Est-ce un métier accessible avec un large volume de postes ?",
          de: "Ist es ein zugänglicher Beruf mit einem großen Stellenvolumen?",
          en: "Is it an accessible trade with a large volume of positions?",
        },
        a: {
          fr: "Oui, c'est un métier accessible et le volume de postes disponibles est large partout en Allemagne.",
          de: "Ja, es ist ein zugänglicher Beruf, und das Volumen verfügbarer Stellen ist überall in Deutschland groß.",
          en: "Yes, it is an accessible trade, and the volume of available positions is large across Germany.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "conducteur-engins": {
    slug: "conducteur-engins",
    image: "conducteur-engins",
    title: {
      fr: "Conducteur d'engins de chantier",
      de: "Baugeräteführer",
      en: "Construction machine operator",
    },
    intro: {
      fr: "Votre expérience de conducteur d'engins est très recherchée en Allemagne, portée par les grands chantiers d'infrastructure.",
      de: "Ihre Erfahrung als Baugeräteführer ist in Deutschland sehr gefragt, getragen von den großen Infrastrukturbaustellen.",
      en: "Your experience as a machine operator is in high demand in Germany, driven by major infrastructure projects.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le conducteur d'engins conduit des pelles, grues et engins de terrassement, entretient les machines et travaille sur les chantiers de terrassement et de génie civil.",
          de: "Der Baugeräteführer bedient Bagger, Krane und Erdbewegungsmaschinen, wartet die Geräte und arbeitet auf Erdbau- und Tiefbaustellen.",
          en: "The machine operator drives excavators, cranes and earthmoving machines, maintains the equipment and works on earthworks and civil engineering sites.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 3 000 à 3 900 €/mois (médiane environ 3 539 €), le mieux payé des quatre métiers (source : gehalt.de, 2026). La rémunération suit la convention du bâtiment, avec un minimum d'ouvrier qualifié d'environ 17,34 €/h en 2026, souvent dépassé pour les opérateurs qualifiés, un plancher garanti.",
          de: "Etwa 3.000 bis 3.900 €/Monat (Median rund 3.539 €), der bestbezahlte der vier Berufe (Quelle: gehalt.de, 2026). Die Vergütung folgt dem Bautarif, mit einem Facharbeitermindestlohn von rund 17,34 €/h im Jahr 2026, der bei qualifizierten Maschinisten oft überschritten wird, einer garantierten Untergrenze.",
          en: "About 3,000 to 3,900 €/month (median around 3,539 €), the best paid of the four trades (source: gehalt.de, 2026). Pay follows the construction agreement, with a skilled-worker minimum of about 17.34 €/h in 2026, often exceeded for qualified operators, a guaranteed floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les grands entrepreneurs de génie civil et de travaux publics recrutent, par exemple STRABAG, HOCHTIEF, Max Bögl, Wolff und Müller, Leonhard Weiss, Köster et Eiffage, ainsi que les aménagements paysagers (GaLaBau) et les projets ferroviaires.",
          de: "Große Tief- und Ingenieurbauunternehmen stellen ein, zum Beispiel STRABAG, HOCHTIEF, Max Bögl, Wolff und Müller, Leonhard Weiss, Köster und Eiffage, ebenso der Garten- und Landschaftsbau (GaLaBau) und Bahnprojekte.",
          en: "Major civil engineering and public works contractors are hiring, for example STRABAG, HOCHTIEF, Max Bögl, Wolff und Müller, Leonhard Weiss, Köster and Eiffage, as well as landscaping (GaLaBau) and railway projects.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par les infrastructures, le rail et le logement.",
          de: "Die Perspektiven sind stark, getragen von Infrastruktur, Schiene und Wohnungsbau.",
          en: "Prospects are strong, driven by infrastructure, rail and housing.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers opérateur spécialisé (grue, gros engins), puis chef d'équipe et Polier.",
          de: "Sie können sich zum spezialisierten Maschinisten (Kran, Großgeräte), dann zum Vorarbeiter und Polier weiterentwickeln.",
          en: "You can progress to specialised operator (crane, heavy machinery), then team leader and Polier.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitsvorschriften, Anweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety rules, instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer notwendig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are qualified craft occupations. The master title (Meister) is only required to set up your own business, not to be an employee. For the skilled worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is required; we have it assessed and start the procedure together with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit bei gleichzeitigem Abschluss der Anerkennung vor Ort erlaubt (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows entry and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the application file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier très sensible à la sécurité ?",
          de: "Ist es ein sehr sicherheitsrelevanter Beruf?",
          en: "Is it a highly safety-sensitive trade?",
        },
        a: {
          fr: "Oui, la conduite d'engins est très sensible à la sécurité, avec la signalisation et les plans de charge à respecter en permanence.",
          de: "Ja, das Führen von Baugeräten ist sehr sicherheitsrelevant, mit Einweisung und Lastdiagrammen, die stets zu beachten sind.",
          en: "Yes, operating machinery is highly safety-sensitive, with signalling and load charts to respect at all times.",
        },
      },
      {
        q: {
          fr: "Faut-il des certifications machines ?",
          de: "Braucht man Maschinenzertifikate?",
          en: "Do you need machine certifications?",
        },
        a: {
          fr: "Oui, les certifications machines valorisent nettement votre profil auprès des employeurs allemands.",
          de: "Ja, Maschinenzertifikate werten Ihr Profil bei deutschen Arbeitgebern deutlich auf.",
          en: "Yes, machine certifications clearly enhance your profile with German employers.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
