import type { LocalizedText } from "./localized";

// Content for /entreprises/demande-recrutement (B2B conversion page). Employer need only.
type LT = LocalizedText;

export const DEMANDE_PAGE: {
  heroKicker: LT;
  heroTitle: LT;
  heroText1: LT;
  heroText2: LT;
  afterTitle: LT;
  afterSteps: { title: LT; body: LT }[];
  afterNote: LT;
  form: {
    secEntreprise: LT;
    secInterlocuteur: LT;
    secBesoin: LT;
    secExigences: LT;
    entreprise: LT;
    secteur: LT;
    secteurChoose: LT;
    secteurs: LT[];
    siteWeb: LT;
    prenomNom: LT;
    fonction: LT;
    email: LT;
    telephone: LT;
    besoin: LT;
    besoinChoose: LT;
    besoinFach: LT;
    besoinAzubis: LT;
    besoinLesDeux: LT;
    besoinEtude: LT;
    metier: LT;
    nombre: LT;
    delai: LT;
    delaiChoose: LT;
    delaiAsap: LT;
    delai36: LT;
    delai6plus: LT;
    delaiDefinir: LT;
    niveauAllemand: LT;
    qualification: LT;
    message: LT;
    consent: LT;
    submit: LT;
    submitting: LT;
    required: LT;
    error: LT;
    errorConsent: LT;
    successTitle: LT;
    successText: LT;
  };
} = {
  heroKicker: { fr: "Votre projet de recrutement", de: "Ihr Rekrutierungsprojekt", en: "Your recruitment project" },
  heroTitle: { fr: "Décrivons ensemble votre besoin.", de: "Beschreiben wir gemeinsam Ihren Bedarf.", en: "Let's describe your need together." },
  heroText1: {
    fr: "Vous souhaitez recruter une Fachkraft, pourvoir des places d'Ausbildung ou étudier un projet de recrutement international ?",
    de: "Möchten Sie eine Fachkraft einstellen, Ausbildungsplätze besetzen oder ein internationales Rekrutierungsprojekt prüfen?",
    en: "Do you want to recruit a Fachkraft, fill Ausbildung places or study an international recruitment project?",
  },
  heroText2: {
    fr: "Transmettez-nous les informations essentielles. Nous pourrons préparer un premier échange ciblé sur votre besoin, les profils recherchés et les prochaines étapes.",
    de: "Übermitteln Sie uns die wesentlichen Informationen. Wir können einen ersten, auf Ihren Bedarf, die gesuchten Profile und die nächsten Schritte ausgerichteten Austausch vorbereiten.",
    en: "Send us the essential information. We can prepare a first exchange focused on your need, the profiles sought and the next steps.",
  },
  afterTitle: { fr: "Que se passe-t-il ensuite ?", de: "Wie geht es weiter?", en: "What happens next?" },
  afterSteps: [
    {
      title: { fr: "Analyse de votre demande", de: "Analyse Ihrer Anfrage", en: "Review of your request" },
      body: { fr: "Nous examinons les informations communiquées.", de: "Wir prüfen die übermittelten Informationen.", en: "We review the information provided." },
    },
    {
      title: { fr: "Premier échange", de: "Erster Austausch", en: "First exchange" },
      body: {
        fr: "Nous clarifions le besoin, les critères et les contraintes éventuelles.",
        de: "Wir klären den Bedarf, die Kriterien und etwaige Rahmenbedingungen.",
        en: "We clarify the need, the criteria and any constraints.",
      },
    },
    {
      title: { fr: "Proposition de collaboration", de: "Vorschlag zur Zusammenarbeit", en: "Collaboration proposal" },
      body: {
        fr: "Si le projet est adapté aux profils et aux possibilités de recrutement, nous définissons ensemble les prestations, les responsabilités, les conditions financières et les prochaines étapes.",
        de: "Passt das Projekt zu den Profilen und Rekrutierungsmöglichkeiten, legen wir gemeinsam Leistungen, Verantwortlichkeiten, finanzielle Bedingungen und nächste Schritte fest.",
        en: "If the project fits the profiles and recruitment possibilities, we define together the services, responsibilities, financial conditions and next steps.",
      },
    },
  ],
  afterNote: {
    fr: "L'envoi du formulaire ne vaut pas acceptation automatique de la mission. Les engagements sont définis avant le démarrage du recrutement.",
    de: "Das Absenden des Formulars bedeutet keine automatische Annahme des Auftrags. Die Verpflichtungen werden vor Beginn der Rekrutierung festgelegt.",
    en: "Submitting the form does not mean automatic acceptance of the assignment. Commitments are defined before recruitment begins.",
  },
  form: {
    secEntreprise: { fr: "Votre entreprise", de: "Ihr Unternehmen", en: "Your company" },
    secInterlocuteur: { fr: "Votre interlocuteur", de: "Ihr Ansprechpartner", en: "Your contact" },
    secBesoin: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
    secExigences: { fr: "Les exigences du poste", de: "Die Anforderungen der Stelle", en: "The requirements of the role" },
    entreprise: { fr: "Nom de l'entreprise", de: "Name des Unternehmens", en: "Company name" },
    secteur: { fr: "Secteur d'activité", de: "Branche", en: "Sector" },
    secteurChoose: { fr: "Sélectionnez votre secteur", de: "Branche auswählen", en: "Select your sector" },
    secteurs: [
      { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Health & care" },
      { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical" },
      { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & crafts" },
      { fr: "Logistique & transport", de: "Logistik & Transport", en: "Logistics & transport" },
      { fr: "Hôtellerie & restauration", de: "Hotellerie & Gastronomie", en: "Hospitality & catering" },
      { fr: "IT & métiers spécialisés", de: "IT & Spezialberufe", en: "IT & specialised trades" },
      { fr: "Autre secteur", de: "Andere Branche", en: "Other sector" },
    ],
    siteWeb: { fr: "Site internet de l'entreprise (facultatif)", de: "Website des Unternehmens (optional)", en: "Company website (optional)" },
    prenomNom: { fr: "Prénom et nom", de: "Vor- und Nachname", en: "First and last name" },
    fonction: { fr: "Fonction dans l'entreprise", de: "Funktion im Unternehmen", en: "Role in the company" },
    email: { fr: "Adresse e-mail professionnelle", de: "Geschäftliche E-Mail-Adresse", en: "Professional email address" },
    telephone: { fr: "Téléphone (facultatif)", de: "Telefon (optional)", en: "Phone (optional)" },
    besoin: { fr: "Quel type de recrutement recherchez-vous ?", de: "Welche Art der Rekrutierung suchen Sie?", en: "What type of recruitment are you looking for?" },
    besoinChoose: { fr: "Sélectionnez un type", de: "Typ auswählen", en: "Select a type" },
    besoinFach: { fr: "Recrutement de Fachkräfte", de: "Rekrutierung von Fachkräften", en: "Recruiting Fachkräfte" },
    besoinAzubis: { fr: "Recrutement d'Azubis", de: "Rekrutierung von Azubis", en: "Recruiting Azubis" },
    besoinLesDeux: { fr: "Les deux", de: "Beides", en: "Both" },
    besoinEtude: {
      fr: "Étude d'un projet de recrutement international",
      de: "Prüfung eines internationalen Rekrutierungsprojekts",
      en: "Studying an international recruitment project",
    },
    metier: { fr: "Quel métier ou poste souhaitez-vous pourvoir ?", de: "Welchen Beruf oder welche Stelle möchten Sie besetzen?", en: "Which profession or position do you want to fill?" },
    nombre: { fr: "Combien de candidats recherchez-vous ? (facultatif)", de: "Wie viele Kandidaten suchen Sie? (optional)", en: "How many candidates are you looking for? (optional)" },
    delai: { fr: "Quand souhaitez-vous accueillir le candidat ?", de: "Wann möchten Sie den Kandidaten aufnehmen?", en: "When would you like to welcome the candidate?" },
    delaiChoose: { fr: "Sélectionnez un délai", de: "Zeitraum auswählen", en: "Select a timeframe" },
    delaiAsap: { fr: "Dès que possible", de: "So bald wie möglich", en: "As soon as possible" },
    delai36: { fr: "Dans les 3 à 6 mois", de: "In 3 bis 6 Monaten", en: "In 3 to 6 months" },
    delai6plus: { fr: "Dans plus de 6 mois", de: "In mehr als 6 Monaten", en: "In more than 6 months" },
    delaiDefinir: { fr: "Calendrier à définir", de: "Zeitplan noch offen", en: "Timeline to be defined" },
    niveauAllemand: { fr: "Niveau d'allemand attendu (facultatif)", de: "Erwartetes Deutschniveau (optional)", en: "Expected level of German (optional)" },
    qualification: { fr: "Qualification ou expérience recherchée (facultatif)", de: "Gesuchte Qualifikation oder Erfahrung (optional)", en: "Qualification or experience sought (optional)" },
    message: { fr: "Votre message (facultatif)", de: "Ihre Nachricht (optional)", en: "Your message (optional)" },
    consent: {
      fr: "J'accepte que les informations transmises soient utilisées pour répondre à ma demande, conformément à la politique de confidentialité.",
      de: "Ich stimme zu, dass die übermittelten Informationen zur Beantwortung meiner Anfrage gemäß der Datenschutzerklärung verwendet werden.",
      en: "I agree that the information provided may be used to respond to my request, in accordance with the privacy policy.",
    },
    submit: { fr: "Envoyer ma demande", de: "Anfrage senden", en: "Send my request" },
    submitting: { fr: "Envoi…", de: "Senden…", en: "Sending…" },
    required: { fr: "Champs obligatoires", de: "Pflichtfelder", en: "Required fields" },
    error: {
      fr: "Une erreur est survenue. Vérifiez vos informations et réessayez.",
      de: "Ein Fehler ist aufgetreten. Prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      en: "An error occurred. Check your details and try again.",
    },
    errorConsent: {
      fr: "Merci de confirmer votre accord sur l'utilisation des informations transmises.",
      de: "Bitte bestätigen Sie Ihre Zustimmung zur Verwendung der übermittelten Informationen.",
      en: "Please confirm your consent to the use of the information provided.",
    },
    successTitle: { fr: "Demande bien reçue.", de: "Anfrage erhalten.", en: "Request received." },
    successText: {
      fr: "Merci. Nous avons bien reçu votre demande de recrutement et revenons vers vous pour préparer un premier échange ciblé.",
      de: "Danke. Wir haben Ihre Rekrutierungsanfrage erhalten und melden uns, um einen ersten gezielten Austausch vorzubereiten.",
      en: "Thank you. We have received your recruitment request and will get back to you to prepare a first focused exchange.",
    },
  },
};
