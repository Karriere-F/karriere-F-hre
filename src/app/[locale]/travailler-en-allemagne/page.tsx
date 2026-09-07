import Image from "next/image";
import { Fragment } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Briefcase, Check, GraduationCap, ShieldCheck } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { SECTORS_ALL, ACTIVE_SECTOR_PATH, SECTOR_IMAGES } from "@/lib/secteurs";
import { tr } from "@/lib/localized";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.travailler;

export const generateMetadata = () =>
  metadataFromNamespace("travailler", "/travailler-en-allemagne");

function Flow({ steps, highlightLast }: { steps: string[]; highlightLast?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-0">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="relative flex items-start gap-3 pb-5 last:pb-0">
            {!last && <span aria-hidden="true" className="absolute left-[7px] top-5 bottom-0 w-px -translate-x-1/2 bg-brand-grid" />}
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
  // Break the main title into two balanced lines (locale-agnostic: split at the
  // word boundary nearest the middle).
  const mainWords = heroMain.split(" ");
  let splitAt = mainWords.length;
  let acc = 0;
  let bestDiff = Infinity;
  for (let i = 1; i < mainWords.length; i++) {
    acc += mainWords[i - 1].length + 1;
    const diff = Math.abs(acc - heroMain.length / 2);
    if (diff < bestDiff) {
      bestDiff = diff;
      splitAt = i;
    }
  }
  const heroLine1 = mainWords.slice(0, splitAt).join(" ");
  const heroLine2 = mainWords.slice(splitAt).join(" ");

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
            src="/images/emploi-direct-hero.jpg"
            alt="Un technicien qualifié africain intervient sur une armoire électrique dans une usine en Allemagne"
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

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-14 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-center lg:py-20">
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
              {heroKicker}
            </p>
            <h1 className="animate-fade-up mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-brand-black leading-[1.1]">
              <span className="block">{heroLine1}</span>
              <span className="block">{heroLine2}</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
              {h.heroSubtitle}
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
                  {i > 0 && <span aria-hidden="true" className="text-brand-gold/50">·</span>}
                  <span>{w}</span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Are you concerned? — eligibility checklist */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-text">
            {h.concernedIntro}
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black text-balance leading-[1.15]">
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

          <p className="mt-8 max-w-3xl text-sm text-brand-ink-secondary leading-relaxed">{h.concernedNote}</p>
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
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.compareTitle}</h2>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/[0.05] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-text">
                  <Briefcase size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-black">{h.compareEmploiName}</h3>
                  <p className="text-sm text-brand-ink-secondary">{h.compareEmploiSub}</p>
                </div>
              </div>
              <Flow steps={h.compareEmploiSteps} highlightLast />
            </div>
            <div className="rounded-2xl border border-brand-grid bg-brand-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
                  <GraduationCap size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-black">{h.compareAusName}</h3>
                  <p className="text-sm text-brand-ink-secondary">{h.compareAusSub}</p>
                </div>
              </div>
              <Flow steps={h.compareAusSteps} />
            </div>
          </div>
          <p className="mt-8 rounded-2xl border border-brand-black/10 bg-brand-card px-6 py-5 font-serif text-lg text-brand-black text-balance leading-snug">
            {h.compareMessage}
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.recTitle}</h2>
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.recIntro}</p>
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
        <div className="mx-auto max-w-2xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.pathTitle}</h2>
          <ol className="relative mt-12">
            {h.steps.map((s, i) => {
              const last = i === h.steps.length - 1;
              return (
                <li key={s.n} className="relative flex gap-5 pb-8 last:pb-0">
                  {!last && <span aria-hidden="true" className="absolute left-6 top-14 bottom-0 w-px -translate-x-1/2 bg-brand-grid" />}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-white font-serif text-lg text-brand-gold-text">
                    {s.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-lg text-brand-black">{s.title}</h3>
                    <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{s.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.sectorsTitle}</h2>
          <p className="mt-3 text-sm text-brand-ink-muted">{h.sectorsNote}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS_ALL.map((sector) => {
              const href = ACTIVE_SECTOR_PATH[sector.slug as keyof typeof ACTIVE_SECTOR_PATH];
              return (
                <Link
                  key={sector.slug}
                  href={href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-grid bg-brand-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[0_12px_28px_-14px_rgba(17,17,17,0.25)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={SECTOR_IMAGES[sector.slug]}
                      alt={tr(sector.name, locale)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      style={{ objectPosition: "center 18%" }}
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-lg text-brand-black">{tr(sector.name, locale)}</h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-text">
                      {content.hub.heroSecondary}
                      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.salaryTitle}</h2>
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.salaryText}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {h.salaryFactors.map((f) => (
              <div key={f} className="rounded-xl border border-brand-grid bg-brand-card px-5 py-4 text-sm font-medium text-brand-black">
                {f}
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-brand-grid bg-brand-card px-4 py-3.5 text-xs leading-relaxed text-brand-ink-muted">
            <ShieldCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
            <span>{h.salaryDisclaimer}</span>
          </p>
        </div>
      </section>

      {/* Our role / what we don't promise */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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

      {/* After arrival */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.afterTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {h.after.map((a, i) => (
              <div key={a.label} className="rounded-2xl border border-brand-grid bg-brand-white p-6">
                <span className="font-serif text-2xl text-brand-gold-text/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-lg text-brand-black">{a.label}</h3>
                <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">{h.finalTitle}</h2>
          <p className="mt-4 text-brand-white/70 leading-relaxed">{h.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {h.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-white/30 px-8 font-bold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/10"
            >
              {h.finalWhatsapp}
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-white/45">{h.finalTags}</p>
        </div>
      </section>
    </div>
  );
}
