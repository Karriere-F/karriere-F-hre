// Ausbildung-path Commerce & Vente fiches (train in Germany). Populated from
// verified public German data (job titles & durations: Bundesagentur für Arbeit
// / BERUFENET; pay: Entgeltatlas, IHK, BIBB Ausbildungsvergütung). Figures are
// indicative gross ranges; see commerce-fiche-types.ts for the shape and
// SALARY_NOTE.

import type { CommerceFiche } from "../commerce-fiche-types";
import { SALARY_NOTE } from "../commerce-fiche-types";

export const COMMERCE_FICHES_AUSBILDUNG: Record<string, CommerceFiche> = {
  "kaufmann-einzelhandel": {
    slug: "kaufmann-einzelhandel",
    image: "kaufmann-einzelhandel",
    title: {
      fr: "Employé commercial du commerce de détail (Kaufmann/-frau im Einzelhandel)",
      de: "Kaufmann/-frau im Einzelhandel",
      en: "Retail sales clerk (Kaufmann/-frau im Einzelhandel)",
    },
    intro: {
      fr: "L'une des Ausbildungen les plus recrutées d'Allemagne : un métier commercial très large, de la vente et du conseil client à la gestion des marchandises.",
      de: "Eine der am häufigsten besetzten Ausbildungen in Deutschland: ein breiter kaufmännischer Beruf, von Verkauf und Kundenberatung bis zur Warenwirtschaft.",
      en: "One of Germany's most recruited Ausbildungen: a broad commercial role, from sales and customer advice to merchandise management.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Kaufmann im Einzelhandel vend et conseille les clients, encaisse, réceptionne et présente les marchandises, gère les stocks et les commandes, participe aux actions commerciales et de plus en plus au commerce en ligne. C'est un métier polyvalent, présent dans tous les secteurs du commerce.",
          de: "Der Kaufmann im Einzelhandel verkauft und berät Kunden, kassiert, nimmt Waren an und präsentiert sie, steuert Bestände und Bestellungen, wirkt bei Verkaufsaktionen und zunehmend im Onlinehandel mit. Ein vielseitiger Beruf in allen Handelsbranchen.",
          en: "The retail clerk sells and advises customers, handles the checkout, receives and presents goods, manages stock and orders, supports sales campaigns and increasingly online retail. A versatile role present across every retail sector.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 900 à 1 250 €/mois selon la convention et la région (jusqu'à ~1 450 € la 3e année dans certaines branches). À l'entrée après la formation, environ 2 400 à 2 700 €/mois, avec un médian autour de 2 500 € (sources : Entgeltatlas de la Bundesagentur für Arbeit et grilles de branche de l'Einzelhandel). Les discounters et l'automobile paient souvent au-dessus de la moyenne.",
          de: "Während der Ausbildung etwa 900 bis 1.250 €/Monat je nach Tarif und Region (bis ~1.450 € im 3. Jahr in einzelnen Branchen). Zum Einstieg nach der Ausbildung etwa 2.400 bis 2.700 €/Monat, im Median rund 2.500 € (Quellen: Entgeltatlas der Bundesagentur für Arbeit und Einzelhandels-Tarife). Discounter und Autohandel zahlen oft überdurchschnittlich.",
          en: "During the Ausbildung, about 900 to 1,250 €/month depending on the agreement and region (up to ~1,450 € in year 3 in some sectors). On entry after training, about 2,400 to 2,700 €/month, median around 2,500 € (sources: Entgeltatlas of the Federal Employment Agency and Einzelhandel sector scales). Discounters and car retail often pay above average.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre de commerce (IHK). Une sortie après 2 ans est possible avec le diplôme de Verkäufer/in.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung. Nach 2 Jahren ist ein Abschluss als Verkäufer/in möglich.",
          en: "The training lasts 3 years, alternating between the company and the vocational school (Berufsschule), ending with the chamber of commerce (IHK) exam. Exiting after 2 years with the Verkäufer/in qualification is possible.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Grandes enseignes et discounters (Edeka, Rewe, Aldi, Lidl, dm, Rossmann), commerce spécialisé (électronique, meuble, bricolage, textile), grands magasins et chaînes, ainsi que le commerce automobile. Le commerce de détail est l'un des plus gros employeurs et formateurs du pays.",
          de: "Große Handelsketten und Discounter (Edeka, Rewe, Aldi, Lidl, dm, Rossmann), Fachhandel (Elektronik, Möbel, Bau, Textil), Kaufhäuser und Ketten sowie der Autohandel. Der Einzelhandel zählt zu den größten Arbeitgebern und Ausbildern des Landes.",
          en: "Large chains and discounters (Edeka, Rewe, Aldi, Lidl, dm, Rossmann), specialist retail (electronics, furniture, DIY, textiles), department stores and chains, and car retail. Retail is one of the country's largest employers and training providers.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Emploi stable et recrutement rapide. Après quelques années : chef de rayon (Abteilungsleiter), adjoint puis responsable de magasin (Marktleiter), achats, ou spécialisation (e-commerce, visual merchandising). Des qualifications complémentaires (Handelsfachwirt) ouvrent l'encadrement.",
          de: "Sicherer Arbeitsplatz und schnelle Einstellung. Nach einigen Jahren: Abteilungsleiter, stellvertretende und dann Marktleitung, Einkauf oder Spezialisierung (E-Commerce, Visual Merchandising). Weiterbildungen (Handelsfachwirt) führen in die Führung.",
          en: "Stable employment and fast hiring. After a few years: department manager, deputy then store manager, purchasing, or specialisation (e-commerce, visual merchandising). Further qualifications (Handelsfachwirt) open management roles.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" },
        body: {
          fr: "Le contact client permanent demande un bon allemand : le niveau B2 est le standard pour une Ausbildung commerciale. Karriere Fähre vous forme du niveau débutant jusqu'au B2 à Douala, avant le départ.",
          de: "Der ständige Kundenkontakt erfordert gutes Deutsch: B2 ist der Standard für eine kaufmännische Ausbildung. Karriere Fähre bildet Sie in Douala vom Anfängerniveau bis B2 aus, vor der Ausreise.",
          en: "Constant customer contact requires good German: B2 is the standard for a commercial Ausbildung. Karriere Fähre trains you from beginner level up to B2 in Douala, before departure.",
        },
      },
      {
        heading: { fr: "Accès et visa", de: "Zugang und Visum", en: "Access and visa" },
        body: {
          fr: "Il faut un contrat d'Ausbildung avec une entreprise, le niveau d'allemand requis et un visa de formation (§ 16a de la loi allemande sur le séjour). Nous vous préparons, vous mettons en relation avec un employeur formateur et gérons les démarches avec vous.",
          de: "Erforderlich sind ein Ausbildungsvertrag mit einem Betrieb, das nötige Deutschniveau und ein Ausbildungsvisum (§ 16a AufenthG). Wir bereiten Sie vor, vermitteln einen Ausbildungsbetrieb und übernehmen die Formalitäten mit Ihnen.",
          en: "You need an Ausbildung contract with a company, the required German level and a training visa (§ 16a of the German Residence Act). We prepare you, match you with a training employer and handle the paperwork with you.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il un diplôme pour commencer cette Ausbildung ?", de: "Braucht man einen Schulabschluss für diese Ausbildung?", en: "Do I need a diploma to start this Ausbildung?" },
        a: {
          fr: "Aucun diplôme supérieur n'est exigé : l'Ausbildung est justement la voie pour apprendre le métier. Un bon niveau d'allemand (B2) et la motivation sont l'essentiel.",
          de: "Ein höherer Abschluss ist nicht erforderlich: Die Ausbildung ist gerade der Weg, den Beruf zu erlernen. Wichtig sind gutes Deutsch (B2) und Motivation.",
          en: "No higher diploma is required: the Ausbildung is precisely the way to learn the trade. Good German (B2) and motivation are what matter.",
        },
      },
      {
        q: { fr: "L'Ausbildung est-elle rémunérée ?", de: "Wird die Ausbildung vergütet?", en: "Is the Ausbildung paid?" },
        a: {
          fr: "Oui, dès la première année (environ 900 à 1 250 €/mois selon la branche et la région), avec une progression chaque année.",
          de: "Ja, ab dem ersten Jahr (etwa 900 bis 1.250 €/Monat je nach Branche und Region), mit jährlicher Steigerung.",
          en: "Yes, from the first year (about 900 to 1,250 €/month depending on the sector and region), rising each year.",
        },
      },
      {
        q: { fr: "Que puis-je faire après ?", de: "Was kann ich danach machen?", en: "What can I do afterwards?" },
        a: {
          fr: "Travailler dans tout le commerce, évoluer vers chef de rayon puis responsable de magasin, ou vous spécialiser (achats, e-commerce). Une qualification Handelsfachwirt ouvre l'encadrement.",
          de: "Im gesamten Handel arbeiten, zum Abteilungs- und Marktleiter aufsteigen oder sich spezialisieren (Einkauf, E-Commerce). Ein Handelsfachwirt öffnet die Führungsebene.",
          en: "Work across retail, progress to department then store manager, or specialise (purchasing, e-commerce). A Handelsfachwirt qualification opens management.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  verkaeufer: {
    slug: "verkaeufer",
    image: "verkaeufer",
    title: {
      fr: "Vendeur / vendeuse (Verkäufer/in)",
      de: "Verkäufer/in",
      en: "Salesperson (Verkäufer/in)",
    },
    intro: {
      fr: "Une porte d'entrée rapide dans le commerce allemand : une Ausbildung de 2 ans centrée sur la vente, le conseil et la caisse.",
      de: "Ein schneller Einstieg in den deutschen Handel: eine 2-jährige Ausbildung mit Fokus auf Verkauf, Beratung und Kasse.",
      en: "A fast entry into German retail: a 2-year Ausbildung focused on selling, advice and the checkout.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Verkäufer accueille et conseille les clients, présente les produits, encaisse, réceptionne et range les marchandises. C'est la base du métier commercial, avec un contact client permanent.",
          de: "Der Verkäufer empfängt und berät Kunden, präsentiert Produkte, kassiert, nimmt Waren an und räumt ein. Die Grundlage des kaufmännischen Berufs, mit ständigem Kundenkontakt.",
          en: "The salesperson welcomes and advises customers, presents products, handles the checkout, receives and stocks goods. The foundation of the commercial trade, with constant customer contact.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 940 à 1 250 €/mois selon la région et la convention (la rémunération minimale légale de l'apprentissage s'applique). À l'entrée, environ 2 300 à 2 600 €/mois (sources : Entgeltatlas de la Bundesagentur für Arbeit, grilles de branche). Montants indicatifs, variables selon l'employeur et la région.",
          de: "Während der Ausbildung etwa 940 bis 1.250 €/Monat je nach Region und Tarif (die gesetzliche Mindestausbildungsvergütung gilt). Zum Einstieg etwa 2.300 bis 2.600 €/Monat (Quellen: Entgeltatlas der Bundesagentur für Arbeit, Branchentarife). Richtwerte, je nach Arbeitgeber und Region unterschiedlich.",
          en: "During the Ausbildung, about 940 to 1,250 €/month depending on region and agreement (the statutory minimum training pay applies). On entry, about 2,300 to 2,600 €/month (sources: Entgeltatlas of the Federal Employment Agency, sector scales). Indicative figures, varying by employer and region.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 2 ans, en alternance entreprise / école professionnelle. Elle peut être prolongée d'un an pour obtenir le diplôme de Kaufmann im Einzelhandel (3 ans au total).",
          de: "Die Ausbildung dauert 2 Jahre, im Wechsel zwischen Betrieb und Berufsschule. Sie kann um ein Jahr zum Kaufmann im Einzelhandel verlängert werden (insgesamt 3 Jahre).",
          en: "The training lasts 2 years, alternating company / vocational school. It can be extended by one year to the Kaufmann im Einzelhandel qualification (3 years total).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Supermarchés et discounters (Edeka, Rewe, Aldi, Lidl), drogueries (dm, Rossmann), commerce spécialisé et grandes chaînes. Le besoin de personnel de vente est constant dans tout le pays.",
          de: "Supermärkte und Discounter (Edeka, Rewe, Aldi, Lidl), Drogerien (dm, Rossmann), Fachhandel und große Ketten. Der Bedarf an Verkaufspersonal ist bundesweit konstant.",
          en: "Supermarkets and discounters (Edeka, Rewe, Aldi, Lidl), drugstores (dm, Rossmann), specialist retail and large chains. Demand for sales staff is constant nationwide.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Après le diplôme, vous pouvez poursuivre vers le Kaufmann im Einzelhandel, puis évoluer vers chef de rayon et responsable de magasin. La vente reste un secteur qui embauche vite.",
          de: "Nach dem Abschluss können Sie zum Kaufmann im Einzelhandel weitergehen und dann zum Abteilungs- und Marktleiter aufsteigen. Der Verkauf bleibt eine Branche mit schneller Einstellung.",
          en: "After qualifying, you can continue to Kaufmann im Einzelhandel, then progress to department and store manager. Sales remains a fast-hiring sector.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard pour une Ausbildung commerciale, en raison du contact client. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard für eine kaufmännische Ausbildung, wegen des Kundenkontakts. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard for a commercial Ausbildung, because of customer contact. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Quelle différence avec le Kaufmann im Einzelhandel ?", de: "Was ist der Unterschied zum Kaufmann im Einzelhandel?", en: "What's the difference from the Kaufmann im Einzelhandel?" },
        a: {
          fr: "Verkäufer dure 2 ans et se concentre sur la vente ; le Kaufmann im Einzelhandel dure 3 ans et ajoute la gestion commerciale. On peut passer de l'un à l'autre.",
          de: "Verkäufer dauert 2 Jahre mit Fokus Verkauf; der Kaufmann im Einzelhandel dauert 3 Jahre und ergänzt die kaufmännische Steuerung. Ein Übergang ist möglich.",
          en: "Verkäufer lasts 2 years focused on selling; the Kaufmann im Einzelhandel lasts 3 years and adds commercial management. You can move from one to the other.",
        },
      },
      {
        q: { fr: "Faut-il déjà parler allemand ?", de: "Muss ich schon Deutsch sprechen?", en: "Do I need to speak German already?" },
        a: {
          fr: "Non. Nous vous formons du niveau débutant jusqu'au B2 requis, à Douala, avant le départ.",
          de: "Nein. Wir bilden Sie in Douala vom Anfängerniveau bis zum erforderlichen B2 aus, vor der Ausreise.",
          en: "No. We train you from beginner level up to the required B2 in Douala, before departure.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "kaufmann-ecommerce": {
    slug: "kaufmann-ecommerce",
    image: "kaufmann-ecommerce",
    title: {
      fr: "Commercial e-commerce (Kaufmann/-frau im E-Commerce)",
      de: "Kaufmann/-frau im E-Commerce",
      en: "E-commerce clerk (Kaufmann/-frau im E-Commerce)",
    },
    intro: {
      fr: "Le métier idéal pour un profil commerce + digital : vente en ligne, marketplaces, marketing et relation client dans le commerce numérique allemand.",
      de: "Der ideale Beruf für ein Profil Handel + Digital: Onlineverkauf, Marktplätze, Marketing und Kundenservice im deutschen Onlinehandel.",
      en: "The ideal role for a commerce + digital profile: online sales, marketplaces, marketing and customer service in German online retail.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Kaufmann im E-Commerce gère les boutiques en ligne et les marketplaces : sélection et présentation des produits, prix, commandes et paiements, marketing digital, service client et analyse des ventes. Un métier récent, créé en 2018, en forte demande.",
          de: "Der Kaufmann im E-Commerce betreut Onlineshops und Marktplätze: Produktauswahl und -präsentation, Preise, Bestellungen und Zahlungen, Onlinemarketing, Kundenservice und Verkaufsanalyse. Ein junger, 2018 eingeführter Beruf mit hoher Nachfrage.",
          en: "The e-commerce clerk runs online shops and marketplaces: product selection and presentation, pricing, orders and payments, digital marketing, customer service and sales analysis. A recent profession, introduced in 2018, in strong demand.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 900 à 1 340 €/mois selon la région et la branche. À l'entrée après la formation, environ 2 600 à 3 100 €/mois, avec une moyenne autour de 2 800 € (sources : Entgeltatlas de la Bundesagentur für Arbeit, données de branche). Les grandes entreprises tarifées peuvent démarrer au-dessus de 3 000 €.",
          de: "Während der Ausbildung etwa 900 bis 1.340 €/Monat je nach Region und Branche. Zum Einstieg nach der Ausbildung etwa 2.600 bis 3.100 €/Monat, im Schnitt rund 2.800 € (Quellen: Entgeltatlas der Bundesagentur für Arbeit, Branchendaten). Große tarifgebundene Unternehmen starten teils über 3.000 €.",
          en: "During the Ausbildung, about 900 to 1,340 €/month depending on region and sector. On entry after training, about 2,600 to 3,100 €/month, averaging around 2,800 € (sources: Entgeltatlas of the Federal Employment Agency, sector data). Large agreement-bound firms can start above 3,000 €.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen de la chambre de commerce (IHK). Le contenu mêle commerce, marketing digital et outils du e-commerce.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit IHK-Abschlussprüfung. Die Inhalte verbinden Handel, Onlinemarketing und E-Commerce-Werkzeuge.",
          en: "The training lasts 3 years, alternating company / vocational school, with the chamber of commerce (IHK) exam. Content combines commerce, digital marketing and e-commerce tools.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Pure players du e-commerce, grandes enseignes avec boutique en ligne (Otto, Zalando, MediaMarkt, les groupes de la grande distribution), marques et fabricants, agences et prestataires logistiques du commerce en ligne.",
          de: "Reine Onlinehändler, große Handelsketten mit Onlineshop (Otto, Zalando, MediaMarkt, Handelskonzerne), Marken und Hersteller, Agenturen und Logistikdienstleister des Onlinehandels.",
          en: "Pure e-commerce players, large chains with an online shop (Otto, Zalando, MediaMarkt, retail groups), brands and manufacturers, agencies and online-retail logistics providers.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Le e-commerce est en croissance et manque de profils qualifiés. Évolutions possibles : gestion de boutique en ligne, marketing en ligne (SEO/SEA), gestion de catégories, ou spécialisation Fachwirt im E-Commerce.",
          de: "Der E-Commerce wächst und es fehlen qualifizierte Profile. Mögliche Entwicklungen: Onlineshop-Management, Onlinemarketing (SEO/SEA), Category Management oder Fachwirt im E-Commerce.",
          en: "E-commerce is growing and short of qualified profiles. Possible progression: online shop management, online marketing (SEO/SEA), category management, or Fachwirt im E-Commerce.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard pour cette Ausbildung commerciale. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard für diese kaufmännische Ausbildung. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard for this commercial Ausbildung. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il des compétences en informatique ?", de: "Braucht man IT-Kenntnisse?", en: "Do I need IT skills?" },
        a: {
          fr: "Une aisance avec les outils numériques aide beaucoup, mais l'Ausbildung enseigne les compétences e-commerce. C'est un métier commerce + digital, pas de la programmation.",
          de: "Sicherer Umgang mit digitalen Werkzeugen hilft sehr, die Ausbildung vermittelt aber die E-Commerce-Kompetenzen. Ein Beruf Handel + Digital, keine Programmierung.",
          en: "Confidence with digital tools helps a lot, but the Ausbildung teaches the e-commerce skills. It's a commerce + digital role, not programming.",
        },
      },
      {
        q: { fr: "Le métier recrute-t-il vraiment ?", de: "Wird in diesem Beruf wirklich eingestellt?", en: "Is there real hiring in this field?" },
        a: {
          fr: "Oui : le commerce en ligne continue de croître et manque de profils formés, ce qui en fait une voie porteuse.",
          de: "Ja: Der Onlinehandel wächst weiter und es fehlen ausgebildete Profile, was den Beruf zukunftssicher macht.",
          en: "Yes: online retail keeps growing and lacks trained profiles, which makes it a promising path.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "kaufmann-grosshandel": {
    slug: "kaufmann-grosshandel",
    image: "kaufmann-grosshandel",
    title: {
      fr: "Commerce de gros et extérieur (Kaufmann/-frau für Groß- und Außenhandelsmanagement)",
      de: "Kaufmann/-frau für Groß- und Außenhandelsmanagement",
      en: "Wholesale & foreign trade (Kaufmann/-frau für Groß- und Außenhandelsmanagement)",
    },
    intro: {
      fr: "Le métier du commerce entre entreprises : achats, ventes, fournisseurs et commerce international, au cœur de l'économie exportatrice allemande.",
      de: "Der Beruf des Handels zwischen Unternehmen: Einkauf, Verkauf, Lieferanten und internationaler Handel, im Herzen der deutschen Exportwirtschaft.",
      en: "The business-to-business trade profession: purchasing, sales, suppliers and international trade, at the heart of Germany's export economy.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Ce commercial achète des marchandises en gros et les revend aux entreprises, négocie avec les fournisseurs, gère les commandes, les stocks, la logistique et, dans l'orientation commerce extérieur, les échanges internationaux et le dédouanement.",
          de: "Dieser Kaufmann kauft Waren im Großhandel ein und verkauft sie an Unternehmen, verhandelt mit Lieferanten, steuert Bestellungen, Bestände, Logistik und – in der Fachrichtung Außenhandel – den internationalen Handel und die Zollabwicklung.",
          en: "This clerk buys goods wholesale and resells them to businesses, negotiates with suppliers, manages orders, stock and logistics and, in the foreign-trade specialism, international trade and customs clearance.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "À l'entrée après la formation, environ 2 700 à 3 200 €/mois, souvent 2 900 à 3 100 € en moyenne et jusqu'à ~3 300 € dans les entreprises tarifées (sources : données de branche et portails de rémunération allemands). Le commerce technique, la chimie et la pharmacie paient au-dessus de la moyenne. Montants indicatifs.",
          de: "Zum Einstieg nach der Ausbildung etwa 2.700 bis 3.200 €/Monat, oft 2.900 bis 3.100 € im Schnitt und bis ~3.300 € in tarifgebundenen Unternehmen (Quellen: Branchendaten und deutsche Gehaltsportale). Technischer Handel, Chemie und Pharma zahlen überdurchschnittlich. Richtwerte.",
          en: "On entry after training, about 2,700 to 3,200 €/month, often 2,900 to 3,100 € on average and up to ~3,300 € in agreement-bound firms (sources: sector data and German salary portals). Technical trade, chemicals and pharma pay above average. Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen IHK et le choix d'une orientation (commerce de gros ou commerce extérieur).",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit IHK-Prüfung und Wahl einer Fachrichtung (Großhandel oder Außenhandel).",
          en: "The training lasts 3 years, alternating company / vocational school, with the IHK exam and a choice of specialism (wholesale or foreign trade).",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Grossistes et distributeurs, importateurs et exportateurs, industrie et commerce technique, groupes internationaux. L'Allemagne étant une grande nation exportatrice, les besoins sont importants et durables.",
          de: "Großhändler und Distributoren, Importeure und Exporteure, Industrie und technischer Handel, internationale Konzerne. Als große Exportnation hat Deutschland dauerhaft hohen Bedarf.",
          en: "Wholesalers and distributors, importers and exporters, industry and technical trade, international groups. As a major exporting nation, Germany has substantial and lasting demand.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Évolutions vers les achats, la vente, la gestion des grands comptes, la logistique ou l'international. Des qualifications (Handelsfachwirt, Betriebswirt) mènent à l'encadrement.",
          de: "Entwicklung in Einkauf, Vertrieb, Key-Account, Logistik oder das internationale Geschäft. Weiterbildungen (Handelsfachwirt, Betriebswirt) führen in die Führung.",
          en: "Progression into purchasing, sales, key-account management, logistics or international business. Qualifications (Handelsfachwirt, Betriebswirt) lead to management.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard ; l'anglais est un atout pour le commerce extérieur. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard; Englisch ist im Außenhandel von Vorteil. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard; English is an asset for foreign trade. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Quelle différence avec le commerce de détail ?", de: "Was ist der Unterschied zum Einzelhandel?", en: "What's the difference from retail?" },
        a: {
          fr: "Le commerce de gros vend aux entreprises (B2B), pas aux particuliers, avec une forte dimension achats, logistique et, souvent, international.",
          de: "Der Großhandel verkauft an Unternehmen (B2B), nicht an Endkunden, mit starkem Fokus auf Einkauf, Logistik und oft international.",
          en: "Wholesale sells to businesses (B2B), not consumers, with a strong purchasing, logistics and often international dimension.",
        },
      },
      {
        q: { fr: "L'anglais est-il obligatoire ?", de: "Ist Englisch Pflicht?", en: "Is English required?" },
        a: {
          fr: "L'allemand B2 reste l'essentiel. L'anglais est un vrai plus pour l'orientation commerce extérieur.",
          de: "Deutsch B2 ist entscheidend. Englisch ist ein echtes Plus für die Fachrichtung Außenhandel.",
          en: "German B2 is essential. English is a real plus for the foreign-trade specialism.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  automobilkaufmann: {
    slug: "automobilkaufmann",
    image: "automobilkaufmann",
    title: {
      fr: "Commercial automobile (Automobilkaufmann/-frau)",
      de: "Automobilkaufmann/-frau",
      en: "Automotive sales clerk (Automobilkaufmann/-frau)",
    },
    intro: {
      fr: "Le métier commercial du secteur automobile allemand : vente, service et gestion au sein des concessions et des groupes du secteur.",
      de: "Der kaufmännische Beruf der deutschen Automobilbranche: Verkauf, Service und Verwaltung in Autohäusern und Konzernen der Branche.",
      en: "The commercial role of the German automotive sector: sales, service and administration within dealerships and industry groups.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'Automobilkaufmann gère les activités commerciales et administratives d'une concession : vente de véhicules et de services, financement et assurance, gestion des pièces, service après-vente, marketing et suivi client.",
          de: "Der Automobilkaufmann steuert die kaufmännischen und administrativen Abläufe eines Autohauses: Verkauf von Fahrzeugen und Dienstleistungen, Finanzierung und Versicherung, Teilewirtschaft, Kundendienst, Marketing und Kundenbetreuung.",
          en: "The automotive clerk runs the commercial and administrative side of a dealership: vehicle and service sales, financing and insurance, parts management, after-sales, marketing and customer care.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "À l'entrée après la formation, environ 2 400 à 3 100 €/mois selon la taille de l'entreprise, la région et la convention, souvent autour de 2 850 € (sources : portails de rémunération allemands, données de branche). Des primes liées aux ventes peuvent s'ajouter. Montants indicatifs.",
          de: "Zum Einstieg nach der Ausbildung etwa 2.400 bis 3.100 €/Monat je nach Betriebsgröße, Region und Tarif, oft um 2.850 € (Quellen: deutsche Gehaltsportale, Branchendaten). Verkaufsabhängige Prämien können hinzukommen. Richtwerte.",
          en: "On entry after training, about 2,400 to 3,100 €/month depending on company size, region and agreement, often around 2,850 € (sources: German salary portals, sector data). Sales-linked bonuses may be added. Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen IHK. Elle se déroule le plus souvent en concession.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit IHK-Prüfung. Sie findet meist im Autohaus statt.",
          en: "The training lasts 3 years, alternating company / vocational school, with the IHK exam. It usually takes place in a dealership.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Concessions et groupes de distribution automobile, constructeurs et leurs réseaux, importateurs, sociétés de leasing et de financement. Le secteur automobile est un pilier de l'économie allemande.",
          de: "Autohäuser und Handelsgruppen, Hersteller und ihre Netze, Importeure, Leasing- und Finanzierungsgesellschaften. Die Automobilbranche ist eine Säule der deutschen Wirtschaft.",
          en: "Dealerships and automotive retail groups, manufacturers and their networks, importers, leasing and financing companies. The automotive sector is a pillar of the German economy.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Évolutions vers la vente de véhicules, la gestion du service, la responsabilité d'un département ou d'une concession, avec des qualifications complémentaires (Automobilverkäufer, Fachwirt).",
          de: "Entwicklung in den Fahrzeugverkauf, das Servicemanagement, die Leitung einer Abteilung oder eines Autohauses, mit Weiterbildungen (Automobilverkäufer, Fachwirt).",
          en: "Progression into vehicle sales, service management, running a department or a dealership, with further qualifications (Automobilverkäufer, Fachwirt).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard, en raison du contact client et administratif. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard, wegen des Kunden- und Verwaltungskontakts. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard, because of customer and administrative contact. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il des connaissances techniques en mécanique ?", de: "Braucht man technisches Wissen in Mechanik?", en: "Do I need technical/mechanical knowledge?" },
        a: {
          fr: "Non : c'est un métier commercial et administratif. Un intérêt pour l'automobile aide, mais la mécanique relève d'un autre métier (Kfz-Mechatroniker).",
          de: "Nein: Es ist ein kaufmännischer und administrativer Beruf. Interesse an Autos hilft, die Mechanik gehört aber zu einem anderen Beruf (Kfz-Mechatroniker).",
          en: "No: it's a commercial and administrative role. An interest in cars helps, but mechanics belong to another trade (Kfz-Mechatroniker).",
        },
      },
      {
        q: { fr: "Y a-t-il des primes ?", de: "Gibt es Prämien?", en: "Are there bonuses?" },
        a: {
          fr: "Selon l'entreprise, des primes liées aux ventes peuvent compléter le salaire de base.",
          de: "Je nach Unternehmen können verkaufsabhängige Prämien das Grundgehalt ergänzen.",
          en: "Depending on the company, sales-linked bonuses may top up the base salary.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
