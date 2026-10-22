"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@i18n/navigation";

type Locale = "fr" | "de" | "en";
type Prefs = { statistics: boolean; marketing: boolean; externalMedia: boolean };

const STORAGE_KEY = "kf_cookie_consent_v1";
const OPEN_EVENT = "kf:open-cookie-settings";

type Group = { key: keyof Prefs | "essential"; title: string; desc: string };

type Strings = {
  title: string;
  intro: string[];
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
  groupsIntro: string;
  groups: Group[];
  save: string;
  acceptAll: string;
  essentialOnly: string;
  individual: string;
  back: string;
  imprint: string;
  privacy: string;
  footerText: string;
  footerChange: string;
  footerReject: string;
  footerAccept: string;
};

const T: Record<Locale, Strings> = {
  de: {
    title: "Datenschutzeinstellungen",
    intro: [
      "Wir respektieren Ihre Privatsphäre und möchten, dass Sie selbst entscheiden, welche Cookies Sie zulassen.",
      "Sind Sie unter 16 Jahre alt, holen Sie bitte die Zustimmung Ihrer Erziehungsberechtigten ein, bevor Sie optionale Dienste erlauben.",
      "Einige Cookies sind für den Betrieb der Website technisch notwendig. Andere helfen uns, die Website und Ihr Erlebnis zu verbessern. Ihre Wahl bleibt Ihnen überlassen und lässt sich jederzeit anpassen.",
      "Dabei können personenbezogene Daten verarbeitet werden, etwa Ihre IP-Adresse.",
    ],
    privacyBefore: "Mehr über den Umgang mit Ihren Daten erfahren Sie in unserer ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: ".",
    groupsIntro:
      "Hier sehen Sie die Cookie-Kategorien, für die Sie eine Einwilligung erteilen können. Die essenziellen Cookies sind immer aktiv und lassen sich nicht abwählen.",
    groups: [
      { key: "essential", title: "Essenziell", desc: "Erforderlich für den sicheren und zuverlässigen Betrieb der Website und für grundlegende Funktionen. Ohne sie funktioniert die Seite nicht richtig." },
      { key: "statistics", title: "Statistiken", desc: "Helfen uns zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können. Die Auswertung erfolgt anonymisiert." },
      { key: "marketing", title: "Marketing", desc: "Dienen dazu, Inhalte und Angebote besser auf Ihre Interessen abzustimmen, auch über verschiedene Websites hinweg." },
      { key: "externalMedia", title: "Externe Medien", desc: "Erlauben eingebettete Inhalte von Drittanbietern wie Videos oder Karten, die sonst erst nach Ihrer Zustimmung geladen werden." },
    ],
    save: "Speichern",
    acceptAll: "Alle akzeptieren",
    essentialOnly: "Nur essenzielle Cookies akzeptieren",
    individual: "Individuelle Datenschutzeinstellungen",
    back: "Zurück",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    footerText:
      "Wir setzen Cookies ein, damit die Website zuverlässig funktioniert und wir sie verbessern können. Ihre Einstellungen werden lokal in Ihrem Browser gespeichert. Technisch notwendige Cookies sind immer aktiv; über alle weiteren entscheiden Sie selbst und können Ihre Wahl jederzeit anpassen.",
    footerChange: "Cookie-Einstellungen ändern",
    footerReject: "Alle Cookies ablehnen",
    footerAccept: "Alle Cookies akzeptieren",
  },
  fr: {
    title: "Paramètres de confidentialité",
    intro: [
      "Nous respectons votre vie privée et souhaitons que vous décidiez vous-même des cookies que vous autorisez.",
      "Si vous avez moins de 16 ans, demandez l'accord de vos responsables légaux avant d'autoriser des services optionnels.",
      "Certains cookies sont techniquement nécessaires au fonctionnement du site. D'autres nous aident à améliorer le site et votre expérience. Vous restez libre de votre choix et pouvez le modifier à tout moment.",
      "Des données personnelles peuvent alors être traitées, par exemple votre adresse IP.",
    ],
    privacyBefore: "Pour en savoir plus sur le traitement de vos données, consultez notre ",
    privacyLink: "politique de confidentialité",
    privacyAfter: ".",
    groupsIntro:
      "Voici les catégories de cookies pour lesquelles vous pouvez donner votre consentement. Les cookies essentiels sont toujours actifs et ne peuvent pas être désactivés.",
    groups: [
      { key: "essential", title: "Essentiels", desc: "Nécessaires au fonctionnement sûr et fiable du site ainsi qu'à ses fonctions de base. Sans eux, le site ne fonctionne pas correctement." },
      { key: "statistics", title: "Statistiques", desc: "Nous aident à comprendre comment le site est utilisé afin de l'améliorer. Les mesures sont réalisées de manière anonyme." },
      { key: "marketing", title: "Marketing", desc: "Servent à mieux adapter les contenus et les offres à vos centres d'intérêt, y compris d'un site à l'autre." },
      { key: "externalMedia", title: "Médias externes", desc: "Permettent d'afficher des contenus intégrés de tiers, comme des vidéos ou des cartes, chargés uniquement après votre accord." },
    ],
    save: "Enregistrer",
    acceptAll: "Tout accepter",
    essentialOnly: "Accepter uniquement les cookies essentiels",
    individual: "Paramètres de confidentialité individuels",
    back: "Retour",
    imprint: "Mentions légales",
    privacy: "Politique de confidentialité",
    footerText:
      "Nous utilisons des cookies pour que le site fonctionne de manière fiable et pour l'améliorer. Vos préférences sont enregistrées localement dans votre navigateur. Les cookies techniquement nécessaires sont toujours actifs ; pour tous les autres, c'est vous qui décidez, et vous pouvez modifier votre choix à tout moment.",
    footerChange: "Modifier les paramètres des cookies",
    footerReject: "Refuser tous les cookies",
    footerAccept: "Accepter tous les cookies",
  },
  en: {
    title: "Privacy settings",
    intro: [
      "We respect your privacy and want you to decide for yourself which cookies you allow.",
      "If you are under 16, please ask your legal guardians for permission before allowing optional services.",
      "Some cookies are technically necessary for the website to work. Others help us improve the website and your experience. You remain free to choose and can change your choice at any time.",
      "In doing so, personal data may be processed, for example your IP address.",
    ],
    privacyBefore: "To learn more about how we handle your data, see our ",
    privacyLink: "privacy policy",
    privacyAfter: ".",
    groupsIntro:
      "Below are the cookie categories you can consent to. Essential cookies are always active and cannot be switched off.",
    groups: [
      { key: "essential", title: "Essential", desc: "Required for the secure and reliable operation of the website and for basic functions. Without them, the site does not work properly." },
      { key: "statistics", title: "Statistics", desc: "Help us understand how the website is used so we can improve it. Measurement is carried out anonymously." },
      { key: "marketing", title: "Marketing", desc: "Used to better tailor content and offers to your interests, including across different websites." },
      { key: "externalMedia", title: "External media", desc: "Allow embedded third-party content such as videos or maps, which are otherwise loaded only after your consent." },
    ],
    save: "Save",
    acceptAll: "Accept all",
    essentialOnly: "Accept only essential cookies",
    individual: "Individual privacy settings",
    back: "Back",
    imprint: "Legal notice",
    privacy: "Privacy policy",
    footerText:
      "We use cookies so the website works reliably and so we can improve it. Your preferences are stored locally in your browser. Technically necessary cookies are always active; for all others, you decide, and you can change your choice at any time.",
    footerChange: "Change cookie settings",
    footerReject: "Reject all cookies",
    footerAccept: "Accept all cookies",
  },
};

