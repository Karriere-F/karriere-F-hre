import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight, ArrowDown, ExternalLink, Briefcase, CalendarDays, BookOpen, Wallet, Contact } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { MethodSteps } from "@/components/entreprises/method-steps";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_AUSBILDUNG as A } from "@/lib/entreprises-ausbildung-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/ausbildung",
    locale,
    title: tr(A.heroTitle, locale),
    description: tr(A.heroIntro1, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

// Une icône par info à transmettre (dans l'ordre de roleItems)
const ROLE_ICONS = [Briefcase, CalendarDays, BookOpen, Wallet, Contact];

export default async function EntreprisesAusbildungPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const faqItems = A.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          { name: "Ausbildung", pathname: "/entreprises/ausbildung" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* SECTION 01 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-20 lg:pb-24">
          {/* Titre pleine largeur, au-dessus de la photo */}
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(A.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl lg:text-[2.2rem] xl:text-[2.8rem] text-brand-black leading-tight">
            {L(A.heroTitle)}
          </h1>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div>
              <p className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "80ms" }}>
                {L(A.heroIntro1)}
              </p>
              <p className={`animate-fade-up mt-3 text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "120ms" }}>
                {L(A.heroIntro2)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <Link
                  href={{ pathname: "/entreprises/demande-recrutement", query: { type: "azubis" } }}
                  className={btnOutline}
                >
                  {L(A.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#processus" className={btnOutline}>
                  {L(A.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Photo fondue dans le décor */}
            <div className="animate-fade-up relative lg:-mt-10 lg:-mr-12 xl:-mr-24" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/ausbildung-hero.webp"
                alt={L({
                  fr: "De jeunes apprentis en formation technique avec leur formateur en atelier",
                  de: "Junge Auszubildende in der technischen Ausbildung mit ihrem Ausbilder in der Werkstatt",
                  en: "Young apprentices in technical training with their trainer in the workshop",
                })}
                width={1712}
                height={963}
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.needKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
            {L(A.needTitle)}
          </h2>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(A.needLead)}</p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {A.needItems.map((item, i) => (
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

      {/* SECTION 03 — COMMENT NOUS PRÉPARONS LES CANDIDATS */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.prepKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.5rem] text-brand-black leading-snug">
            {L(A.prepTitle)}
          </h2>

          <MethodSteps steps={A.prepItems.map((item) => ({ title: L(item.label), body: L(item.text) }))} />
        </div>
      </section>

      {/* SECTION 04 — NOTRE PROCESSUS */}
      <section id="processus" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.processKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
            {L(A.heroCtaSecondary)}
          </h2>

          <ol className="mt-12 space-y-3">
            {A.processSteps.map((step, i) => (
              <li
                key={L(step.title)}
                className="animate-fade-up flex flex-col gap-3 rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:flex-row sm:gap-6 sm:p-7"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-4 sm:w-[22rem] sm:shrink-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold font-serif text-sm font-bold text-brand-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg text-brand-black leading-snug">{L(step.title)}</h3>
                </div>
                <p className="text-sm text-brand-ink-secondary leading-relaxed sm:flex-1">{L(step.body)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Link
              href={{ pathname: "/entreprises/demande-recrutement", query: { type: "azubis" } }}
              className={btnOutline}
            >
              {L(A.processCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — PRÉPARER LE PARCOURS ADMINISTRATIF */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.adminKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-brand-black leading-snug">
              {L(A.adminTitle)}
            </h2>
          </div>
          <div className="mt-4 space-y-3">
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(A.adminText1)}</p>
            <p className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(A.adminText2)}</p>
            <p className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(A.adminText3)}</p>
          </div>
          <div className="mt-8">
            <a
              href="https://www.make-it-in-germany.com/en/visa-residence/types/training"
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
            >
              {L(A.adminLinkLabel)}
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 06 — VOTRE RÔLE EN TANT QU'EMPLOYEUR */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.roleKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-brand-black leading-snug">{L(A.roleIntro)}</h2>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {A.roleItems.map((item, i) => {
              const Icon = ROLE_ICONS[i] ?? Briefcase;
              return (
                <li
                  key={L(item)}
                  className="group flex items-start gap-4 rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,17,17,0.1)] hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/12 text-brand-gold-text transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-black">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-brand-black leading-relaxed">{L(item)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={`mt-8 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(A.roleClosing)}</p>
        </div>
      </section>

      {/* SECTION 07 — QUESTIONS FRÉQUENTES */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(A.faqTitle)}</h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                className="animate-fade-up group rounded-lg bg-brand-white p-5 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
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

      {/* SECTION 08 — CTA FINAL */}
      <section className="bg-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(A.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(A.finalText)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href={{ pathname: "/entreprises/demande-recrutement", query: { type: "azubis" } }}
              className={btnOutline}
            >
              {L(A.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/entreprises/fachkraefte" className={btnOutline}>
              {L(A.finalCtaSecondary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
