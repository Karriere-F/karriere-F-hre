// Ausbildung-path Hôtellerie fiches (train in Germany). Populated from verified
// public German data; see hotellerie-fiche-types.ts for the shape and SALARY_NOTE.

import type { HotellerieFiche } from "../hotellerie-fiche-types";
import { SALARY_NOTE } from "../hotellerie-fiche-types";

export const HOT_FICHES_AUSBILDUNG: Record<string, HotellerieFiche> = {
  koch: {
    slug: "koch",
    image: "koch",
    title: {
      fr: "Cuisinier (Koch / Köchin)",
      de: "Koch / Köchin",
      en: "Cook (Koch / Köchin)",
    },
    intro: {
      fr: "Un métier de passion et de savoir-faire, officiellement reconnu en pénurie en Allemagne, où votre talent sera durablement recherché.",
      de: "Ein Beruf aus Leidenschaft und Können, offiziell als Engpassberuf anerkannt, in dem Ihr Talent langfristig gefragt ist.",
      en: "A craft driven by passion and skill, officially recognised as a shortage occupation in Germany, where your talent will be sought after for the long term.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le cuisinier prépare et cuisine les plats, gère les postes de la cuisine, la mise en place, l'hygiène (HACCP) et les commandes.",
          de: "Der Koch bereitet Speisen zu, verantwortet die Posten in der Küche, die Mise en Place, die Hygiene (HACCP) und die Bestellungen.",
          en: "The cook prepares and cooks dishes, runs the kitchen stations, the mise en place, hygiene (HACCP) and ordering.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "L'apprentissage suit la convention DEHOGA, par exemple 1 150 € (1re année), 1 250 € (2e) et 1 350 € (3e) en Rhénanie-du-Nord-Westphalie (un peu moins ailleurs). Le salaire d'entrée est d'environ 2 129 €/mois (estimation de portail) et le salaire médian, tous niveaux d'expérience confondus, d'environ 3 018 €/mois (fourchette 2 563 à 3 581 €) (source : DEHOGA, Entgeltatlas, Bundesagentur für Arbeit, 2024 et 2025).",
          de: "Die Ausbildung folgt dem DEHOGA-Tarifvertrag, zum Beispiel 1.150 € (1. Jahr), 1.250 € (2.) und 1.350 € (3.) in Nordrhein-Westfalen (anderswo etwas weniger). Das Einstiegsgehalt liegt bei rund 2.129 €/Monat (Portalschätzung) und der Median über alle Erfahrungsstufen hinweg bei rund 3.018 €/Monat (Spanne 2.563 bis 3.581 €) (Quelle: DEHOGA, Entgeltatlas, Bundesagentur für Arbeit, 2024 und 2025).",
          en: "The apprenticeship follows the DEHOGA agreement, for example 1,150 € (year 1), 1,250 € (year 2) and 1,350 € (year 3) in North Rhine-Westphalia (slightly less elsewhere). The entry salary is around 2,129 €/month (portal estimate) and the median, across all experience levels, around 3,018 €/month (range 2,563 to 3,581 €) (source: DEHOGA, Entgeltatlas, Bundesagentur für Arbeit, 2024 and 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et se conclut par l'examen de la chambre (IHK). Elle a été modernisée en 2022.",
          de: "Die Ausbildung dauert 3 Jahre und endet mit der Prüfung vor der Kammer (IHK). Sie wurde 2022 modernisiert.",
          en: "The training lasts 3 years and ends with the chamber examination (IHK). It was modernised in 2022.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Restaurants, hôtels, restauration collective et cantines (Gemeinschaftsverpflegung), traiteurs événementiels, cliniques et maisons de retraite.",
          de: "Restaurants, Hotels, Gemeinschaftsverpflegung und Kantinen, Eventcaterer, Kliniken und Seniorenheime.",
          en: "Restaurants, hotels, communal catering and canteens (Gemeinschaftsverpflegung), event caterers, clinics and retirement homes.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : le cuisinier est un métier officiellement en pénurie reconnu par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Perspektiven sind sehr gut: Der Koch ist ein von der Bundesagentur für Arbeit offiziell anerkannter Engpassberuf (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: the cook is an occupation officially recognised as a shortage occupation by the Bundesagentur für Arbeit (source: Bundesagentur für Arbeit, 2024).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Chef de partie, sous-chef, chef de cuisine (Küchenchef), puis maître cuisinier (Küchenmeister).",
          de: "Chef de Partie, Sous-Chef, Küchenchef und anschließend Küchenmeister.",
          en: "Chef de partie, sous-chef, head chef (Küchenchef), then master chef (Küchenmeister).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons ; la cuisine étant moins en contact direct avec la clientèle, un allemand pratique solide suffit souvent, et l'anglais est un plus dans les cuisines internationales.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir anstreben; da die Küche weniger direkten Gästekontakt hat, reicht solides praktisches Deutsch oft aus, und Englisch ist in internationalen Küchen ein Plus.",
          en: "Vocational school, the exam and the work all take place in German. B2 is the standard employers expect and the level we aim for; as the kitchen has less direct guest contact, solid practical German is often enough, and English is an asset in international kitchens.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss der Sekundarstufe.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised across the country. You need an Ausbildung contract, the expected level of German and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous. Le métier de cuisinier figure parmi les métiers en pénurie reconnus en Allemagne, ce qui facilite le recrutement.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie in einen Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen mit Ihnen das Dossier zusammen. Der Beruf des Kochs zählt zu den in Deutschland anerkannten Engpassberufen, was die Einstellung erleichtert.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you move to a skilled-worker residence permit to work in Germany. We check your eligibility and build the file with you. The cook profession is among the recognised shortage occupations in Germany, which makes recruitment easier.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten das Visumsdossier vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier est-il vraiment en pénurie ?",
          de: "Ist der Beruf wirklich ein Engpassberuf ?",
          en: "Is the profession really a shortage occupation ?",
        },
        a: {
          fr: "Oui, le cuisinier est officiellement classé métier en pénurie (Engpassberuf) par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2024).",
          de: "Ja, der Koch ist von der Bundesagentur für Arbeit offiziell als Engpassberuf eingestuft (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Yes, the cook is officially classified as a shortage occupation (Engpassberuf) by the Bundesagentur für Arbeit (source: Bundesagentur für Arbeit, 2024).",
        },
      },
      {
        q: {
          fr: "Faut-il déjà savoir cuisiner ?",
          de: "Muss man schon kochen können ?",
          en: "Do you already need to know how to cook ?",
        },
        a: {
          fr: "Non, la formation vous forme entièrement au métier ; la motivation et le goût du travail bien fait comptent plus qu'une expérience préalable.",
          de: "Nein, die Ausbildung vermittelt Ihnen den Beruf vollständig; Motivation und Freude an sauberer Arbeit zählen mehr als Vorerfahrung.",
          en: "No, the training teaches you the profession from the ground up; motivation and a taste for doing things well matter more than prior experience.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
  hotelfachmann: {
    slug: "hotelfachmann",
    image: "hotelfachmann",
    title: {
      fr: "Agent hôtelier (Hotelfachmann / Hotelfachfrau)",
      de: "Hotelfachmann / Hotelfachfrau",
      en: "Hotel specialist (Hotelfachmann / Hotelfachfrau)",
    },
    intro: {
      fr: "Un métier complet au cœur de l'hôtel, où le sens du service et le contact humain ouvrent de belles perspectives de carrière.",
      de: "Ein vielseitiger Beruf im Herzen des Hotels, in dem Servicegespür und der Kontakt zu Menschen schöne Karrierewege eröffnen.",
      en: "A well-rounded profession at the heart of the hotel, where a sense of service and human contact open up genuine career prospects.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'agent hôtelier assure l'accueil, le service, les étages et la restauration de l'hôtel, au contact direct des clients.",
          de: "Der Hotelfachmann übernimmt Empfang, Service, Etage und Gastronomie des Hotels, in direktem Kontakt mit den Gästen.",
          en: "The hotel specialist handles reception, service, housekeeping and the hotel's food and beverage, in direct contact with guests.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "L'apprentissage est d'environ 1 000 € (1re année), 1 150 € (2e) et 1 300 € (3e), par exemple en Hesse. Le salaire d'entrée est d'environ 2 400 €/mois et le salaire médian, tous niveaux d'expérience confondus, d'environ 2 803 €/mois (source : Entgeltatlas, Bundesagentur für Arbeit, 2024).",
          de: "Die Ausbildung liegt bei rund 1.000 € (1. Jahr), 1.150 € (2.) und 1.300 € (3.), zum Beispiel in Hessen. Das Einstiegsgehalt beträgt rund 2.400 €/Monat und der Median über alle Erfahrungsstufen hinweg rund 2.803 €/Monat (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024).",
          en: "The apprenticeship is around 1,000 € (year 1), 1,150 € (year 2) and 1,300 € (year 3), for example in Hesse. The entry salary is around 2,400 €/month and the median, across all experience levels, around 2,803 €/month (source: Entgeltatlas, Bundesagentur für Arbeit, 2024).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et se conclut par l'examen IHK. Le métier a été modernisé en 2022.",
          de: "Die Ausbildung dauert 3 Jahre und endet mit der IHK-Prüfung. Der Beruf wurde 2022 modernisiert.",
          en: "The training lasts 3 years and ends with the IHK examination. The profession was modernised in 2022.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Hôtels de toutes catégories, des chaînes économiques aux établissements de luxe.",
          de: "Hotels aller Kategorien, von Budgetketten bis zu Luxushäusern.",
          en: "Hotels of every category, from budget chains to luxury establishments.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : la demande de personnel hôtelier reste élevée.",
          de: "Die Perspektiven sind gut: Die Nachfrage nach Hotelpersonal bleibt hoch.",
          en: "Prospects are strong: demand for hotel staff remains high.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Chef de réception, responsable d'étages, responsable F&B, puis direction d'hôtel.",
          de: "Empfangsleitung, Hausdame oder Hausdamenleitung, F&B-Leitung und anschließend Hoteldirektion.",
          en: "Front-office manager, head of housekeeping, F&B manager, then hotel management.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons ; ce rôle étant en contact direct avec la clientèle, l'anglais est en outre un réel atout, souvent nécessaire face à une clientèle internationale.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir anstreben; da diese Rolle direkten Gästekontakt hat, ist Englisch zudem ein echter Vorteil und bei internationalem Publikum oft notwendig.",
          en: "Vocational school, the exam and the work all take place in German. B2 is the standard employers expect and the level we aim for; as this role involves direct guest contact, English is also a real asset and often necessary with an international clientele.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss der Sekundarstufe.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised across the country. You need an Ausbildung contract, the expected level of German and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie in einen Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen mit Ihnen das Dossier zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you move to a skilled-worker residence permit to work in Germany. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten das Visumsdossier vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelles sont les missions au quotidien ?",
          de: "Welche Aufgaben fallen im Alltag an ?",
          en: "What are the day-to-day tasks ?",
        },
        a: {
          fr: "Vous alternez entre la réception, le service en salle et les étages, avec une vue d'ensemble sur le fonctionnement de l'hôtel.",
          de: "Sie wechseln zwischen Empfang, Service im Restaurant und Etage und behalten den gesamten Hotelbetrieb im Blick.",
          en: "You alternate between reception, restaurant service and housekeeping, with an overall view of how the hotel runs.",
        },
      },
      {
        q: {
          fr: "L'anglais est-il utile ?",
          de: "Ist Englisch nützlich ?",
          en: "Is English useful ?",
        },
        a: {
          fr: "Oui, la clientèle est internationale et l'anglais est fréquemment nécessaire, en complément de l'allemand.",
          de: "Ja, das Publikum ist international, und Englisch ist neben Deutsch häufig erforderlich.",
          en: "Yes, the clientele is international and English is frequently necessary, alongside German.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
  "fachmann-restaurants-veranstaltung": {
    slug: "fachmann-restaurants-veranstaltung",
    image: "fachmann-restaurants-veranstaltung",
    title: {
      fr: "Service restaurant et événementiel (Fachmann für Restaurants und Veranstaltungsgastronomie)",
      de: "Fachmann für Restaurants und Veranstaltungsgastronomie",
      en: "Restaurant and event service specialist (Fachmann für Restaurants und Veranstaltungsgastronomie)",
    },
    intro: {
      fr: "Le métier du contact et de l'accueil par excellence, où votre sens du service fait toute la différence et où les pourboires complètent le salaire.",
      de: "Der Beruf des Kontakts und der Gastfreundschaft schlechthin, in dem Ihr Servicegespür den Unterschied macht und Trinkgeld das Gehalt ergänzt.",
      en: "The profession of contact and hospitality par excellence, where your sense of service makes all the difference and tips supplement your pay.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Ce professionnel accueille et sert les clients au restaurant et lors d'événements, conseille, prend les commandes et encaisse.",
          de: "Dieser Fachmann empfängt und bedient die Gäste im Restaurant und bei Veranstaltungen, berät, nimmt Bestellungen auf und kassiert.",
          en: "This specialist welcomes and serves guests in the restaurant and at events, advises them, takes orders and handles payment.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "L'apprentissage est d'environ 700 à 1 300 €/mois selon le Land et l'année. Le salaire d'entrée est d'environ 2 490 €/mois (estimation de portail) et le salaire médian du service se situe de l'ordre de 2 400 à 2 500 €/mois (source : aubi-plus, Entgeltatlas, Bundesagentur für Arbeit, 2024).",
          de: "Die Ausbildung liegt bei rund 700 bis 1.300 €/Monat je nach Bundesland und Jahr. Das Einstiegsgehalt beträgt rund 2.490 €/Monat (Portalschätzung) und der Median im Service liegt in der Größenordnung von 2.400 bis 2.500 €/Monat (Quelle: aubi-plus, Entgeltatlas, Bundesagentur für Arbeit, 2024).",
          en: "The apprenticeship is around 700 to 1,300 €/month depending on the state and the year. The entry salary is around 2,490 €/month (portal estimate) and the median for service is in the region of 2,400 to 2,500 €/month (source: aubi-plus, Entgeltatlas, Bundesagentur für Arbeit, 2024).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et se conclut par l'examen IHK. Le métier a été renommé et modernisé en 2022, avec l'ajout de l'événementiel.",
          de: "Die Ausbildung dauert 3 Jahre und endet mit der IHK-Prüfung. Der Beruf wurde 2022 umbenannt und modernisiert, mit der Erweiterung um die Veranstaltungsgastronomie.",
          en: "The training lasts 3 years and ends with the IHK examination. The profession was renamed and modernised in 2022, with events catering added.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Restaurants, hôtels (service et F&B), traiteurs événementiels et lieux de congrès.",
          de: "Restaurants, Hotels (Service und F&B), Eventcaterer und Kongresszentren.",
          en: "Restaurants, hotels (service and F&B), event caterers and congress venues.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : le service fait partie des métiers durablement recherchés, et les pourboires (Trinkgeld) complètent le salaire.",
          de: "Die Perspektiven sind gut: Der Service gehört zu den dauerhaft gesuchten Berufen, und das Trinkgeld ergänzt das Gehalt.",
          en: "Prospects are strong: service is among the professions in lasting demand, and tips (Trinkgeld) supplement the pay.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Chef de rang, maître d'hôtel, puis responsable de restauration (F&B).",
          de: "Chef de Rang, Restaurantleiter (Maître) und anschließend F&B-Leitung.",
          en: "Chef de rang, maître d'hôtel, then food and beverage manager (F&B).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons ; c'est le métier le plus en contact avec la clientèle, l'anglais y est donc un réel atout, très utile face à une clientèle internationale.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir anstreben; es ist der Beruf mit dem intensivsten Gästekontakt, daher ist Englisch ein echter Vorteil und bei internationalem Publikum sehr nützlich.",
          en: "Vocational school, the exam and the work all take place in German. B2 is the standard employers expect and the level we aim for; this is the most guest-facing role, so English is a real asset and very useful with an international clientele.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss der Sekundarstufe.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised across the country. You need an Ausbildung contract, the expected level of German and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie in einen Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen mit Ihnen das Dossier zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you move to a skilled-worker residence permit to work in Germany. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten das Visumsdossier vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Les pourboires comptent-ils vraiment ?",
          de: "Zählt das Trinkgeld wirklich ?",
          en: "Do tips really count ?",
        },
        a: {
          fr: "Oui, dans les postes en contact avec la clientèle, les pourboires (Trinkgeld) constituent un vrai complément au salaire.",
          de: "Ja, in Stellen mit Gästekontakt ist das Trinkgeld eine echte Ergänzung zum Gehalt.",
          en: "Yes, in guest-facing roles tips (Trinkgeld) are a genuine supplement to the salary.",
        },
      },
      {
        q: {
          fr: "Le métier inclut-il l'événementiel ?",
          de: "Umfasst der Beruf auch die Veranstaltungsgastronomie ?",
          en: "Does the profession include events ?",
        },
        a: {
          fr: "Oui, depuis la réforme de 2022, la restauration événementielle fait partie intégrante du métier.",
          de: "Ja, seit der Reform von 2022 ist die Veranstaltungsgastronomie fester Bestandteil des Berufs.",
          en: "Yes, since the 2022 reform, event catering is an integral part of the profession.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
  "fachkraft-kueche": {
    slug: "fachkraft-kueche",
    image: "fachkraft-kueche",
    title: {
      fr: "Commis de cuisine (Fachkraft für Küche)",
      de: "Fachkraft für Küche",
      en: "Kitchen assistant (Fachkraft für Küche)",
    },
    intro: {
      fr: "Une porte d'entrée accessible vers les métiers de la cuisine, pensée comme un tremplin direct vers le diplôme de cuisinier.",
      de: "Ein zugänglicher Einstieg in die Küchenberufe, konzipiert als direktes Sprungbrett zum Abschluss als Koch.",
      en: "An accessible entry point into kitchen professions, designed as a direct stepping stone to the cook qualification.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le commis de cuisine seconde la cuisine, prépare les ingrédients, réalise des plats simples et applique les règles d'hygiène.",
          de: "Die Fachkraft für Küche unterstützt die Küche, bereitet Zutaten vor, kocht einfache Gerichte und wendet die Hygieneregeln an.",
          en: "The kitchen assistant supports the kitchen, prepares ingredients, makes simple dishes and applies hygiene rules.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "L'apprentissage est d'environ 900 à 1 100 €/mois. Le salaire d'entrée est d'environ 2 300 €/mois (estimation de portail) (source : aubi-plus, ausbildung.de, 2024).",
          de: "Die Ausbildung liegt bei rund 900 bis 1.100 €/Monat. Das Einstiegsgehalt beträgt rund 2.300 €/Monat (Portalschätzung) (Quelle: aubi-plus, ausbildung.de, 2024).",
          en: "The apprenticeship is around 900 to 1,100 €/month. The entry salary is around 2,300 €/month (portal estimate) (source: aubi-plus, ausbildung.de, 2024).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 2 ans et se conclut par l'examen IHK. Le métier a été créé en 2022 et est entièrement crédité vers la formation de cuisinier (Koch) en une année supplémentaire.",
          de: "Die Ausbildung dauert 2 Jahre und endet mit der IHK-Prüfung. Der Beruf wurde 2022 geschaffen und wird vollständig auf die Ausbildung zum Koch angerechnet, mit einem zusätzlichen Jahr.",
          en: "The training lasts 2 years and ends with the IHK examination. The profession was created in 2022 and is fully credited towards the cook (Koch) qualification with one additional year.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Restaurants, hôtels, restauration collective et cantines, cliniques.",
          de: "Restaurants, Hotels, Gemeinschaftsverpflegung und Kantinen, Kliniken.",
          en: "Restaurants, hotels, communal catering and canteens, clinics.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : ce métier bénéficie de la pénurie de cuisiniers et sert de tremplin.",
          de: "Die Perspektiven sind gut: Dieser Beruf profitiert vom Kochmangel und dient als Sprungbrett.",
          en: "Prospects are strong: this profession benefits from the shortage of cooks and serves as a stepping stone.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "3e année vers le diplôme de cuisinier (Koch), puis chef de partie.",
          de: "3. Jahr zum Abschluss als Koch und anschließend Chef de Partie.",
          en: "Third year towards the cook (Koch) qualification, then chef de partie.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons ; ce métier a toutefois été conçu comme une porte d'entrée accessible, en cuisine et non au contact direct de la clientèle.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir anstreben; dieser Beruf wurde jedoch als zugänglicher Einstieg konzipiert, in der Küche und ohne direkten Gästekontakt.",
          en: "Vocational school, the exam and the work all take place in German. B2 is the standard employers expect and the level we aim for; this profession was, however, designed as an accessible entry point, in the kitchen and not in direct contact with guests.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss der Sekundarstufe.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised across the country. You need an Ausbildung contract, the expected level of German and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous. Le métier de cuisinier figure parmi les métiers en pénurie reconnus en Allemagne, ce qui facilite le recrutement.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie in einen Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen mit Ihnen das Dossier zusammen. Der Beruf des Kochs zählt zu den in Deutschland anerkannten Engpassberufen, was die Einstellung erleichtert.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you move to a skilled-worker residence permit to work in Germany. We check your eligibility and build the file with you. The cook profession is among the recognised shortage occupations in Germany, which makes recruitment easier.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten das Visumsdossier vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle différence avec le cuisinier ?",
          de: "Was ist der Unterschied zum Koch ?",
          en: "What is the difference from the cook ?",
        },
        a: {
          fr: "La formation est plus courte (2 ans) et plus opérationnelle, centrée sur les tâches de préparation et les plats simples.",
          de: "Die Ausbildung ist kürzer (2 Jahre) und stärker operativ, konzentriert auf Vorbereitungsaufgaben und einfache Gerichte.",
          en: "The training is shorter (2 years) and more hands-on, focused on preparation tasks and simple dishes.",
        },
      },
      {
        q: {
          fr: "Peut-on continuer vers le diplôme de cuisinier ?",
          de: "Kann man zum Abschluss als Koch weitermachen ?",
          en: "Can you continue towards the cook qualification ?",
        },
        a: {
          fr: "Oui, en une année supplémentaire : la formation de commis de cuisine est entièrement créditée vers le diplôme de cuisinier (Koch).",
          de: "Ja, mit einem zusätzlichen Jahr: Die Ausbildung zur Fachkraft für Küche wird vollständig auf den Abschluss als Koch angerechnet.",
          en: "Yes, with one additional year: the kitchen assistant training is fully credited towards the cook (Koch) qualification.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
  "kaufmann-hotelmanagement": {
    slug: "kaufmann-hotelmanagement",
    image: "kaufmann-hotelmanagement",
    title: {
      fr: "Gestion hôtelière (Kaufmann für Hotelmanagement)",
      de: "Kaufmann für Hotelmanagement",
      en: "Hotel management specialist (Kaufmann für Hotelmanagement)",
    },
    intro: {
      fr: "Le métier commercial et administratif de l'hôtellerie, pour celles et ceux qui aiment piloter les chiffres, les ventes et l'organisation.",
      de: "Der kaufmännische und administrative Beruf der Hotellerie, für alle, die gern Zahlen, Vertrieb und Organisation steuern.",
      en: "The commercial and administrative profession of hospitality, for those who enjoy steering figures, sales and organisation.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Ce professionnel gère les aspects commerciaux et administratifs de l'hôtel : réservations, contrôle de gestion, achats, marketing, ventes événementielles et ressources humaines.",
          de: "Dieser Kaufmann verantwortet die kaufmännischen und administrativen Aufgaben des Hotels: Reservierungen, Controlling, Einkauf, Marketing, Veranstaltungsverkauf und Personalwesen.",
          en: "This specialist manages the commercial and administrative side of the hotel: reservations, management control, purchasing, marketing, event sales and human resources.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "L'apprentissage est par exemple de 1 099 € (1re année), 1 270 € (2e) et 1 446 € (3e). Le salaire d'entrée est d'environ 2 430 €/mois (parfois 1 800 à 2 000 € dans les petites structures) et d'environ 2 600 à 3 300 €/mois avec l'expérience (source : aubi-plus, 2024 à 2026).",
          de: "Die Ausbildung beträgt zum Beispiel 1.099 € (1. Jahr), 1.270 € (2.) und 1.446 € (3.). Das Einstiegsgehalt liegt bei rund 2.430 €/Monat (in kleinen Betrieben teils 1.800 bis 2.000 €) und bei rund 2.600 bis 3.300 €/Monat mit Erfahrung (Quelle: aubi-plus, 2024 bis 2026).",
          en: "The apprenticeship is, for example, 1,099 € (year 1), 1,270 € (year 2) and 1,446 € (year 3). The entry salary is around 2,430 €/month (sometimes 1,800 to 2,000 € in small businesses) and around 2,600 to 3,300 €/month with experience (source: aubi-plus, 2024 to 2026).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et se conclut par l'examen IHK. Le métier a été renommé en 2022 (ancien Hotelkaufmann).",
          de: "Die Ausbildung dauert 3 Jahre und endet mit der IHK-Prüfung. Der Beruf wurde 2022 umbenannt (früher Hotelkaufmann).",
          en: "The training lasts 3 years and ends with the IHK examination. The profession was renamed in 2022 (formerly Hotelkaufmann).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Hôtels et groupes hôteliers, dans les services commerciaux et administratifs (réservations, contrôle de gestion, achats, ventes événementielles, ressources humaines).",
          de: "Hotels und Hotelgruppen, in den kaufmännischen und administrativen Abteilungen (Reservierung, Controlling, Einkauf, Veranstaltungsverkauf, Personalwesen).",
          en: "Hotels and hotel groups, in commercial and administrative departments (reservations, management control, purchasing, event sales, human resources).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides, dans les fonctions commerciales de l'hôtellerie.",
          de: "Die Perspektiven sind solide, in den kaufmännischen Funktionen der Hotellerie.",
          en: "Prospects are solid, in the commercial functions of hospitality.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Responsable des réservations ou des ventes, contrôleur de gestion, puis direction d'hôtel.",
          de: "Leitung Reservierung oder Vertrieb, Controller und anschließend Hoteldirektion.",
          en: "Reservations or sales manager, management controller, then hotel management.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le travail se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons ; c'est le métier le plus exigeant en allemand écrit (correspondance commerciale, contrôle de gestion), et l'anglais y est fréquent.",
          de: "Berufsschule, Prüfung und Arbeit finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir anstreben; es ist der Beruf mit den höchsten Anforderungen an schriftliches Deutsch (Geschäftskorrespondenz, Controlling), und Englisch ist häufig gefragt.",
          en: "Vocational school, the exam and the work all take place in German. B2 is the standard employers expect and the level we aim for; this is the most demanding role in written German (business correspondence, management control), and English is frequently required.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss der Sekundarstufe.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised across the country. You need an Ausbildung contract, the expected level of German and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie in einen Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen mit Ihnen das Dossier zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you move to a skilled-worker residence permit to work in Germany. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten das Visumsdossier vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier de bureau ?",
          de: "Ist es ein Bürojob ?",
          en: "Is it an office job ?",
        },
        a: {
          fr: "Oui, il s'agit d'un métier commercial et administratif, tourné vers la gestion, les ventes et l'organisation de l'hôtel.",
          de: "Ja, es ist ein kaufmännischer und administrativer Beruf, ausgerichtet auf Verwaltung, Vertrieb und Organisation des Hotels.",
          en: "Yes, it is a commercial and administrative role, focused on the hotel's management, sales and organisation.",
        },
      },
      {
        q: {
          fr: "Faut-il aimer les chiffres ?",
          de: "Muss man Zahlen mögen ?",
          en: "Do you need to like numbers ?",
        },
        a: {
          fr: "Oui, le métier repose largement sur la gestion et le contrôle de gestion, l'aisance avec les chiffres est un vrai atout.",
          de: "Ja, der Beruf stützt sich stark auf Verwaltung und Controlling, ein sicherer Umgang mit Zahlen ist ein echter Vorteil.",
          en: "Yes, the role relies heavily on management and management control, so being comfortable with numbers is a real asset.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
