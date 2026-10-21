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
};

const T: Record<Locale, Strings> = {
  de: {
    title: "Datenschutzeinstellungen",
    intro: [
      "Wir benötigen Ihre Zustimmung, bevor Sie unsere Website weiter besuchen können.",
      "Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten.",
      "Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.",
      "Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung.",
    ],
    privacyBefore: "Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: ".",
    groupsIntro:
      "Es folgt eine Liste der Service-Gruppen, für die eine Einwilligung erteilt werden kann. Die erste Service-Gruppe ist essenziell und kann nicht abgewählt werden.",
    groups: [
      { key: "essential", title: "Essenziell", desc: "Essenzielle Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich." },
      { key: "statistics", title: "Statistiken", desc: "Statistik-Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website nutzen." },
      { key: "marketing", title: "Marketing", desc: "Marketing-Cookies werden von Drittanbietern oder Publishern verwendet, um personalisierte Werbung anzuzeigen. Sie tun dies, indem sie Besucher über Websites hinweg verfolgen." },
      { key: "externalMedia", title: "Externe Medien", desc: "Inhalte von Videoplattformen und Social-Media-Plattformen werden standardmäßig blockiert. Wenn Cookies von externen Medien akzeptiert werden, bedarf der Zugriff auf diese Inhalte keiner manuellen Einwilligung mehr." },
    ],
    save: "Speichern",
    acceptAll: "Alle akzeptieren",
    essentialOnly: "Nur essenzielle Cookies akzeptieren",
    individual: "Individuelle Datenschutzeinstellungen",
    back: "Zurück",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
  },
  fr: {
    title: "Paramètres de confidentialité",
    intro: [
      "Nous avons besoin de votre consentement avant que vous puissiez continuer à naviguer sur notre site.",
      "Si vous avez moins de 16 ans et souhaitez donner votre consentement à des services facultatifs, vous devez demander l'autorisation à vos responsables légaux.",
      "Nous utilisons des cookies et d'autres technologies sur notre site. Certains sont essentiels, tandis que d'autres nous aident à améliorer ce site et votre expérience.",
      "Des données personnelles peuvent être traitées (par ex. les adresses IP), par ex. pour des annonces et contenus personnalisés ou la mesure des annonces et du contenu.",
    ],
    privacyBefore: "Vous trouverez plus d'informations sur l'utilisation de vos données dans notre ",
    privacyLink: "politique de confidentialité",
    privacyAfter: ".",
    groupsIntro:
      "Vous trouverez ci-dessous la liste des groupes de services pour lesquels un consentement peut être donné. Le premier groupe est essentiel et ne peut pas être désélectionné.",
    groups: [
      { key: "essential", title: "Essentiels", desc: "Les cookies essentiels permettent des fonctions de base et sont nécessaires au bon fonctionnement du site." },
      { key: "statistics", title: "Statistiques", desc: "Les cookies statistiques collectent des informations de manière anonyme. Ces informations nous aident à comprendre comment nos visiteurs utilisent notre site." },
      { key: "marketing", title: "Marketing", desc: "Les cookies marketing sont utilisés par des tiers ou des éditeurs pour afficher des publicités personnalisées. Ils le font en suivant les visiteurs à travers les sites." },
      { key: "externalMedia", title: "Médias externes", desc: "Les contenus des plateformes vidéo et des réseaux sociaux sont bloqués par défaut. Si les cookies des médias externes sont acceptés, l'accès à ces contenus ne nécessite plus de consentement manuel." },
    ],
    save: "Enregistrer",
    acceptAll: "Tout accepter",
    essentialOnly: "Accepter uniquement les cookies essentiels",
    individual: "Paramètres de confidentialité individuels",
    back: "Retour",
    imprint: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
  en: {
    title: "Privacy settings",
    intro: [
      "We need your consent before you can continue to use our website.",
      "If you are under 16 and wish to give consent to optional services, you must ask your legal guardians for permission.",
      "We use cookies and other technologies on our website. Some are essential, while others help us improve this website and your experience.",
      "Personal data may be processed (e.g. IP addresses), e.g. for personalised ads and content or ad and content measurement.",
    ],
    privacyBefore: "You can find more information about the use of your data in our ",
    privacyLink: "privacy policy",
    privacyAfter: ".",
    groupsIntro:
      "Below is a list of the service groups for which consent can be given. The first service group is essential and cannot be deselected.",
    groups: [
      { key: "essential", title: "Essential", desc: "Essential cookies enable basic functions and are necessary for the proper functioning of the website." },
      { key: "statistics", title: "Statistics", desc: "Statistics cookies collect information anonymously. This information helps us understand how our visitors use our website." },
      { key: "marketing", title: "Marketing", desc: "Marketing cookies are used by third parties or publishers to display personalised advertising. They do this by tracking visitors across websites." },
      { key: "externalMedia", title: "External media", desc: "Content from video and social media platforms is blocked by default. If cookies from external media are accepted, accessing this content no longer requires manual consent." },
    ],
    save: "Save",
    acceptAll: "Accept all",
    essentialOnly: "Accept only essential cookies",
    individual: "Individual privacy settings",
    back: "Back",
    imprint: "Legal notice",
    privacy: "Privacy policy",
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
