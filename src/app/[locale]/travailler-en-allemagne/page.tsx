import Image from "next/image";
import { Fragment } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Briefcase, Check, GraduationCap } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { CoursAllemandCta } from "@/components/marketing/cours-allemand-cta";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.travailler;

export const generateMetadata = () =>
  metadataFromNamespace("travailler", "/travailler-en-allemagne");

// Split text into n balanced lines at the word boundaries nearest to each n-th of the
// length. Locale-agnostic, so forced line breaks stay sensible across FR/DE/EN.
function balancedLines(text: string, n: number): string[] {
  const words = text.split(" ");
  if (words.length < n) return [text];
  const cum: number[] = [];
  let a = 0;
  for (const w of words) {
    a += w.length + 1;
    cum.push(a);
  }
  const total = text.length;
  const breaks: number[] = [];
  for (let k = 1; k < n; k++) {
    const target = (total * k) / n;
    const from = (breaks[breaks.length - 1] ?? 0) + 1;
    let best = from;
    let bestDiff = Infinity;
    for (let i = from; i < words.length; i++) {
      const diff = Math.abs(cum[i - 1] - target);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = i;
      }
    }
    breaks.push(best);
  }
  const idx = [0, ...breaks, words.length];
  return Array.from({ length: n }, (_, k) => words.slice(idx[k], idx[k + 1]).join(" "));
}

