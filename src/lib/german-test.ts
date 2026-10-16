import type { LocalizedText } from "./localized";

// Short, indicative German self-test reachable from "Évaluer mon niveau d'allemand".
// The questions are in German (same for every locale); the interface and the result
// descriptions are trilingual. It always returns a level, A0 included.
type LT = LocalizedText;

export const GERMAN_TEST: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro: LT;
  startLabel: LT;
  questionLabel: LT;
  nextLabel: LT;
  submitLabel: LT;
  retakeLabel: LT;
  resultKicker: LT;
  scoreLabel: LT;
  disclaimer: LT;
  ctaCours: LT;
  ctaContact: LT;
  ctaCoursHref: string;
  questions: { prompt: string; options: string[]; answer: number }[];
  // Buckets by number of correct answers (min inclusive, highest matching wins).
  levels: { min: number; code: string; label: LT; desc: LT }[];
} = {
  heroKicker: { fr: "Test d'allemand", de: "Deutschtest", en: "German test" },
  heroTitle: {
    fr: "Évaluez votre niveau d'allemand en quelques minutes.",
    de: "Schätzen Sie Ihr Deutschniveau in wenigen Minuten ein.",
    en: "Assess your German level in a few minutes.",
  },
  heroIntro: {
    fr: "Dix questions, de plus en plus difficiles. Répondez à celles que vous pouvez et laissez les autres : même si vous débutez de zéro, ce test vous situe. Résultat indicatif immédiat.",
    de: "Zehn Fragen mit steigender Schwierigkeit. Beantworten Sie, was Sie können, und lassen Sie den Rest offen: Auch als kompletter Anfänger werden Sie eingeordnet. Sofortiges Richtergebnis.",
    en: "Ten questions of increasing difficulty. Answer what you can and skip the rest: even a complete beginner gets placed. Instant indicative result.",
  },
  startLabel: { fr: "Commencer le test", de: "Test starten", en: "Start the test" },
  questionLabel: { fr: "Question", de: "Frage", en: "Question" },
  nextLabel: { fr: "Suivant", de: "Weiter", en: "Next" },
  submitLabel: { fr: "Voir mon résultat", de: "Mein Ergebnis sehen", en: "See my result" },
  retakeLabel: { fr: "Refaire le test", de: "Test wiederholen", en: "Retake the test" },
  resultKicker: { fr: "Votre niveau estimé", de: "Ihr geschätztes Niveau", en: "Your estimated level" },
  scoreLabel: { fr: "bonnes réponses", de: "richtige Antworten", en: "correct answers" },
  disclaimer: {
    fr: "Résultat indicatif. Votre niveau exact est confirmé lors d'une évaluation avec Karriere Fähre.",
    de: "Richtergebnis. Ihr genaues Niveau wird bei einer Bewertung mit Karriere Fähre bestätigt.",
    en: "Indicative result. Your exact level is confirmed during an assessment with Karriere Fähre.",
  },
  ctaCours: { fr: "Voir nos cours d'allemand", de: "Unsere Deutschkurse ansehen", en: "See our German courses" },
  ctaContact: { fr: "Parler à Karriere Fähre", de: "Mit Karriere Fähre sprechen", en: "Talk to Karriere Fähre" },
  ctaCoursHref: "/cours-allemand",

  questions: [
    { prompt: "Wie ___ du?", options: ["heißt", "heißen", "heiße"], answer: 0 },
    { prompt: "Ich ___ aus Kamerun.", options: ["kommst", "komme", "kommt"], answer: 1 },
    { prompt: "Gestern ___ ich ins Kino gegangen.", options: ["habe", "bin", "war"], answer: 1 },
    { prompt: "Ich interessiere mich ___ Technik.", options: ["auf", "an", "für"], answer: 2 },
    { prompt: "Wenn ich Zeit ___, würde ich mehr lesen.", options: ["hätte", "habe", "hatte"], answer: 0 },
    { prompt: "Das ist der Mann, ___ ich gestern getroffen habe.", options: ["der", "dem", "den"], answer: 2 },
    { prompt: "Am Wochenende ___ ich meine Familie.", options: ["besucht", "besuche", "besuchen"], answer: 1 },
    { prompt: "Ich freue mich ___ das Wochenende.", options: ["über", "auf", "für"], answer: 1 },
    { prompt: "Je mehr man übt, ___ besser wird man.", options: ["desto", "als", "wie"], answer: 0 },
    { prompt: "Der Vertrag muss bis morgen ___ werden.", options: ["unterschreiben", "unterschrieben", "unterschrieb"], answer: 1 },
  ],

  levels: [
    {
      min: 0,
      code: "A0",
      label: { fr: "Débutant complet", de: "Kompletter Anfänger", en: "Complete beginner" },
      desc: {
        fr: "Vous partez de zéro, et c'est parfaitement bien. Notre parcours Full Training vous emmène de A1 jusqu'au B2 requis.",
        de: "Sie fangen bei null an, und das ist völlig in Ordnung. Unser Full-Training-Weg bringt Sie von A1 bis zum erforderlichen B2.",
        en: "You're starting from scratch, and that's perfectly fine. Our Full Training path takes you from A1 up to the required B2.",
      },
    },
    {
      min: 2,
      code: "A1",
      label: { fr: "Débutant", de: "Anfänger", en: "Beginner" },
      desc: {
        fr: "Vous avez les premières bases. Nos cours vous feront progresser rapidement vers le niveau requis.",
        de: "Sie haben erste Grundlagen. Unsere Kurse bringen Sie schnell zum erforderlichen Niveau.",
        en: "You have the first basics. Our courses will move you quickly toward the required level.",
      },
    },
    {
      min: 4,
      code: "A2",
      label: { fr: "Élémentaire", de: "Grundlegend", en: "Elementary" },
      desc: {
        fr: "Bon début. Il reste du chemin jusqu'au B2, et nous vous accompagnons à chaque étape.",
        de: "Guter Anfang. Bis zum B2 ist noch ein Stück Weg, und wir begleiten Sie bei jedem Schritt.",
        en: "Good start. There's still a way to B2, and we support you at every step.",
      },
    },
    {
      min: 7,
      code: "B1",
      label: { fr: "Intermédiaire", de: "Mittelstufe", en: "Intermediate" },
      desc: {
        fr: "Vous êtes proche de l'objectif. Un dernier palier vous sépare du B2 visé.",
        de: "Sie sind nah am Ziel. Nur noch eine Stufe trennt Sie vom angestrebten B2.",
        en: "You're close to the goal. One last step separates you from the target B2.",
      },
    },
    {
      min: 9,
      code: "B2",
      label: { fr: "Intermédiaire avancé", de: "Fortgeschritten", en: "Upper intermediate" },
      desc: {
        fr: "Excellent niveau : vous visez déjà le standard requis. Vérifions-le ensemble lors d'une évaluation.",
        de: "Ausgezeichnetes Niveau: Sie erreichen bereits den geforderten Standard. Lassen Sie es uns gemeinsam bestätigen.",
        en: "Excellent level: you're already at the required standard. Let's confirm it together in an assessment.",
      },
    },
  ],
};
