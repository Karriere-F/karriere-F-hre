// Static registry for /candidats/metiers -- rendered as anchored sections on a single
// page (matching the founder's reference design), not separate routes per category.
// dbCategory maps each section to the matching shortage_occupations.category value so
// the page can link out to live listings; null means no occupations have been
// published in that DB category yet.

import type { Locale } from "../../i18n/routing";

type LocalizedText = Record<Locale, string>;

export const METIER_CATEGORIES: Record<
  string,
  {
    dbCategory: string | null;
    title: LocalizedText;
    tagline: LocalizedText;
    body: LocalizedText;
    jobs: { label: LocalizedText; de: string }[];
    specialCase?: {
      title: LocalizedText;
      levelLabel: string;
      body: LocalizedText;
      steps: LocalizedText[];
    };
  }
> = {
  "sante-soins": {
    dbCategory: "healthcare",
    title: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Healthcare" },
    tagline: {
      fr: "Le secteur qui recrute le plus : hôpitaux, cliniques, EHPAD.",
      de: "Der Sektor mit dem größten Bedarf: Krankenhäuser, Kliniken, Pflegeheime.",
      en: "The sector hiring the most: hospitals, clinics, care homes.",
    },
    body: {
      fr: "Le secteur de la santé allemand recherche activement du personnel qualifié, en particulier dans les soins infirmiers. La reconnaissance du diplôme est une étape clé de ce parcours, que nous accompagnons dès le départ.",
      de: "Der deutsche Gesundheitssektor sucht aktiv qualifiziertes Personal, insbesondere in der Krankenpflege. Die Anerkennung des Abschlusses ist ein zentraler Schritt, den wir von Anfang an begleiten.",
      en: "Germany's healthcare sector is actively looking for qualified staff, especially in nursing care. Diploma recognition is a key step in this path, which we support from the start.",
    },
    jobs: [
      { label: { fr: "Infirmier(ère)", de: "Pflegefachkraft", en: "Nurse" }, de: "Pflegefachkraft" },
      { label: { fr: "Aide-soignant(e)", de: "Pflegehelfer", en: "Care assistant" }, de: "Pflegehelfer" },
      { label: { fr: "Soins aux aînés", de: "Altenpflege", en: "Elderly care" }, de: "Altenpflege" },
      { label: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" }, de: "Hebamme" },
      { label: { fr: "Médico-technique", de: "MTA", en: "Medical-technical" }, de: "MTA" },
    ],
    specialCase: {
      title: {
        fr: "Cas particulier : les médecins (Arzt / Ärztin)",
        de: "Sonderfall: Ärzte (Arzt / Ärztin)",
        en: "Special case: doctors (Arzt / Ärztin)",
      },
      levelLabel: "C1",
      body: {
        fr: "Exercer la médecine en Allemagne exige l'Approbation (autorisation d'exercer). Au-delà du niveau B2 général, les médecins doivent réussir la Fachsprachprüfung, l'examen d'allemand médical de niveau C1. La reconnaissance du diplôme peut nécessiter un examen de connaissances (Kenntnisprüfung). Un permis temporaire (Berufserlaubnis) permet souvent de commencer à exercer avant l'Approbation complète.",
        de: "Um in Deutschland als Arzt zu praktizieren, ist die Approbation erforderlich. Über das allgemeine B2-Niveau hinaus müssen Ärzte die Fachsprachprüfung bestehen, die medizinische Deutschprüfung auf Niveau C1. Die Anerkennung des Abschlusses kann eine Kenntnisprüfung erfordern. Eine Berufserlaubnis ermöglicht oft die Tätigkeit vor der vollständigen Approbation.",
        en: "Practicing medicine in Germany requires the Approbation (license to practice). Beyond the general B2 level, doctors must pass the Fachsprachprüfung, the C1-level medical German exam. Diploma recognition may require a knowledge exam (Kenntnisprüfung). A temporary permit (Berufserlaubnis) often allows practice to begin before full Approbation.",
      },
      steps: [
        { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        { fr: "Fachsprachprüfung C1", de: "Fachsprachprüfung C1", en: "Fachsprachprüfung C1" },
        { fr: "Berufserlaubnis", de: "Berufserlaubnis", en: "Berufserlaubnis" },
        { fr: "Kenntnisprüfung (si requise)", de: "Kenntnisprüfung (falls erforderlich)", en: "Kenntnisprüfung (if required)" },
        { fr: "Approbation", de: "Approbation", en: "Approbation" },
      ],
    },
  },
  "hotellerie-restauration": {
    dbCategory: null,
    title: { fr: "Hôtellerie-restauration", de: "Hotel- und Gaststättengewerbe", en: "Hospitality & catering" },
    tagline: {
      fr: "Hôtels et restaurants en tension : cuisine, salle, réception.",
      de: "Angespannte Hotels und Restaurants: Küche, Service, Rezeption.",
      en: "Hotels and restaurants under pressure: kitchen, service, front desk.",
    },
    body: {
      fr: "L'hôtellerie-restauration allemande fait face à une pénurie de personnel qualifié depuis plusieurs années. C'est un secteur accessible avec un niveau d'allemand B2 et une expérience ou une formation dans le métier.",
      de: "Das deutsche Hotel- und Gaststättengewerbe leidet seit Jahren unter Fachkräftemangel. Mit Deutschniveau B2 und Erfahrung oder Ausbildung im Beruf ist dieser Sektor gut zugänglich.",
      en: "German hospitality has faced a staff shortage for years. It's an accessible sector with B2-level German and experience or training in the trade.",
    },
    jobs: [
      { label: { fr: "Cuisinier(ère)", de: "Koch", en: "Cook" }, de: "Koch" },
      { label: { fr: "Commis de cuisine", de: "Küchenhilfe", en: "Kitchen assistant" }, de: "Küchenhilfe" },
      { label: { fr: "Service en salle", de: "Restaurantfachmann", en: "Waitstaff" }, de: "Restaurantfachmann" },
      { label: { fr: "Réception", de: "Hotelfachmann", en: "Front desk" }, de: "Hotelfachmann" },
      { label: { fr: "Personnel d'étage", de: "Housekeeping", en: "Housekeeping" }, de: "Housekeeping" },
    ],
  },
  "btp-artisanat": {
    dbCategory: "skilled_trades",
    title: { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & trades" },
    tagline: {
      fr: "Artisans qualifiés très recherchés dans tout le pays.",
      de: "Qualifizierte Handwerker sind im ganzen Land sehr gefragt.",
      en: "Qualified tradespeople in high demand nationwide.",
    },
    body: {
      fr: "Le BTP et l'artisanat allemands manquent de main-d'œuvre qualifiée sur presque tout le territoire. Une expérience pratique ou une qualification reconnue est un atout majeur pour ces métiers.",
      de: "Das deutsche Bau- und Handwerksgewerbe hat fast flächendeckend zu wenig Fachkräfte. Praktische Erfahrung oder eine anerkannte Qualifikation sind für diese Berufe ein großer Vorteil.",
      en: "German construction and trades lack skilled workers almost nationwide. Hands-on experience or a recognized qualification is a major advantage for these occupations.",
    },
    jobs: [
      { label: { fr: "Électricien", de: "Elektroniker", en: "Electrician" }, de: "Elektroniker" },
      { label: { fr: "Plombier-chauffagiste", de: "Anlagenmechaniker SHK", en: "Plumber/heating" }, de: "Anlagenmechaniker SHK" },
      { label: { fr: "Soudeur", de: "Schweißer", en: "Welder" }, de: "Schweißer" },
      { label: { fr: "Maçon", de: "Maurer", en: "Mason" }, de: "Maurer" },
      { label: { fr: "Peintre", de: "Maler", en: "Painter" }, de: "Maler" },
    ],
  },
  "industrie-technique": {
    dbCategory: "engineering",
    title: { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical trades" },
    tagline: {
      fr: "Le moteur de l'économie allemande cherche des techniciens.",
      de: "Der Motor der deutschen Wirtschaft sucht Techniker.",
      en: "The engine of the German economy is looking for technicians.",
    },
    body: {
      fr: "L'industrie allemande, moteur de son économie, recherche des profils techniques à tous les niveaux de qualification. Nous orientons les candidats selon leur formation initiale et leur expérience.",
      de: "Die deutsche Industrie, Motor ihrer Wirtschaft, sucht technische Profile auf allen Qualifikationsstufen. Wir orientieren Kandidaten je nach Ausbildung und Erfahrung.",
      en: "German industry, the backbone of its economy, seeks technical profiles at every qualification level. We guide candidates according to their background and experience.",
    },
    jobs: [
      { label: { fr: "Mécatronicien", de: "Mechatroniker", en: "Mechatronics technician" }, de: "Mechatroniker" },
      { label: { fr: "Soudeur", de: "Schweißer", en: "Welder" }, de: "Schweißer" },
      { label: { fr: "Maintenance", de: "Instandhaltung", en: "Maintenance" }, de: "Instandhaltung" },
      { label: { fr: "Usinage CNC", de: "Zerspanungsmechaniker", en: "CNC machining" }, de: "Zerspanungsmechaniker" },
      { label: { fr: "Électrotechnicien", de: "Elektroniker", en: "Electrical technician" }, de: "Elektroniker" },
    ],
  },
  informatique: {
    dbCategory: "it",
    title: { fr: "Informatique", de: "IT", en: "IT" },
    tagline: {
      fr: "Forte demande tech ; l'anglais est un atout, l'allemand ouvre plus de postes.",
      de: "Hohe Tech-Nachfrage; Englisch ist ein Plus, Deutsch öffnet mehr Stellen.",
      en: "Strong tech demand; English helps, German opens more roles.",
    },
    body: {
      fr: "Le secteur informatique allemand recrute à tous les niveaux, avec une attention particulière portée aux compétences techniques autant qu'au niveau d'allemand pour l'intégration en entreprise.",
      de: "Der deutsche IT-Sektor stellt auf allen Ebenen ein, mit besonderem Augenmerk sowohl auf technische Fähigkeiten als auch auf das Deutschniveau für die Integration im Unternehmen.",
      en: "Germany's IT sector hires at every level, with attention to both technical skills and German proficiency for workplace integration.",
    },
    jobs: [
      { label: { fr: "Développeur(se)", de: "Softwareentwickler", en: "Developer" }, de: "Softwareentwickler" },
      { label: { fr: "Admin sys/réseau", de: "Systemadministrator", en: "Sysadmin" }, de: "Systemadministrator" },
      { label: { fr: "Support IT", de: "IT-Support", en: "IT support" }, de: "IT-Support" },
      { label: { fr: "Data", de: "Data Analyst", en: "Data" }, de: "Data Analyst" },
      { label: { fr: "Cybersécurité", de: "IT-Security", en: "Cybersecurity" }, de: "IT-Security" },
    ],
  },
  "transport-logistique": {
    dbCategory: "drivers",
    title: { fr: "Transport & logistique", de: "Transport & Logistik", en: "Transport & logistics" },
    tagline: {
      fr: "E-commerce et industrie : conducteurs et logisticiens recherchés.",
      de: "E-Commerce und Industrie: Fahrer und Logistiker gesucht.",
      en: "E-commerce and industry: drivers and logistics staff in demand.",
    },
    body: {
      fr: "La croissance du e-commerce et les besoins de l'industrie allemande créent une forte demande de conducteurs et de personnel logistique, un secteur accessible dès le niveau B2.",
      de: "Das Wachstum des E-Commerce und der Bedarf der deutschen Industrie schaffen eine starke Nachfrage nach Fahrern und Logistikpersonal, ein Sektor, der bereits ab Niveau B2 zugänglich ist.",
      en: "The growth of e-commerce and the needs of German industry create strong demand for drivers and logistics staff, a sector accessible from B2 level.",
    },
    jobs: [
      { label: { fr: "Conducteur PL", de: "Berufskraftfahrer", en: "Truck driver" }, de: "Berufskraftfahrer" },
      { label: { fr: "Chauffeur bus", de: "Busfahrer", en: "Bus driver" }, de: "Busfahrer" },
      { label: { fr: "Cariste", de: "Lagerist", en: "Forklift operator" }, de: "Lagerist" },
      { label: { fr: "Préparateur", de: "Kommissionierer", en: "Order picker" }, de: "Kommissionierer" },
      { label: { fr: "Agent logistique", de: "Fachkraft Lagerlogistik", en: "Logistics associate" }, de: "Fachkraft Lagerlogistik" },
    ],
  },
};

export type MetierCategorySlug = keyof typeof METIER_CATEGORIES;