function Flow({ steps, highlightLast }: { steps: string[]; highlightLast?: boolean }) {
  return (
    // flex-1 + justify-between lets flows with different step counts fill the same
    // card height, so both cards read as the same length.
    <ol className="relative mt-6 flex flex-1 flex-col justify-between">
      <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px -translate-x-1/2 bg-brand-grid" />
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="relative flex items-start gap-3 py-1.5">
            <span
              className={`relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full ring-2 ring-brand-white ${
                highlightLast && last ? "bg-brand-gold" : "bg-brand-gold/40"
              }`}
            />
            <span className={`text-sm leading-snug ${highlightLast && last ? "font-semibold text-brand-black" : "text-brand-ink-secondary"}`}>
              {s}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export default async function TravaillerPage() {
  const t = await getTranslations("travailler");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("travailler");
  const h = content.hub;
  const wa = whatsappLink(WHATSAPP_NUMBERS[0].e164);
  const qMark = h.heroTitle.indexOf("?");
  const heroKicker = qMark >= 0 ? h.heroTitle.slice(0, qMark + 1) : "";
  const heroMain = qMark >= 0 ? h.heroTitle.slice(qMark + 1).trim() : h.heroTitle;
  const [heroLine1, heroLine2] = balancedLines(heroMain, 2);
  const subLines = balancedLines(h.heroSubtitle, 3);

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/travailler-en-allemagne" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="/images/emploi-direct-hero.webp"
            alt="Une professionnelle prépare son dossier pour travailler ou se former en Allemagne"
            fill
            priority
            sizes="52vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-14 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-center lg:py-20">
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
              {heroKicker}
            </p>
            <h1 className="animate-fade-up mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-brand-black leading-[1.1]">
              <span className="block">{heroLine1}</span>
              <span className="block">{heroLine2}</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
              {subLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link
                href="/evaluation"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {h.heroPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/secteurs"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-black/25 px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
              >
                {h.heroSecondary}
              </Link>
            </div>
            <p className="animate-fade-up mt-7 flex items-center gap-x-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-gold-text" style={{ animationDelay: "200ms" }}>
              {h.heroTags.split(" · ").map((w, i) => (
                <Fragment key={w}>
                  {i > 0 && <span aria-hidden="true" className="inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-brand-gold" />}
                  <span>{w}</span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Are you concerned? — eligibility checklist */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-text">
            {h.concernedIntro}
          </p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-[1.9rem] xl:text-[2.1rem] text-brand-black leading-[1.15]">
            {h.concernedTitle}
          </h2>

          <ul className="mt-10 divide-y divide-brand-grid border-y border-brand-grid">
            {h.concerned.map((c, i) => (
              <li
                key={c}
                className="flex items-center gap-4 py-5 sm:gap-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-black shadow-[0_0_24px_rgba(195,154,62,0.28)]">
                  <Check size={20} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-base text-brand-black sm:text-lg">{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-brand-ink-secondary leading-relaxed">{h.concernedNote}</p>
          <p className="mt-2 text-xs text-brand-ink-muted">
            <a
              href="https://www.make-it-in-germany.com/en/visa-residence/types/work-qualified-professionals"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-gold-text"
            >
              {h.concernedSource}
            </a>
          </p>
          <Link
            href="/evaluation"
            className="press mt-9 inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black"
          >
            {h.concernedCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Direct employment OR Ausbildung */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.compareTitle}</h2>
          <div className="mx-auto mt-10 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-brand-grid bg-brand-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-text">
                  <Briefcase size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-black">{h.compareEmploiName}</h3>
                  <p className="text-sm text-brand-ink-secondary sm:min-h-[2.5rem]">{h.compareEmploiSub}</p>
                </div>
              </div>
              <Flow steps={h.compareEmploiSteps} highlightLast />
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-brand-grid bg-brand-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-text">
                  <GraduationCap size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-black">{h.compareAusName}</h3>
                  <p className="text-sm text-brand-ink-secondary sm:min-h-[2.5rem]">{h.compareAusSub}</p>
                </div>
              </div>
              <Flow steps={h.compareAusSteps} />
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl rounded-2xl border border-brand-black/10 bg-brand-card px-6 py-5 text-center font-serif text-base text-brand-black text-balance leading-snug">
            {h.compareMessage}
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.recTitle}</h2>
          <p className="mt-5 text-brand-ink-secondary leading-relaxed lg:whitespace-nowrap">{h.recIntro}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-grid bg-brand-white p-6">
              <h3 className="font-serif text-lg text-brand-black">{h.recRegTitle}</h3>
              <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{h.recRegText}</p>
              <p className="mt-3 text-sm font-medium text-brand-gold-text">{h.recRegExamples}</p>
            </div>
            <div className="rounded-2xl border border-brand-grid bg-brand-white p-6">
              <h3 className="font-serif text-lg text-brand-black">{h.recNonRegTitle}</h3>
              <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{h.recNonRegText}</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-brand-gold/30 bg-brand-gold/[0.06] p-6">
            <h3 className="font-serif text-lg text-brand-black">{h.recPartialTitle}</h3>
            <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{h.recPartialText}</p>
          </div>
          <p className="mt-3 text-xs text-brand-ink-muted">
            <a href="https://www.make-it-in-germany.com/en/working-in-germany/recognition/procedure" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold-text">
              {h.recSource}
            </a>
          </p>
          <Link
            href="/candidats/reconnaissance-diplomes"
            className="press mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {h.recCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Path */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.pathTitle}</h2>
          <ol className="mx-auto mt-12 max-w-2xl space-y-9">
            {h.steps.map((s, i) => {
              const last = i === h.steps.length - 1;
              return (
                <li key={s.n} className="flex flex-col items-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-white font-serif text-lg text-brand-gold-text">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-brand-black">{s.title}</h3>
                  <p className="mt-1 max-w-md text-sm text-brand-ink-secondary leading-relaxed">{s.detail}</p>
                  {!last && <span aria-hidden="true" className="mt-6 h-6 w-px bg-brand-grid" />}
                </li>
              );
            })}
          </ol>
        </div>
      </section>


      {/* Our role / what we don't promise */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">{h.roleTitle}</h2>
              <ul className="mt-6 space-y-3">
                {h.role.map((r) => (
                  <li key={r} className="flex gap-3 text-brand-ink-secondary leading-snug">
                    <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-1 shrink-0 text-brand-gold-text" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/[0.06] p-7 sm:p-8">
              <h3 className="font-serif text-xl text-brand-black">{h.roleNotTitle}</h3>
              <p className="mt-3 text-brand-ink-secondary leading-relaxed">{h.roleNot}</p>
            </div>
          </div>
        </div>
      </section>

      {/* After arrival — a connected three-phase journey */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.afterTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {h.after.map((a, i) => (
              <div
                key={a.label}
                className="lift-on-hover animate-fade-up rounded-2xl border border-brand-grid bg-brand-white p-7"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <h3 className="font-serif text-xl text-brand-black">{a.label}</h3>
                <ul className="mt-4 space-y-2.5">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-brand-ink-secondary">
                      <Check size={16} strokeWidth={2.25} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-brand-grid bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.finalTitle}</h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{h.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {h.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {h.finalWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <CoursAllemandCta locale={locale} />
    </div>
  );
}
