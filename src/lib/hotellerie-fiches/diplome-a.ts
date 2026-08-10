import type { HotellerieFiche } from "../hotellerie-fiche-types";
import { SALARY_NOTE } from "../hotellerie-fiche-types";

export const HOT_FICHES_DIPLOME_A: Record<string, HotellerieFiche> = {
  cuisinier: {
    slug: "cuisinier",
    title: {
      fr: "Cuisinier",
      de: "Koch / Köchin",
      en: "Cook",
    },
    intro: {
      fr: "Votre savoir-faire en cuisine est recherché en Allemagne, où le métier de cuisinier fait partie des professions officiellement en pénurie.",
      de: "Ihr Können in der Küche ist in Deutschland gefragt, wo der Beruf des Kochs zu den offiziell anerkannten Mangelberufen zählt.",
      en: "Your kitchen skills are in demand in Germany, where the profession of cook is one of the officially recognised shortage occupations.",
    },
    image: "cuisinier",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le cuisinier prépare et cuisine les plats, gère un poste, assure la mise en place et respecte les règles d'hygiène (HACCP).",
          de: "Der Koch bereitet die Gerichte zu, verantwortet einen Posten, sorgt für die Mise en Place und beachtet die Hygienevorschriften (HACCP).",
          en: "The cook prepares and cooks the dishes, runs a station, handles the mise en place and follows hygiene rules (HACCP).",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 129 €/mois (selon les portails) et le salaire médian, tous niveaux d'expérience confondus, d'environ 3 018 €/mois (fourchette 2 563 à 3 581 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal, reste généralement plus basse que dans l'industrie, et les postes en contact avec la clientèle sont complétés par les pourboires.",
          de: "Das Einstiegsgehalt liegt bei rund 2.129 €/Monat (laut Portalen) und der Median über alle Erfahrungsstufen bei rund 3.018 €/Monat (Spanne 2.563 bis 3.581 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn, liegt in der Regel niedriger als in der Industrie, und Stellen mit Gästekontakt werden durch Trinkgeld ergänzt.",
          en: "The entry salary is around 2,129 €/month (according to the portals) and the median, across all experience levels, around 3,018 €/month (range 2,563 to 3,581 €) (source: Entgeltatlas, Federal Employment Agency, 2025). Pay follows the regional DEHOGA agreements and the statutory minimum wage, is generally lower than in industry, and guest-facing roles are supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Restaurants, hôtels, restauration collective et cantines, traiteurs événementiels, cliniques et maisons de retraite recrutent des cuisiniers.",
          de: "Restaurants, Hotels, Gemeinschaftsverpflegung und Kantinen, Event-Caterer, Kliniken und Pflegeheime stellen Köche ein.",
          en: "Restaurants, hotels, collective catering and canteens, event caterers, clinics and retirement homes hire cooks.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : le cuisinier est un métier officiellement en pénurie reconnu par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Perspektiven sind sehr gut: Der Koch ist ein von der Bundesagentur für Arbeit offiziell anerkannter Mangelberuf (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: the cook is a shortage occupation officially recognised by the Federal Employment Agency (source: Federal Employment Agency, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution mène vers chef de partie, sous-chef, puis chef de cuisine (Küchenchef) et Küchenmeister.",
          de: "Die Entwicklung führt über Chef de Partie und Sous-Chef bis zum Küchenchef und Küchenmeister.",
          en: "Progression leads to chef de partie, sous-chef, then head chef (Küchenchef) and Küchenmeister.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Le B2 est la norme attendue par les employeurs ; la cuisine étant moins en contact avec la clientèle, un allemand pratique solide suffit souvent et l'anglais est un plus.",
          de: "B2 ist der von den Arbeitgebern erwartete Standard; da die Küche weniger Gästekontakt hat, genügt oft ein solides Alltagsdeutsch, und Englisch ist ein Vorteil.",
          en: "B2 is the standard employers expect; as the kitchen has less guest contact, solid practical German is often enough and English is a plus.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Hospitality and catering professions are not regulated: for the skilled worker visa, recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous. Le métier de cuisinier figure parmi les métiers en pénurie reconnus, ce qui facilite le recrutement.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen. Der Beruf des Kochs zählt zu den anerkannten Mangelberufen, was die Einstellung erleichtert.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and prepare the application with you. The profession of cook is among the recognised shortage occupations, which makes recruitment easier.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft und Eingewöhnung.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you through to your arrival and settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier de cuisinier est-il vraiment en pénurie en Allemagne ?",
          de: "Ist der Beruf des Kochs in Deutschland wirklich ein Mangelberuf?",
          en: "Is the cook really a shortage occupation in Germany?",
        },
        a: {
          fr: "Oui, le cuisinier figure parmi les métiers officiellement reconnus en pénurie par la Bundesagentur für Arbeit (2024), ce qui facilite le recrutement.",
          de: "Ja, der Koch zählt zu den von der Bundesagentur für Arbeit offiziell anerkannten Mangelberufen (2024), was die Einstellung erleichtert.",
          en: "Yes, the cook is among the shortage occupations officially recognised by the Federal Employment Agency (2024), which makes recruitment easier.",
        },
      },
      {
        q: {
          fr: "Ma qualification obtenue à l'étranger est-elle reconnue ?",
          de: "Wird meine im Ausland erworbene Qualifikation anerkannt?",
          en: "Is my qualification obtained abroad recognised?",
        },
        a: {
          fr: "Elle doit être reconnue équivalente à la formation allemande via la procédure d'Anerkennung, que nous faisons évaluer et engageons avec vous.",
          de: "Sie muss über das Anerkennungsverfahren als gleichwertig zur deutschen Ausbildung anerkannt werden, das wir für Sie bewerten lassen und mit Ihnen einleiten.",
          en: "It must be recognised as equivalent to German training through the Anerkennung procedure, which we have assessed and start with you.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "chef-cuisine": {
    slug: "chef-cuisine",
    title: {
      fr: "Chef de cuisine",
      de: "Küchenchef",
      en: "Head chef",
    },
    intro: {
      fr: "Vous dirigez une cuisine et une brigade : un profil d'encadrement particulièrement recherché par les établissements allemands.",
      de: "Sie leiten eine Küche und eine Brigade: ein Führungsprofil, das von deutschen Betrieben besonders gesucht wird.",
      en: "You lead a kitchen and a brigade: a management profile particularly sought after by German establishments.",
    },
    image: "chef-cuisine",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le chef de cuisine dirige la cuisine et la brigade, conçoit les cartes, gère les coûts et les achats et veille au respect de l'hygiène (HACCP).",
          de: "Der Küchenchef leitet die Küche und die Brigade, gestaltet die Speisekarten, steuert Kosten und Einkauf und achtet auf die Einhaltung der Hygiene (HACCP).",
          en: "The head chef leads the kitchen and the brigade, designs the menus, manages costs and purchasing and ensures hygiene (HACCP) is respected.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire se situe environ entre 3 400 et 4 500 €/mois, avec une médiane autour de 3 700 €/mois ; une source donne une moyenne d'environ 3 733 €/mois (fourchette 35 800 à 52 500 €/an), l'entrée vers 3 100 à 3 400 € et les profils expérimentés en gastronomie entre 4 300 et 5 000 € (source : StepStone, gehalt.de, 2025 et 2026). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal, reste généralement plus basse que dans l'industrie, et les postes en contact avec la clientèle sont complétés par les pourboires.",
          de: "Das Gehalt liegt etwa zwischen 3.400 und 4.500 €/Monat, mit einem Median um 3.700 €/Monat; eine Quelle nennt einen Durchschnitt von rund 3.733 €/Monat (Spanne 35.800 bis 52.500 €/Jahr), den Einstieg bei etwa 3.100 bis 3.400 € und erfahrene Profile in der Gastronomie zwischen 4.300 und 5.000 € (Quelle: StepStone, gehalt.de, 2025 und 2026). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn, liegt in der Regel niedriger als in der Industrie, und Stellen mit Gästekontakt werden durch Trinkgeld ergänzt.",
          en: "Pay ranges roughly between 3,400 and 4,500 €/month, with a median around 3,700 €/month; one source gives an average of about 3,733 €/month (range 35,800 to 52,500 €/year), entry around 3,100 to 3,400 € and experienced fine-dining profiles between 4,300 and 5,000 € (source: StepStone, gehalt.de, 2025 and 2026). Pay follows the regional DEHOGA agreements and the statutory minimum wage, is generally lower than in industry, and guest-facing roles are supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Cuisines d'hôtels et de restaurants de tous segments, chaînes hôtelières, traiteurs, restauration collective, cliniques et cantines recrutent des chefs de cuisine.",
          de: "Küchen von Hotels und Restaurants aller Segmente, Hotelketten, Caterer, Gemeinschaftsverpflegung, Kliniken und Kantinen stellen Küchenchefs ein.",
          en: "Hotel and restaurant kitchens across all segments, hotel chains, caterers, collective catering, clinics and canteens hire head chefs.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : les cuisiniers et les chefs figurent parmi les postes les plus difficiles à pourvoir.",
          de: "Die Perspektiven sind gut: Köche und Küchenchefs zählen zu den am schwersten zu besetzenden Stellen.",
          en: "Prospects are strong: cooks and head chefs are among the hardest positions to fill.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution mène vers la direction d'une brigade plus grande, le Küchenmeister, la direction de la restauration (F&B) ou le conseil.",
          de: "Die Entwicklung führt zur Leitung einer größeren Brigade, zum Küchenmeister, zur Leitung des Food-and-Beverage-Bereichs (F&B) oder in die Beratung.",
          en: "Progression leads to running a larger brigade, Küchenmeister, food and beverage (F&B) management or consulting.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Le B2 est la cible : diriger une brigade et gérer l'hygiène (HACCP) en allemand est nécessaire, et l'anglais est utile.",
          de: "B2 ist das Ziel: Eine Brigade zu führen und die Hygiene (HACCP) auf Deutsch zu steuern ist notwendig, und Englisch ist hilfreich.",
          en: "B2 is the target: leading a brigade and managing hygiene (HACCP) in German is necessary, and English is useful.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Hospitality and catering professions are not regulated: for the skilled worker visa, recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous. Le métier de cuisinier figure parmi les métiers en pénurie reconnus, ce qui facilite le recrutement.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen. Der Beruf des Kochs zählt zu den anerkannten Mangelberufen, was die Einstellung erleichtert.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and prepare the application with you. The profession of cook is among the recognised shortage occupations, which makes recruitment easier.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft und Eingewöhnung.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you through to your arrival and settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle est la différence avec le cuisinier ?",
          de: "Was ist der Unterschied zum Koch?",
          en: "What is the difference from the cook?",
        },
        a: {
          fr: "Le chef de cuisine encadre la brigade, conçoit les cartes et gère les coûts et les achats, là où le cuisinier tient un poste.",
          de: "Der Küchenchef führt die Brigade, gestaltet die Speisekarten und steuert Kosten und Einkauf, während der Koch einen Posten verantwortet.",
          en: "The head chef manages the brigade, designs the menus and controls costs and purchasing, whereas the cook runs a station.",
        },
      },
      {
        q: {
          fr: "Ce poste recrute-t-il en Allemagne ?",
          de: "Gibt es Bedarf an dieser Stelle in Deutschland?",
          en: "Is there hiring for this role in Germany?",
        },
        a: {
          fr: "Oui, la demande est forte : les cuisiniers et les chefs comptent parmi les postes les plus difficiles à pourvoir.",
          de: "Ja, die Nachfrage ist hoch: Köche und Küchenchefs gehören zu den am schwersten zu besetzenden Stellen.",
          en: "Yes, demand is strong: cooks and head chefs are among the hardest positions to fill.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  serveur: {
    slug: "serveur",
    title: {
      fr: "Serveur, personnel de salle",
      de: "Restaurantfachkraft / Kellner",
      en: "Waiter, service staff",
    },
    intro: {
      fr: "Votre sens du service et du contact fait la différence en salle, un métier durablement recherché en Allemagne.",
      de: "Ihr Sinn für Service und Gästekontakt macht im Restaurant den Unterschied, ein in Deutschland dauerhaft gefragter Beruf.",
      en: "Your sense of service and contact makes the difference in the dining room, a profession in lasting demand in Germany.",
    },
    image: "serveur",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le serveur accueille et sert les clients, les conseille, prend les commandes, encaisse et veille à leur satisfaction.",
          de: "Die Restaurantfachkraft empfängt und bedient die Gäste, berät sie, nimmt Bestellungen auf, kassiert und sorgt für ihre Zufriedenheit.",
          en: "The waiter welcomes and serves guests, advises them, takes orders, handles payment and ensures their satisfaction.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 490 €/mois (selon les portails) et le salaire médian du service de l'ordre de 2 400 à 2 500 €/mois (source : aubi-plus, Entgeltatlas, Bundesagentur für Arbeit, 2024). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal, reste généralement plus basse que dans l'industrie, et les pourboires complètent nettement le revenu.",
          de: "Das Einstiegsgehalt liegt bei rund 2.490 €/Monat (laut Portalen) und der Median im Service bei etwa 2.400 bis 2.500 €/Monat (Quelle: aubi-plus, Entgeltatlas, Bundesagentur für Arbeit, 2024). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn, liegt in der Regel niedriger als in der Industrie, und Trinkgeld ergänzt das Einkommen deutlich.",
          en: "The entry salary is around 2,490 €/month (according to the portals) and the service median around 2,400 to 2,500 €/month (source: aubi-plus, Entgeltatlas, Federal Employment Agency, 2024). Pay follows the regional DEHOGA agreements and the statutory minimum wage, is generally lower than in industry, and tips clearly supplement the income.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Restaurants, hôtels (service et F&B), traiteurs événementiels et lieux de congrès recrutent du personnel de salle.",
          de: "Restaurants, Hotels (Service und F&B), Event-Caterer und Kongresszentren stellen Servicepersonal ein.",
          en: "Restaurants, hotels (service and F&B), event caterers and congress venues hire service staff.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : le service reste un métier durablement recherché.",
          de: "Die Perspektiven sind gut: Der Service bleibt ein dauerhaft gefragter Beruf.",
          en: "Prospects are strong: service remains a profession in lasting demand.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution mène vers chef de rang, maître d'hôtel, puis responsable de restauration (F&B).",
          de: "Die Entwicklung führt über den Chef de Rang und den Maître d'Hôtel bis zum Leiter der Gastronomie (F&B).",
          en: "Progression leads to chef de rang, maître d'hôtel, then food and beverage (F&B) manager.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "C'est un métier très en contact avec la clientèle : le B2 est indispensable et l'anglais très utile.",
          de: "Es ist ein Beruf mit sehr viel Gästekontakt: B2 ist unverzichtbar und Englisch sehr nützlich.",
          en: "It is a profession with a great deal of guest contact: B2 is essential and English very useful.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Hospitality and catering professions are not regulated: for the skilled worker visa, recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft und Eingewöhnung.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you through to your arrival and settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Les pourboires comptent-ils vraiment dans ce métier ?",
          de: "Zählt Trinkgeld in diesem Beruf wirklich?",
          en: "Do tips really count in this profession?",
        },
        a: {
          fr: "Oui, dans le service les pourboires constituent un vrai complément de revenu, en plus du salaire de base.",
          de: "Ja, im Service ist Trinkgeld eine echte Einkommensergänzung zusätzlich zum Grundgehalt.",
          en: "Yes, in service tips are a genuine income supplement on top of the base salary.",
        },
      },
      {
        q: {
          fr: "Faut-il de l'expérience pour ce poste ?",
          de: "Ist Erfahrung für diese Stelle erforderlich?",
          en: "Is experience required for this role?",
        },
        a: {
          fr: "L'expérience et la reconnaissance de votre qualification ouvrent le poste ; nous engageons la procédure d'Anerkennung avec vous.",
          de: "Erfahrung und die Anerkennung Ihrer Qualifikation öffnen die Stelle; wir leiten das Anerkennungsverfahren mit Ihnen ein.",
          en: "Experience and recognition of your qualification open the role; we start the Anerkennung procedure with you.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "responsable-restauration": {
    slug: "responsable-restauration",
    title: {
      fr: "Responsable de restauration (F&B)",
      de: "Restaurantleiter / F&B-Manager",
      en: "Restaurant and F&B manager",
    },
    intro: {
      fr: "Vous pilotez la salle, l'équipe et le service : un rôle d'encadrement recherché, surtout dans les grandes villes allemandes.",
      de: "Sie steuern das Restaurant, das Team und den Service: eine gesuchte Führungsrolle, besonders in den großen deutschen Städten.",
      en: "You steer the dining room, the team and the service: a sought-after management role, especially in Germany's large cities.",
    },
    image: "responsable-restauration",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le responsable de restauration dirige la salle et l'équipe, organise le service, la carte et les achats, veille à la satisfaction client et gère le budget.",
          de: "Der Restaurantleiter führt das Restaurant und das Team, organisiert Service, Karte und Einkauf, sorgt für die Gästezufriedenheit und verwaltet das Budget.",
          en: "The restaurant manager leads the dining room and the team, organises the service, the menu and purchasing, ensures guest satisfaction and manages the budget.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En tant que Restaurantleiter, la moyenne est d'environ 2 975 €/mois (entrée 2 330 à 2 915 €) ; en tant que F&B-Manager, elle est plus élevée, avec une médiane d'environ 3 917 €/mois (fourchette 3 500 à 4 333 €), Francfort à environ 3 758 € et Hambourg à environ 3 958 € (source : StepStone, gehalt.de, 2025 et 2026). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal, reste généralement plus basse que dans l'industrie, et les postes en contact avec la clientèle sont complétés par les pourboires.",
          de: "Als Restaurantleiter liegt der Durchschnitt bei rund 2.975 €/Monat (Einstieg 2.330 bis 2.915 €); als F&B-Manager höher, mit einem Median von rund 3.917 €/Monat (Spanne 3.500 bis 4.333 €), Frankfurt bei etwa 3.758 € und Hamburg bei etwa 3.958 € (Quelle: StepStone, gehalt.de, 2025 und 2026). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn, liegt in der Regel niedriger als in der Industrie, und Stellen mit Gästekontakt werden durch Trinkgeld ergänzt.",
          en: "As a Restaurantleiter, the average is around 2,975 €/month (entry 2,330 to 2,915 €); as an F&B manager, higher, with a median of around 3,917 €/month (range 3,500 to 4,333 €), Frankfurt at about 3,758 € and Hamburg at about 3,958 € (source: StepStone, gehalt.de, 2025 and 2026). Pay follows the regional DEHOGA agreements and the statutory minimum wage, is generally lower than in industry, and guest-facing roles are supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Hôtels de milieu et haut de gamme, groupes de restauration, événementiel et chaînes recrutent, surtout dans les grandes villes (Francfort, Hambourg, Munich).",
          de: "Hotels der Mittel- und Oberklasse, Gastronomiegruppen, Eventbranche und Ketten stellen ein, vor allem in den großen Städten (Frankfurt, Hamburg, München).",
          en: "Mid-range and upscale hotels, restaurant groups, the events sector and chains hire, especially in the large cities (Frankfurt, Hamburg, Munich).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont réguliers : les managers expérimentés et polyglottes sont recherchés.",
          de: "Die Perspektiven sind stabil: Erfahrene und mehrsprachige Manager sind gesucht.",
          en: "Prospects are steady: experienced, multilingual managers are sought after.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "L'évolution mène vers F&B-Manager, directeur de la restauration, puis direction d'établissement.",
          de: "Die Entwicklung führt zum F&B-Manager, zum Leiter der Gastronomie und schließlich zur Betriebsleitung.",
          en: "Progression leads to F&B manager, director of catering, then management of the establishment.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "C'est un rôle d'encadrement et de relation client : le B2 et l'anglais sont requis.",
          de: "Es ist eine Rolle mit Führungsverantwortung und Gästekontakt: B2 und Englisch sind erforderlich.",
          en: "It is a role of management and customer relations: B2 and English are required.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Hospitality and catering professions are not regulated: for the skilled worker visa, recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft und Eingewöhnung.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you through to your arrival and settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle différence entre Restaurantleiter et F&B-Manager ?",
          de: "Was ist der Unterschied zwischen Restaurantleiter und F&B-Manager?",
          en: "What is the difference between a Restaurantleiter and an F&B manager?",
        },
        a: {
          fr: "Le F&B-Manager est un poste plus senior, au périmètre plus large et mieux rémunéré que celui de Restaurantleiter.",
          de: "Der F&B-Manager ist eine seniorere Position mit größerem Verantwortungsbereich und besserer Vergütung als der Restaurantleiter.",
          en: "The F&B manager is a more senior position, with a broader scope and better pay than the Restaurantleiter.",
        },
      },
      {
        q: {
          fr: "Faut-il de l'expérience d'encadrement ?",
          de: "Ist Führungserfahrung erforderlich?",
          en: "Is management experience required?",
        },
        a: {
          fr: "Oui, ce poste demande une expérience de management d'équipe, que nous valorisons auprès des employeurs allemands.",
          de: "Ja, diese Stelle erfordert Erfahrung in der Teamführung, die wir bei deutschen Arbeitgebern hervorheben.",
          en: "Yes, this role requires team management experience, which we highlight to German employers.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
