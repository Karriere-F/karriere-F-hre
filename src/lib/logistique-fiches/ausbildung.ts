// Ausbildung-path Logistique fiches (train in Germany). Populated from verified
// public German data; see logistique-fiche-types.ts for the shape and SALARY_NOTE.

import type { LogistiqueFiche } from "../logistique-fiche-types";
import { SALARY_NOTE } from "../logistique-fiche-types";

export const LOG_FICHES_AUSBILDUNG: Record<string, LogistiqueFiche> = {
  "fachkraft-lagerlogistik": {
    slug: "fachkraft-lagerlogistik",
    image: "fachkraft-lagerlogistik",
    title: {
      fr: "Logisticien d'entrepôt (Fachkraft für Lagerlogistik)",
      de: "Fachkraft für Lagerlogistik",
      en: "Warehouse logistics specialist (Fachkraft für Lagerlogistik)",
    },
    intro: {
      fr: "Un métier central de la logistique allemande, accessible par une formation reconnue et très recherché par les employeurs.",
      de: "Ein zentraler Beruf der deutschen Logistik, über eine anerkannte Ausbildung zugänglich und bei Arbeitgebern sehr gefragt.",
      en: "A core role in German logistics, reachable through a recognised training and in high demand among employers.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "La Fachkraft für Lagerlogistik réceptionne, stocke, prépare et expédie les marchandises, planifie les processus de l'entrepôt, conduit des chariots élévateurs et utilise les logiciels logistiques.",
          de: "Die Fachkraft für Lagerlogistik nimmt Waren an, lagert, kommissioniert und versendet sie, plant die Lagerprozesse, fährt Gabelstapler und arbeitet mit Logistiksoftware.",
          en: "The warehouse logistics specialist receives, stores, picks and ships goods, plans warehouse processes, operates forklifts and works with logistics software.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'apprentissage, environ 660 à 1 370 €/mois selon la branche et la région. À l'entrée, environ 2 150 à 2 700 €/mois ; le salaire médian tous niveaux d'expérience confondus est d'environ 3 094 €/mois (fourchette 2 617 à 3 745 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Cette rémunération suit une convention de branche, au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Während der Ausbildung etwa 660 bis 1.370 €/Monat je nach Branche und Region. Zum Einstieg etwa 2.150 bis 2.700 €/Monat; der Medianwert über alle Erfahrungsstufen liegt bei rund 3.094 €/Monat (Spanne 2.617 bis 3.745 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). Diese Vergütung folgt einem Branchentarif, über dem gesetzlichen Mindestlohn (13,90 €/Std. im Jahr 2026).",
          en: "During the apprenticeship, about 660 to 1,370 €/month depending on the sector and region. On entry, about 2,150 to 2,700 €/month; the median across all experience levels is around 3,094 €/month (range 2,617 to 3,745 €) (source: Entgeltatlas, Federal Employment Agency, 2025). This pay follows a sector agreement, above the statutory minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre de commerce (IHK).",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "The training lasts 3 years, alternating between the company and the vocational school (Berufsschule), and ends with the chamber of commerce (IHK) exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Amazon, DHL et Deutsche Post, Kaufland, Lidl et le groupe Schwarz, dm, BMW, ainsi que de nombreux prestataires logistiques (3PL).",
          de: "Amazon, DHL und Deutsche Post, Kaufland, Lidl und die Schwarz-Gruppe, dm, BMW sowie zahlreiche Logistikdienstleister (3PL).",
          en: "Amazon, DHL and Deutsche Post, Kaufland, Lidl and the Schwarz Group, dm, BMW, as well as many third-party logistics providers (3PL).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par une pénurie structurelle de personnel d'entrepôt en Allemagne.",
          de: "Die Aussichten sind gut, getragen von einem strukturellen Mangel an Lagerpersonal in Deutschland.",
          en: "Prospects are strong, driven by a structural shortage of warehouse staff in Germany.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "On peut évoluer vers chef d'équipe, Logistikmeister ou Fachwirt, puis responsable d'entrepôt.",
          de: "Möglich sind Aufstiege zum Teamleiter, Logistikmeister oder Fachwirt und weiter zum Lagerleiter.",
          en: "You can move up to team leader, Logistikmeister or Fachwirt, and then warehouse manager.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the work all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Sie im Deutschen auf das erforderliche Niveau, finden das Unternehmen und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you until you are settled in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il déjà avoir le permis cariste ?",
          de: "Braucht man vorab den Staplerschein?",
          en: "Do you need a forklift licence beforehand?",
        },
        a: {
          fr: "Non, le permis cariste s'obtient pendant la formation, dans le cadre de l'apprentissage en entreprise.",
          de: "Nein, der Staplerschein wird während der Ausbildung im Betrieb erworben.",
          en: "No, the forklift licence is obtained during the training, as part of the in-company apprenticeship.",
        },
      },
      {
        q: {
          fr: "Est-ce un métier physique ou informatique ?",
          de: "Ist der Beruf eher körperlich oder digital?",
          en: "Is it a physical or a computer-based job?",
        },
        a: {
          fr: "Les deux : le travail est physique (manutention, conduite de chariots) et informatique (gestion des stocks et logiciels logistiques).",
          de: "Beides: Die Arbeit ist körperlich (Warenumschlag, Staplerfahren) und digital (Bestandsführung und Logistiksoftware).",
          en: "Both: the work is physical (handling goods, driving forklifts) and computer-based (stock management and logistics software).",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "berufskraftfahrer": {
    slug: "berufskraftfahrer",
    image: "berufskraftfahrer",
    title: {
      fr: "Conducteur routier (Berufskraftfahrer)",
      de: "Berufskraftfahrer",
      en: "Professional truck driver (Berufskraftfahrer)",
    },
    intro: {
      fr: "Un métier en pénurie en Allemagne, dont la formation inclut directement les permis poids lourd, un vrai raccourci vers l'emploi.",
      de: "Ein Mangelberuf in Deutschland, dessen Ausbildung die Lkw-Führerscheine direkt einschließt, eine echte Abkürzung in die Beschäftigung.",
      en: "A shortage occupation in Germany whose training directly includes the heavy-vehicle licences, a real shortcut into work.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Berufskraftfahrer conduit des camions pour transporter des marchandises, charge et arrime le fret, planifie les itinéraires et respecte les temps de conduite et de repos.",
          de: "Der Berufskraftfahrer fährt Lkw, um Güter zu transportieren, lädt und sichert die Fracht, plant Routen und hält Lenk- und Ruhezeiten ein.",
          en: "The professional driver operates trucks to transport goods, loads and secures cargo, plans routes and keeps to driving and rest times.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'apprentissage, environ 1 150 €/mois en 3e année. À l'entrée, salaire médian d'environ 2 770 €/mois, souvent 2 900 à 3 400 € avec les permis C/CE ; le salaire médian tous niveaux d'expérience confondus est d'environ 3 048 €/mois (fourchette 2 614 à 3 614 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2026). Cette rémunération suit une convention de branche, au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Während der Ausbildung etwa 1.150 €/Monat im 3. Jahr. Zum Einstieg ein Medianwert von rund 2.770 €/Monat, mit den Führerscheinen C/CE häufig 2.900 bis 3.400 €; der Medianwert über alle Erfahrungsstufen liegt bei rund 3.048 €/Monat (Spanne 2.614 bis 3.614 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2026). Diese Vergütung folgt einem Branchentarif, über dem gesetzlichen Mindestlohn (13,90 €/Std. im Jahr 2026).",
          en: "During the apprenticeship, about 1,150 €/month in the third year. On entry, a median of around 2,770 €/month, often 2,900 to 3,400 € with the C/CE licences; the median across all experience levels is around 3,048 €/month (range 2,614 to 3,614 €) (source: Entgeltatlas, Federal Employment Agency, 2026). This pay follows a sector agreement, above the statutory minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans. Point clé et avantage majeur : l'Ausbildung inclut l'obtention des permis poids lourd (C/CE) et la qualification de conducteur professionnel (Grundqualifikation, code 95), ce qui évite la conversion de permis étranger, souvent longue.",
          de: "Die Ausbildung dauert 3 Jahre. Entscheidend und ein großer Vorteil: Die Ausbildung umfasst den Erwerb der Lkw-Führerscheine (C/CE) und die Grundqualifikation als Berufskraftfahrer (Schlüsselzahl 95), was die oft langwierige Umschreibung eines ausländischen Führerscheins erspart.",
          en: "The training lasts 3 years. The key point and major advantage: the Ausbildung includes obtaining the heavy-vehicle licences (C/CE) and the professional driver qualification (Grundqualifikation, code 95), which avoids the often lengthy conversion of a foreign licence.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann, Rhenus.",
          de: "DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann, Rhenus.",
          en: "DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann, Rhenus.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : le conducteur routier est un métier officiellement en pénurie (Engpassberuf) reconnu par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Aussichten sind sehr gut: Der Berufskraftfahrer ist ein offiziell von der Bundesagentur für Arbeit anerkannter Engpassberuf (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: the professional driver is an officially recognised shortage occupation (Engpassberuf) according to the Federal Employment Agency (source: Federal Employment Agency, 2024).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "On peut évoluer vers conducteur spécialisé (matières dangereuses, citerne), formateur ou affréteur (Disponent).",
          de: "Möglich sind Wege zum Spezialfahrer (Gefahrgut, Tank), Ausbilder oder Disponent.",
          en: "You can move up to specialist driver (dangerous goods, tanker), trainer or dispatcher (Disponent).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the work all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Sie im Deutschen auf das erforderliche Niveau, finden das Unternehmen und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you until you are settled in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "L'Ausbildung donne-t-elle les permis nécessaires ?",
          de: "Vermittelt die Ausbildung die nötigen Führerscheine?",
          en: "Does the Ausbildung provide the necessary licences?",
        },
        a: {
          fr: "Oui, les permis poids lourd C/CE et la qualification code 95 sont inclus dans la formation.",
          de: "Ja, die Lkw-Führerscheine C/CE und die Qualifikation Schlüsselzahl 95 sind in der Ausbildung enthalten.",
          en: "Yes, the C/CE heavy-vehicle licences and the code 95 qualification are included in the training.",
        },
      },
      {
        q: {
          fr: "Y a-t-il une condition d'âge ?",
          de: "Gibt es eine Altersvoraussetzung?",
          en: "Is there an age requirement?",
        },
        a: {
          fr: "Oui, le permis poids lourd s'obtient à partir de 18 ans dans le cadre de la formation.",
          de: "Ja, der Lkw-Führerschein kann im Rahmen der Ausbildung ab 18 Jahren erworben werden.",
          en: "Yes, the heavy-vehicle licence can be obtained from age 18 as part of the training.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "fachlagerist": {
    slug: "fachlagerist",
    image: "fachlagerist",
    title: {
      fr: "Opérateur logistique (Fachlagerist)",
      de: "Fachlagerist",
      en: "Warehouse operative (Fachlagerist)",
    },
    intro: {
      fr: "Une porte d'entrée rapide dans la logistique allemande, avec la possibilité de poursuivre vers un diplôme supérieur.",
      de: "Ein schneller Einstieg in die deutsche Logistik, mit der Möglichkeit, zu einem höheren Abschluss weiterzugehen.",
      en: "A quick way into German logistics, with the option to continue toward a higher qualification.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Fachlagerist réceptionne, contrôle, stocke et prépare les marchandises, emballe les commandes et prépare les expéditions dans l'entrepôt.",
          de: "Der Fachlagerist nimmt Waren an, kontrolliert, lagert und kommissioniert sie, verpackt Aufträge und bereitet Sendungen im Lager vor.",
          en: "The warehouse operative receives, checks, stores and picks goods, packs orders and prepares shipments in the warehouse.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'apprentissage, environ 900 à 975 €/mois en moyenne. À l'entrée, environ 2 100 à 2 500 €/mois ; le salaire moyen tous niveaux d'expérience confondus est d'environ 2 866 €/mois (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Cette rémunération suit une convention de branche, au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Während der Ausbildung im Schnitt etwa 900 bis 975 €/Monat. Zum Einstieg etwa 2.100 bis 2.500 €/Monat; der Durchschnitt über alle Erfahrungsstufen liegt bei rund 2.866 €/Monat (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). Diese Vergütung folgt einem Branchentarif, über dem gesetzlichen Mindestlohn (13,90 €/Std. im Jahr 2026).",
          en: "During the apprenticeship, about 900 to 975 €/month on average. On entry, about 2,100 to 2,500 €/month; the average across all experience levels is around 2,866 €/month (source: Entgeltatlas, Federal Employment Agency, 2025). This pay follows a sector agreement, above the statutory minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 2 ans et peut être prolongée d'un an pour obtenir le diplôme de Fachkraft für Lagerlogistik.",
          de: "Die Ausbildung dauert 2 Jahre und kann um ein Jahr verlängert werden, um den Abschluss zur Fachkraft für Lagerlogistik zu erlangen.",
          en: "The training lasts 2 years and can be extended by one year to obtain the Fachkraft für Lagerlogistik qualification.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Centres de distribution du commerce, e-commerce, prestataires logistiques (3PL) et logistique industrielle.",
          de: "Handelslager und Distributionszentren, E-Commerce, Logistikdienstleister (3PL) und Industrielogistik.",
          en: "Retail distribution centres, e-commerce, third-party logistics providers (3PL) and industrial logistics.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, avec une demande de volume élevée dans la logistique.",
          de: "Die Aussichten sind gut, mit einer hohen Nachfrage nach Personal in der Logistik.",
          en: "Prospects are strong, with high-volume demand across logistics.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "On peut ajouter une 3e année vers Fachkraft für Lagerlogistik, ou évoluer vers cariste et chef d'équipe.",
          de: "Möglich sind ein 3. Jahr zur Fachkraft für Lagerlogistik oder Wege zum Staplerfahrer und Teamleiter.",
          en: "You can add a third year toward Fachkraft für Lagerlogistik, or move up to forklift operator and team leader.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the work all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Sie im Deutschen auf das erforderliche Niveau, finden das Unternehmen und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you until you are settled in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle est la différence avec la Fachkraft für Lagerlogistik ?",
          de: "Worin liegt der Unterschied zur Fachkraft für Lagerlogistik?",
          en: "What is the difference from the Fachkraft für Lagerlogistik?",
        },
        a: {
          fr: "Le Fachlagerist suit une formation plus courte (2 ans) et davantage opérationnelle, quand la Fachkraft (3 ans) ajoute la planification des processus.",
          de: "Der Fachlagerist hat eine kürzere (2 Jahre) und stärker operative Ausbildung, während die Fachkraft (3 Jahre) zusätzlich die Prozessplanung umfasst.",
          en: "The Fachlagerist has a shorter (2-year) and more hands-on training, while the Fachkraft (3 years) adds process planning.",
        },
      },
      {
        q: {
          fr: "Peut-on continuer vers le diplôme supérieur ?",
          de: "Kann man zum höheren Abschluss weitermachen?",
          en: "Can you continue toward the higher qualification?",
        },
        a: {
          fr: "Oui, en une année de formation supplémentaire, vous obtenez le diplôme de Fachkraft für Lagerlogistik.",
          de: "Ja, mit einem zusätzlichen Ausbildungsjahr erreichen Sie den Abschluss zur Fachkraft für Lagerlogistik.",
          en: "Yes, with one additional year of training you obtain the Fachkraft für Lagerlogistik qualification.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "kaufmann-spedition": {
    slug: "kaufmann-spedition",
    image: "kaufmann-spedition",
    title: {
      fr: "Agent de transit (Kaufmann für Spedition und Logistikdienstleistung)",
      de: "Kaufmann für Spedition und Logistikdienstleistung",
      en: "Freight forwarding agent (Kaufmann für Spedition und Logistikdienstleistung)",
    },
    intro: {
      fr: "Un métier commercial de la logistique, au cœur de l'organisation des transports et de la relation client.",
      de: "Ein kaufmännischer Logistikberuf im Zentrum der Transportorganisation und der Kundenbeziehung.",
      en: "A commercial logistics role at the heart of organising transport and managing customer relationships.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Kaufmann für Spedition und Logistikdienstleistung organise le transport des marchandises, réserve les transporteurs, prépare les documents de transport et de douane et conseille les clients.",
          de: "Der Kaufmann für Spedition und Logistikdienstleistung organisiert den Gütertransport, bucht Frachtführer, erstellt Transport- und Zollpapiere und berät Kunden.",
          en: "The freight forwarding agent organises the transport of goods, books carriers, prepares transport and customs documents and advises customers.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'apprentissage, environ 1 150 € (1re année), 1 213 € (2e) et 1 281 € (3e) par mois. À l'entrée, environ 2 500 à 2 950 €/mois ; avec l'expérience, une moyenne d'environ 3 662 €/mois pouvant monter vers 4 600 €, Hambourg étant la région la mieux payée (environ 4 101 €), chiffres de portails à considérer avec prudence (source : aubi-plus, meingehalt.net, 2025). Cette rémunération suit une convention de branche, au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Während der Ausbildung etwa 1.150 € (1. Jahr), 1.213 € (2. Jahr) und 1.281 € (3. Jahr) pro Monat. Zum Einstieg etwa 2.500 bis 2.950 €/Monat; mit Erfahrung ein Durchschnitt von rund 3.662 €/Monat, der bis gegen 4.600 € steigen kann, wobei Hamburg die bestbezahlte Region ist (etwa 4.101 €); Portalzahlen sind mit Vorsicht zu betrachten (Quelle: aubi-plus, meingehalt.net, 2025). Diese Vergütung folgt einem Branchentarif, über dem gesetzlichen Mindestlohn (13,90 €/Std. im Jahr 2026).",
          en: "During the apprenticeship, about 1,150 € (year 1), 1,213 € (year 2) and 1,281 € (year 3) per month. On entry, about 2,500 to 2,950 €/month; with experience, an average of around 3,662 €/month that can rise toward 4,600 €, with Hamburg the best-paid region (about 4,101 €); portal figures should be treated with caution (source: aubi-plus, meingehalt.net, 2025). This pay follows a sector agreement, above the statutory minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation commerciale dure 3 ans, en alternance entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre de commerce (IHK).",
          de: "Die kaufmännische Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "The commercial training lasts 3 years, alternating between the company and the vocational school, and ends with the chamber of commerce (IHK) exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus, Fiege.",
          de: "DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus, Fiege.",
          en: "DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus, Fiege.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts et réguliers dans la logistique commerciale.",
          de: "Die Aussichten sind gut und beständig in der kaufmännischen Logistik.",
          en: "Prospects are strong and steady in commercial logistics.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "On peut évoluer vers affréteur (Disponent), Fachwirt, chef d'équipe ou responsable d'exploitation.",
          de: "Möglich sind Wege zum Disponenten, Fachwirt, Teamleiter oder Betriebsleiter.",
          en: "You can move up to dispatcher (Disponent), Fachwirt, team leader or operations manager.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Le rôle est commercial et de relation client : le B2 est essentiel, et l'anglais est un vrai plus. L'école professionnelle, l'examen et le travail se déroulent en allemand, niveau que nous visons.",
          de: "Die Rolle ist kaufmännisch und kundenorientiert: B2 ist unverzichtbar, und Englisch ist ein echtes Plus. Berufsschule, Prüfung und Arbeit finden auf Deutsch statt, dem Niveau, das wir anstreben.",
          en: "The role is commercial and customer-facing: B2 is essential, and English is a real plus. The vocational school, the exam and the work take place in German, the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Sie im Deutschen auf das erforderliche Niveau, finden das Unternehmen und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you until you are settled in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier de bureau ou de terrain ?",
          de: "Ist es ein Büro- oder ein Außendienstberuf?",
          en: "Is it an office or a field job?",
        },
        a: {
          fr: "C'est essentiellement un métier de bureau, centré sur la coordination des transports et la relation client.",
          de: "Es ist im Wesentlichen ein Büroberuf, mit Schwerpunkt auf Transportkoordination und Kundenbeziehung.",
          en: "It is essentially an office job, focused on transport coordination and customer relations.",
        },
      },
      {
        q: {
          fr: "L'anglais est-il utile ?",
          de: "Ist Englisch nützlich?",
          en: "Is English useful?",
        },
        a: {
          fr: "Oui, l'anglais est un vrai atout car une grande partie du transport est internationale.",
          de: "Ja, Englisch ist ein echter Vorteil, da ein großer Teil des Transports international ist.",
          en: "Yes, English is a real asset because much of the transport work is international.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "fachkraft-kep": {
    slug: "fachkraft-kep",
    image: "fachkraft-kep",
    title: {
      fr: "Courrier et express KEP (Fachkraft für Kurier-, Express- und Postdienstleistungen)",
      de: "Fachkraft für Kurier-, Express- und Postdienstleistungen",
      en: "Courier and express agent (Fachkraft für Kurier-, Express- und Postdienstleistungen)",
    },
    intro: {
      fr: "Un métier porté par la croissance du e-commerce, accessible rapidement et au coeur de la livraison de colis.",
      de: "Ein vom Wachstum des E-Commerce getragener Beruf, schnell zugänglich und im Zentrum der Paketzustellung.",
      en: "A job driven by the growth of e-commerce, quick to enter and at the heart of parcel delivery.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "La Fachkraft für Kurier-, Express- und Postdienstleistungen trie, achemine et livre les colis, le courrier et les envois express, et planifie les tournées de livraison.",
          de: "Die Fachkraft für Kurier-, Express- und Postdienstleistungen sortiert, leitet und stellt Pakete, Briefe und Expresssendungen zu und plant die Zustelltouren.",
          en: "The courier and express agent sorts, routes and delivers parcels, mail and express shipments, and plans delivery tours.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'apprentissage, environ 585 à 690 €/mois hors convention, bien plus chez les grands employeurs (par exemple Deutsche Post à partir d'environ 1 334 €/mois). À l'entrée, environ 1 500 à 2 000 €/mois, milieu de carrière environ 2 500 €, jusqu'à environ 2 900 € (source : gehalt.de, 2025). C'est le métier le moins rémunéré des cinq ; la rémunération suit une convention de branche, au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Während der Ausbildung etwa 585 bis 690 €/Monat ohne Tarifbindung, deutlich mehr bei großen Arbeitgebern (zum Beispiel Deutsche Post ab etwa 1.334 €/Monat). Zum Einstieg etwa 1.500 bis 2.000 €/Monat, in der Mitte der Laufbahn rund 2.500 €, bis etwa 2.900 € (Quelle: gehalt.de, 2025). Es ist der am geringsten bezahlte der fünf Berufe; die Vergütung folgt einem Branchentarif, über dem gesetzlichen Mindestlohn (13,90 €/Std. im Jahr 2026).",
          en: "During the apprenticeship, about 585 to 690 €/month outside a collective agreement, far more at large employers (for example Deutsche Post from about 1,334 €/month). On entry, about 1,500 to 2,000 €/month, mid-career around 2,500 €, up to about 2,900 € (source: gehalt.de, 2025). It is the lowest-paid of the five roles; pay follows a sector agreement, above the statutory minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 2 ans, en alternance entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre de commerce (IHK).",
          de: "Die Ausbildung dauert 2 Jahre, im Wechsel zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "The training lasts 2 years, alternating between the company and the vocational school, and ends with the chamber of commerce (IHK) exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Deutsche Post DHL, Hermes, DPD, GLS, UPS, FedEx, Amazon Logistics.",
          de: "Deutsche Post DHL, Hermes, DPD, GLS, UPS, FedEx, Amazon Logistics.",
          en: "Deutsche Post DHL, Hermes, DPD, GLS, UPS, FedEx, Amazon Logistics.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont soutenus par la croissance du e-commerce et des volumes de colis.",
          de: "Die Aussichten werden vom Wachstum des E-Commerce und der Paketmengen getragen.",
          en: "Prospects are supported by the growth of e-commerce and parcel volumes.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "On peut évoluer vers chef d'équipe, planification des tournées ou encadrement d'agence.",
          de: "Möglich sind Wege zum Teamleiter, zur Tourenplanung oder zur Leitung eines Standorts.",
          en: "You can move up to team leader, tour planning or depot management.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the work all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Sie im Deutschen auf das erforderliche Niveau, finden das Unternehmen und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you until you are settled in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Un permis de conduire est-il utile ?",
          de: "Ist ein Führerschein nützlich?",
          en: "Is a driving licence useful?",
        },
        a: {
          fr: "Oui, le permis B est un vrai atout pour la livraison.",
          de: "Ja, der Führerschein der Klasse B ist ein echter Vorteil für die Zustellung.",
          en: "Yes, a category B licence is a real asset for delivery.",
        },
      },
      {
        q: {
          fr: "Est-ce un métier physique et rythmé ?",
          de: "Ist der Beruf körperlich und in hohem Tempo?",
          en: "Is it a physical and fast-paced job?",
        },
        a: {
          fr: "Oui, le travail est physique et soutenu, avec des tournées à respecter.",
          de: "Ja, die Arbeit ist körperlich und intensiv, mit einzuhaltenden Zustelltouren.",
          en: "Yes, the work is physical and demanding, with delivery tours to keep to.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
