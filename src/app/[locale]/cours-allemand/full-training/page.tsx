import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Check,
  MessageCircle,
  Headphones,
  BookOpen,
  PenLine,
  FileText,
  Mic,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { FULL_PAGE as F } from "@/lib/full-training-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/cours-allemand/full-training",
    locale,
    title: tr(F.heroTitle, locale),
    description: tr(F.heroIntro, locale),
  });
}

const SKILL_ICONS: LucideIcon[] = [MessageCircle, Headphones, BookOpen, PenLine];
const EXAM_ICONS: LucideIcon[] = [FileText, Headphones, PenLine, Mic, Clock];

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

export default async function FullTrainingPage() {
  const tNav = await getTranslations("nav");
  const tCours = await getTranslations("coursAllemand");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const faqItems = F.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tCours("title"), pathname: "/cours-allemand" },
          { name: L(F.heroKicker), pathname: "/cours-allemand/full-training" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Titre pleine largeur, au-dessus de la photo */}
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(F.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] text-brand-black text-balance leading-tight">
            {L(F.heroTitle)}
          </h1>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div>
              <p
                className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify}`}
                style={{ animationDelay: "80ms" }}
              >
                {L(F.heroIntro)}
              </p>

              <ul className="animate-fade-up mt-7 space-y-2.5" style={{ animationDelay: "120ms" }}>
                {F.heroStats.map((s) => (
                  <li key={L(s)} className="flex items-center gap-2.5 text-sm font-medium text-brand-black">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {L(s)}
                  </li>
                ))}
              </ul>

              <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <Link href="/candidate/signup" className={btnOutline}>
                  {L(F.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#programme" className={btnOutline}>
                  {L(F.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative lg:-mr-8 xl:-mr-16" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/full-training-hero.webp"
                alt="Un groupe d'apprenants échange en allemand autour d'une table, avec leur formatrice"
                width={1672}
                height={941}
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              {/* Fonds dégradés : la photo se fond dans le décor, ses bords disparaissent */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LE PROGRAMME */}
      <section id="programme" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.progKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.progTitle)}</h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.progLead)}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {F.levels.map((level, i) => (
              <div
                key={L(level.tag)}
                className="animate-fade-up flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-gold/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-gold-text">
                    {L(level.tag)}
                  </span>
                  <span className="text-sm font-semibold text-brand-black">{L(level.hours)}</span>
                </div>
                <p className="mt-3 text-xs font-medium text-brand-ink-muted">{L(level.sub)}</p>
                <p className={`mt-3 text-sm text-brand-ink-secondary leading-relaxed ${justify}`}>{L(level.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — LE RYTHME */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.rhythmKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(F.rhythmTitle)}</h2>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.rhythmLead)}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Rythme */}
            <div className="rounded-2xl bg-brand-white p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)]">
              <ul className="space-y-4">
                {F.rhythmPoints.map((p) => (
                  <li key={L(p)} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                      <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-brand-ink-secondary">{L(p)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-brand-ink-muted leading-relaxed">{L(F.rhythmNote)}</p>
            </div>

            {/* Durée */}
            <div className="rounded-2xl bg-brand-white p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.durationLabel)}</p>
              <ul className="mt-5 space-y-2.5">
                {F.durationItems.map((d) => (
                  <li key={L(d)} className="flex items-center justify-between border-b border-brand-grid/60 pb-2.5 text-sm text-brand-ink-secondary last:border-0">
                    {L(d)}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-serif text-lg text-brand-black leading-snug">{L(F.durationTotal)}</p>
              <p className="mt-2 text-sm text-brand-ink-muted leading-relaxed">{L(F.durationTotalNote)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MÉTHODE */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.methodKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.methodTitle)}</h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.methodLead)}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {F.skills.map((item, i) => {
              const Icon = SKILL_ICONS[i] ?? MessageCircle;
              return (
                <div
                  key={L(item.label)}
                  className="animate-fade-up flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
                    <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                  <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(item.text)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-brand-card p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.priorityLabel)}</p>
            <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.priorityText1)}</p>
            <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.priorityText2)}</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VIE PROFESSIONNELLE */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.workKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(F.workTitle)}</h2>
          <div className="mt-4 space-y-4">
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.workText1)}</p>
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.workText2)}</p>
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.workText3)}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {L(F.workTags)
              .split(" · ")
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-gold/12 px-5 py-2.5 font-serif text-sm font-semibold tracking-wide text-brand-gold-text"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — PRÉPARATION À L'EXAMEN */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.examKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.examTitle)}</h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.examLead)}</p>

          <ol className="mt-12 space-y-3">
            {F.examItems.map((item, i) => {
              const Icon = EXAM_ICONS[i] ?? FileText;
              return (
                <li
                  key={L(item.label)}
                  className="animate-fade-up flex flex-col gap-3 rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:flex-row sm:items-center sm:gap-6 sm:p-7"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-4 sm:w-[18rem] sm:shrink-0">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold font-serif text-sm font-bold text-brand-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                  </div>
                  <p className="text-sm text-brand-ink-secondary leading-relaxed sm:flex-1">{L(item.text)}</p>
                </li>
              );
            })}
          </ol>
          <p className={`mt-8 text-sm text-brand-ink-muted leading-relaxed ${justify}`}>{L(F.examNote)}</p>
        </div>
      </section>

      {/* SECTION 7 — AVANT DE COMMENCER */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.beforeKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.beforeTitle)}</h2>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{L(F.beforeText1)}</p>
          <p className="mt-3 text-brand-ink-secondary leading-relaxed">{L(F.beforeText2)}</p>
          <div className="mt-8 flex justify-center">
            <Link href="/book-appointment" className={btnOutline}>
              {L(F.beforeCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — QUESTIONS FRÉQUENTES */}
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

      {/* SECTION 9 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.finalKicker)}</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(F.finalText)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/candidate/signup" className={btnOutline}>
              {L(F.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#programme" className={btnOutline}>
              {L(F.finalCtaSecondary)}
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
