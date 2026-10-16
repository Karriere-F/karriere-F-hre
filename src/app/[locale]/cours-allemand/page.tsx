import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Check,
  MessageCircle,
  BookOpen,
  Briefcase,
  Users,
  ClipboardList,
  Target,
  Repeat2,
  Handshake,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { metadataFromNamespace } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { COURS_PAGE as C } from "@/lib/cours-content";
import type { Locale } from "@i18n/routing";

export const generateMetadata = () => metadataFromNamespace("coursAllemand", "/cours-allemand");

const APPROACH_ICONS: LucideIcon[] = [MessageCircle, BookOpen, Briefcase, Users];
const PREP_ICONS: LucideIcon[] = [ClipboardList, Target, Repeat2, Handshake];

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export default async function CoursAllemandPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const faqItems = C.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: L(C.heroTitle), pathname: "/cours-allemand" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:pt-14 lg:pb-24">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.95fr] lg:items-start lg:gap-10">
            <div>
              <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                {L(C.heroKicker)}
              </p>
              <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-brand-black text-wrap leading-tight lg:whitespace-nowrap">
                {L(C.heroTitleL1)}
                <br />
                {L(C.heroTitleL2)}
              </h1>
              <p
                className="animate-fade-up mt-5 max-w-2xl text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]"
                style={{ animationDelay: "80ms" }}
              >
                {L(C.heroIntro)}
              </p>
              <div className="animate-fade-up mt-8" style={{ animationDelay: "140ms" }}>
                <a href="#parcours" className={btnOutline}>
                  {L(C.heroCta)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative lg:-mr-8 xl:-mr-16" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/cours-allemand-hero-v2.webp"
                alt="Parler allemand, Deutsch sprechen, speak German : apprendre à communiquer en allemand"
                width={1672}
                height={941}
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              {/* Fonds dégradés : l'image reste bien visible au centre, ses bords se fondent dans le décor */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LES DEUX PARCOURS */}
      <section id="parcours" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(C.parcoursKicker)}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.parcoursTitle)}</h2>
            <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{L(C.parcoursLead)}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Full Training */}
            <div className="lift-on-hover animate-fade-up flex flex-col rounded-2xl bg-brand-card p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] sm:p-10">
              <span className="self-start rounded-full bg-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-black">
                {L(C.fullBadge)}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{L(C.fullTitle)}</h3>
              <p className="mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(C.fullBody)}</p>
              <p className="mt-4 text-sm font-semibold text-brand-black">{L(C.fullDuration)}</p>
              <div className="mt-8 pt-2">
                <Link href="/cours-allemand/full-training" className={btnOutline}>
                  {L(C.fullCta)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Fast Track */}
            <div className="lift-on-hover animate-fade-up flex flex-col rounded-2xl bg-brand-black p-8 text-brand-white sm:p-10" style={{ animationDelay: "80ms" }}>
              <span className="self-start rounded-full border border-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-gold-light">
                {L(C.fastBadge)}
              </span>
              <h3 className="mt-5 font-serif text-2xl leading-snug">
                {L(C.fastTitleL1)}
                <br />
                {L(C.fastTitleL2)}
              </h3>
              <p className="mt-4 text-brand-white/80 leading-relaxed text-justify [hyphens:none]">{L(C.fastBody1)}</p>
              <p className="mt-3 text-brand-white/80 leading-relaxed text-justify [hyphens:none]">{L(C.fastBody2)}</p>
              <div className="mt-8 pt-2">
                <Link
                  href="/cours-allemand/fast-track"
                  className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
                >
                  {L(C.fastCta)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — NOTRE APPROCHE PÉDAGOGIQUE */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(C.approachKicker)}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.approachTitle)}</h2>
          </div>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(C.approachLead)}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {C.approachItems.map((item, i) => {
              const Icon = APPROACH_ICONS[i] ?? MessageCircle;
              return (
                <div
                  key={L(item.label)}
                  className="animate-fade-up flex items-start gap-4 rounded-xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                    <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(item.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-5xl text-base text-brand-ink-muted">{L(C.approachNote)}</p>
        </div>
      </section>

      {/* SECTION 4 — POURQUOI LE NIVEAU COMPTE */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.levelKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.levelTitle)}</h2>
          </div>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(C.levelLead)}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {C.levelCards.map((card, i) => (
              <div
                key={L(card.tag)}
                className="animate-fade-up flex flex-col rounded-xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="self-start rounded-full bg-brand-gold/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-gold-text">
                  {L(card.tag)}
                </span>
                <h3 className="mt-4 font-serif text-xl text-brand-black leading-snug">{L(card.title)}</h3>
                <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(card.body)}</p>
                <Link
                  href={card.href as "/ausbildung-allemagne"}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-gold-text"
                >
                  {L(card.linkLabel)}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-brand-ink-muted">{L(C.levelNote)}</p>
        </div>
      </section>

      {/* SECTION 5 — PRÉPARATION PROFESSIONNELLE */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.prepKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(C.prepTitle)}</h2>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(C.prepLead)}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {C.prepItems.map((item, i) => {
              const Icon = PREP_ICONS[i] ?? ClipboardList;
              return (
                <div
                  key={L(item.label)}
                  className="animate-fade-up flex items-start gap-4 rounded-xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                    <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(item.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TEST DE POSITIONNEMENT */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
              <GraduationCap size={26} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.testKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.testTitle)}</h2>
            <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{L(C.testBody)}</p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-6 text-left sm:grid-cols-2">
              {C.testPoints.map((p) => (
                <div key={L(p)} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <p className="text-sm text-brand-ink-secondary leading-relaxed">{L(p)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/cours-allemand/test-niveau" className={btnOutline}>
                {L(C.testCta)}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-brand-ink-muted leading-relaxed">{L(C.testNote)}</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMMENT COMMENCER */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.stepsKicker)}</p>
          </div>
          <div className="mt-14 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-0">
            {C.steps.map((step, i) => (
              <div key={step.num} className="contents">
                <div
                  className="animate-fade-up group relative flex-1 overflow-hidden rounded-2xl bg-brand-card p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)] transition-shadow duration-200 hover:shadow-[0_12px_34px_rgba(17,17,17,0.09)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Grand chiffre en filigrane */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-4 font-serif text-[6rem] font-bold leading-none text-brand-gold/10"
                  >
                    {step.num}
                  </span>
                  <span className="relative font-serif text-3xl font-bold text-brand-gold-text">{step.num}</span>
                  <h3 className="relative mt-4 font-serif text-xl text-brand-black leading-snug">{L(step.title)}</h3>
                  <p className="relative mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(step.body)}</p>
                </div>
                {i < C.steps.length - 1 && (
                  <div aria-hidden="true" className="flex items-center justify-center py-1 text-brand-gold/60 lg:px-3">
                    <ArrowRight className="hidden h-6 w-6 lg:block" strokeWidth={1.8} />
                    <ArrowDown className="h-6 w-6 lg:hidden" strokeWidth={1.8} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — QUESTIONS FRÉQUENTES */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.faqTitle)}</h2>
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
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA FINAL */}
      <section className="bg-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.finalKicker)}</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.finalTitle)}</h2>
          <p className="text-lg text-brand-ink-secondary leading-relaxed">{L(C.finalText)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/cours-allemand/test-niveau" className={btnOutline}>
              {L(C.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#parcours" className={btnOutline}>
              {L(C.finalCtaSecondary)}
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