function store(prefs: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ essential: true, ...prefs, ts: Date.now() }));
  } catch {
    /* storage unavailable */
  }
}

export function CookieConsent() {
  const locale = (useLocale() as Locale) ?? "de";
  const t = T[locale] ?? T.de;

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ statistics: false, marketing: false, externalMedia: false });

  useEffect(() => {
    let decided = false;
    try {
      decided = !!localStorage.getItem(STORAGE_KEY);
    } catch {
      decided = false;
    }
    if (!decided) setOpen(true);

    const reopen = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const p = JSON.parse(raw);
          setPrefs({ statistics: !!p.statistics, marketing: !!p.marketing, externalMedia: !!p.externalMedia });
        }
      } catch {
        /* ignore */
      }
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const close = () => setOpen(false);
  const acceptAll = () => {
    store({ statistics: true, marketing: true, externalMedia: true });
    close();
  };
  const essentialOnly = () => {
    store({ statistics: false, marketing: false, externalMedia: false });
    close();
  };
  const saveSelection = () => {
    store(prefs);
    close();
  };
  const toggle = (k: keyof Prefs) => setPrefs((p) => ({ ...p, [k]: !p[k] }));

  const btnPrimary =
    "press inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-gold px-5 py-2.5 text-center text-sm font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light";
  const btnGhost =
    "press inline-flex min-h-[48px] items-center justify-center rounded-md border border-brand-grid px-5 py-2.5 text-center text-sm font-semibold text-brand-black transition-colors duration-200 hover:border-brand-gold hover:text-brand-gold-text";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      className="fixed inset-0 z-[200] flex items-end justify-center bg-brand-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-brand-white shadow-[0_24px_70px_rgba(17,17,17,0.35)] sm:rounded-2xl">
        <div className="overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          <h2 className="font-serif text-2xl text-brand-black leading-snug">{t.title}</h2>

          <div className="mt-4 space-y-3 text-sm text-brand-ink-secondary leading-relaxed">
            <p>{t.intro[0]}</p>
            <p>{t.intro[1]}</p>
            <p>{t.intro[2]}</p>
            <p>{t.intro[3]}</p>
            <p>
              {t.privacyBefore}
              <Link href="/confidentialite" className="font-semibold text-brand-gold-text underline-offset-2 hover:underline">
                {t.privacyLink}
              </Link>
              {t.privacyAfter}
            </p>
          </div>

          {details && (
            <div className="mt-6">
              <p className="text-sm text-brand-ink-secondary leading-relaxed">{t.groupsIntro}</p>
              <ul className="mt-4 space-y-3">
                {t.groups.map((g) => {
                  const isEssential = g.key === "essential";
                  const checked = isEssential ? true : prefs[g.key as keyof Prefs];
                  return (
                    <li key={g.key} className="rounded-xl border border-brand-grid bg-brand-card p-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-brand-black">{g.title}</h3>
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={isEssential}
                          onChange={() => !isEssential && toggle(g.key as keyof Prefs)}
                          aria-label={g.title}
                          className="mt-0.5 h-5 w-5 shrink-0 accent-brand-gold disabled:opacity-60"
                        />
                      </div>
                      <p className="mt-2 text-xs text-brand-ink-secondary leading-relaxed">{g.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-brand-grid bg-brand-card px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            {details ? (
              <button type="button" onClick={saveSelection} className={btnPrimary}>
                {t.save}
              </button>
            ) : null}
            <button type="button" onClick={acceptAll} className={btnPrimary}>
              {t.acceptAll}
            </button>
            <button type="button" onClick={essentialOnly} className={btnGhost}>
              {t.essentialOnly}
            </button>
            {!details ? (
              <button type="button" onClick={() => setDetails(true)} className={btnGhost}>
                {t.individual}
              </button>
            ) : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-brand-ink-muted">
            <Link href="/confidentialite" className="hover:text-brand-gold-text hover:underline">
              {t.privacy}
            </Link>
            <Link href="/mentions-legales" className="hover:text-brand-gold-text hover:underline">
              {t.imprint}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Persistent footer notice: lets visitors re-open the banner or accept/reject all
// at any time, as required for a revocable consent.
export function CookieFooterNotice() {
  const locale = (useLocale() as Locale) ?? "de";
  const t = T[locale] ?? T.de;

  const change = () => window.dispatchEvent(new Event(OPEN_EVENT));
  const reject = () => store({ statistics: false, marketing: false, externalMedia: false });
  const accept = () => store({ statistics: true, marketing: true, externalMedia: true });

  const link =
    "press font-semibold text-brand-white/80 underline-offset-2 transition-colors duration-200 hover:text-brand-gold-light hover:underline";

  return (
    <div className="border-t border-brand-white/10">
      <div className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-brand-white/45 sm:px-6 lg:px-10">
        <p className="max-w-4xl">{t.footerText}</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          <button type="button" onClick={change} className={link}>
            {t.footerChange}
          </button>
          <button type="button" onClick={reject} className={link}>
            {t.footerReject}
          </button>
          <button type="button" onClick={accept} className={link}>
            {t.footerAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
