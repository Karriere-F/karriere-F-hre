import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight, ArrowDown, ExternalLink, Award, Handshake, Zap } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { MethodSteps } from "@/components/entreprises/method-steps";
import { ProcessJourney } from "@/components/entreprises/process-journey";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_FACHKRAEFTE as F } from "@/lib/entreprises-fachkraefte-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/fachkraefte",
    locale,
    title: tr(F.heroTitle, locale),
    description: tr(F.heroIntro1, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

const heroAlt = {
  fr: "Un technicien qualifié intervient sur une armoire électrique",
  de: "Eine Fachkraft arbeitet an einem Schaltschrank",
  en: "A skilled technician works on an electrical cabinet",
};

// Une icône par étape du parcours (dans l'ordre de processSteps)
const PROCESS_ICON_NAMES = ["clipboard", "search", "cap", "users", "message", "plane"];

const ETAPE = { fr: "Étape", de: "Schritt", en: "Step" };

// Une icône par pilier de reconnaissance (dans l'ordre de recoPillars)
const RECO_ICONS = [Award, Handshake, Zap];

export default async function EntreprisesFachkraeftePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const faqItems = F.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          { name: "Fachkräfte", pathname: "/entreprises/fachkraefte" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* SECTION 01 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-20 lg:pb-24">
          {/* Titre pleine largeur, au-dessus de la photo */}
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(F.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl lg:text-[2rem] xl:text-[2.6rem] text-brand-black leading-tight lg:whitespace-nowrap">
            {L(F.heroTitle)}
          </h1>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div>
              <p className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "80ms" }}>
                {L(F.heroIntro1)}
              </p>
              <p className={`animate-fade-up mt-3 text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "120ms" }}>
                {L(F.heroIntro2)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <Link href={{ pathname: "/entreprises/demande-recrutement", query: { type: "fachkraefte" } }} className={btnOutline}>
                  {L(F.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#methode" className={btnOutline}>
                  {L(F.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Photo fondue dans le décor */}
            <div className="animate-fade-up relative lg:-mt-10 lg:-mr-12 xl:-mr-24" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/entreprises-hero.webp"
                alt={L(heroAlt)}
                width={1672}
                height={941}
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="h-auto w-full"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — VOTRE BESOIN */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.needKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-[2.2rem] text-brand-black leading-snug">
              {L(F.needTitle)}
            </h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.needLead)}</p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {F.needItems.map((item, i) => (
              <div
                key={L(item.label)}
                className="group animate-fade-up flex aspect-square flex-col rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-3xl font-bold text-brand-gold-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — NOTRE PRÉPARATION */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.prepKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.prepTitle)}</h2>
          </div>

          <MethodSteps steps={F.prepItems.map((item) => ({ title: L(item.label), body: L(item.text) }))} />
        </div>
      </section>

      {/* SECTION 04 — LE PROCESSUS */}
      <section id="methode" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.processKicker)}</h2>

          <ProcessJourney
            steps={F.processSteps.map((step, i) => ({
              etape: L(ETAPE),
              title: L(step.title),
              body: L(step.body),
              icon: PROCESS_ICON_NAMES[i] ?? "clipboard",
            }))}
          />

          <div className="mt-10">
            <Link href={{ pathname: "/entreprises/demande-recrutement", query: { type: "fachkraefte" } }} className={btnOutline}>
              {L(F.processCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — RECONNAISSANCE & SÉJOUR */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.recoKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.5rem] text-brand-black leading-snug">{L(F.recoTitle)}</h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.recoIntro)}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {F.recoPillars.map((p, i) => {
              const Icon = RECO_ICONS[i] ?? Award;
              return (
                <div
                  key={L(p.title)}
                  className="group animate-fade-up relative flex flex-col overflow-hidden rounded-2xl bg-brand-white p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {/* Accent doré en haut, révélé au survol */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gold transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/12 text-brand-gold-text transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-black">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-brand-black leading-snug">{L(p.title)}</h3>
                  <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(p.body)}</p>
                </div>
              );
            })}
          </div>

          <p className={`mt-8 text-sm text-brand-ink-muted leading-relaxed ${justify}`}>{L(F.recoNote)}</p>
          <div className="mt-6">
            <a
              href="https://www.make-it-in-germany.com/en/looking-for-foreign-professionals/entering/the-fast-track-procedure-for-skilled-workers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-brand-gold-text transition-colors duration-200 hover:text-brand-black"
            >
              {L(F.recoLinkLabel)}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 06 — QUESTIONS FRÉQUENTES */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.faqTitle)}</h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                className="animate-fade-up group rounded-lg bg-brand-card p-5 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-brand-black marker:content-none">
                  {item.q}
                  <span className="shrink-0 text-brand-gold-text transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className={`mt-3 text-sm leading-relaxed text-brand-ink-secondary ${justify}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(F.finalText)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href={{ pathname: "/entreprises/demande-recrutement", query: { type: "fachkraefte" } }} className={btnOutline}>
              {L(F.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/entreprises/ausbildung" className={btnOutline}>
              {L(F.finalCtaSecondary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
