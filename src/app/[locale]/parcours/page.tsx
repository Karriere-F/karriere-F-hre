import Image from "next/image";
import { getLocale } from "next-intl/server";
import { ArrowRight, Briefcase, ChevronDown, Compass, GraduationCap } from "lucide-react";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { SECTORS_ALL, ACTIVE_SECTOR_PATH } from "@/lib/secteurs";
import { tr } from "@/lib/localized";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.parcours;

const SECTOR_IMG: Record<string, string> = {
  sante: "/images/metiers/sante-equipe.jpg",
  informatique: "/images/metiers/informaticiens.jpg",
  industrie: "/images/metiers/industrie-v3.jpg",
  construction: "/images/metiers/btp.jpg",
  logistique: "/images/metiers/logistique-v2.jpg",
  ingenierie: "/images/metiers/ingenieurs-v2.jpg",
  hotellerie: "/images/metiers/hotellerie-v2.jpg",
};

export const generateMetadata = () => metadataFromNamespace("parcours", "/parcours");

// Vertical step flow with a chevron between steps — used by the two comparison
// columns and the direct-employment path.
function Flow({ steps, highlightLast = false }: { steps: string[]; highlightLast?: boolean }) {
  return (
    <ol className="flex flex-col items-stretch gap-0">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="flex flex-col items-center">
            <div
              className={`w-full rounded-lg border px-4 py-3 text-center text-sm ${
                last && highlightLast
                  ? "border-brand-gold bg-brand-gold/10 font-semibold text-brand-black"
                  : "border-brand-grid bg-brand-white text-brand-ink-secondary"
              }`}
            >
              {s}
            </div>
            {!last && (
              <ChevronDown size={18} aria-hidden="true" className="my-1.5 text-brand-gold" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default async function ParcoursPage() {
  const content = await getPageContent<Content>("parcours");
  const locale = (await getLocale()) as Locale;

  const cards = [
    { key: "seFormer" as const, href: "/ausbildung-allemagne" as const, icon: GraduationCap, data: content.cards.seFormer },
    { key: "travailler" as const, href: "/travailler-en-allemagne" as const, icon: Briefcase, data: content.cards.travailler },
    { key: "preparer" as const, href: "/candidats" as const, icon: Compass, data: content.cards.preparer },
  ];

  return (
    <div className="flex flex-col">
      {/* 1 — Hero + three routes */}
      <section className="relative overflow-hidden bg-brand-white">
        {/* Upper hero: text left, photo bleeding in from the right and fading into the page */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block">
            <Image
              src="/images/candidats-soins-technique.jpg"
              alt="Une infirmière et un technicien africains, prêts pour une carrière qualifiée en Allemagne"
              fill
              priority
              sizes="54vw"
              className="object-cover object-[center_10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl py-14 lg:flex lg:min-h-[520px] lg:flex-col lg:justify-center lg:py-20">
              <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
                {content.hero.title}
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-lg text-lg text-brand-ink-secondary leading-relaxed"
                style={{ animationDelay: "80ms" }}
              >
                {content.hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {cards.map(({ key, href, icon: Icon, data }, i) => (
              <Link
                key={key}
                href={href}
                style={{ animationDelay: `${120 + i * 80}ms` }}
                className="lift-on-hover animate-fade-up group flex flex-col rounded-2xl border border-brand-grid bg-brand-white p-7 transition-colors hover:border-brand-gold"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold-text transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                    {data.kicker}
                  </span>
                </div>
                <h2 className="mt-4 text-center font-serif text-2xl text-brand-black">{data.name}</h2>
                <p className="mt-3 flex-1 text-sm text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">
                  {data.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                  {data.cta}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-brand-gold-text transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Which path is yours? */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.compare.title}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-grid bg-brand-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
                  <Briefcase size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-brand-ink-secondary">{content.compare.qualifiedTitle}</p>
                  <p className="font-serif text-xl text-brand-gold-text">{content.compare.qualifiedPath}</p>
                </div>
              </div>
              <Flow steps={content.compare.qualifiedSteps} highlightLast />
            </div>
            <div className="rounded-2xl border border-brand-grid bg-brand-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
                  <GraduationCap size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-brand-ink-secondary">{content.compare.acquireTitle}</p>
                  <p className="font-serif text-xl text-brand-gold-text">{content.compare.acquirePath}</p>
                </div>
              </div>
              <Flow steps={content.compare.acquireSteps} highlightLast />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Sectors */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">{content.sectors.title}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS_ALL.map((sector, i) => {
              const item = content.sectors.items[sector.slug as keyof typeof content.sectors.items];
              const href = ACTIVE_SECTOR_PATH[sector.slug as keyof typeof ACTIVE_SECTOR_PATH];
              return (
                <div
                  key={sector.slug}
                  style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
                  className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-brand-grid bg-brand-white"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={SECTOR_IMG[sector.slug]}
                      alt={tr(sector.name, locale)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl text-brand-black">{tr(sector.name, locale)}</h3>
                    <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{item.blurb}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-ink-muted">
                      {content.sectors.metiersLabel}
                    </p>
                    <p className="mt-1 text-sm text-brand-ink-secondary">{item.metiers}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-ink-muted">
                      {content.sectors.parcoursLabel}
                    </p>
                    <p className="mt-1 text-sm text-brand-ink-secondary">{item.parcours}</p>
                    <Link
                      href={href}
                      className="press mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-black hover:text-brand-gold-text"
                    >
                      {content.sectors.cta}
                      <ArrowRight size={16} aria-hidden="true" className="text-brand-gold-text" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — Ausbildung explained */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.ausbildung.title}
          </h2>
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">
            {content.ausbildung.text}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {content.ausbildung.pillars.map((p) => (
              <div key={p.label} className="rounded-xl border border-brand-grid bg-brand-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-text">
                  {p.label}
                </p>
                <p className="mt-2 text-brand-black leading-snug">{p.value}</p>
              </div>
            ))}
          </div>
          <Link
            href="/ausbildung-allemagne"
            className="press mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {content.ausbildung.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 5 — Direct employment explained */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">{content.emploi.title}</h2>
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{content.emploi.text}</p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink-muted">
            {content.emploi.stepsTitle}
          </p>
          <div className="mt-4 max-w-md">
            <Flow steps={content.emploi.steps} highlightLast />
          </div>
          <Link
            href="/visa-allemagne/travailleur-qualifie"
            className="press mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {content.emploi.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 6 — Which path for which profile? */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">{content.matcher.title}</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-grid bg-brand-white">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-brand-grid text-left">
                  <th className="px-5 py-3 font-semibold text-brand-black">{content.matcher.colSituation}</th>
                  <th className="px-5 py-3 font-semibold text-brand-black">{content.matcher.colParcours}</th>
                </tr>
              </thead>
              <tbody>
                {content.matcher.rows.map((r) => (
                  <tr key={r.situation} className="border-b border-brand-grid/60 last:border-0">
                    <td className="px-5 py-3.5 text-brand-ink-secondary">{r.situation}</td>
                    <td className="px-5 py-3.5 font-medium text-brand-gold-text">{r.parcours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <p className="font-medium text-brand-black">{content.matcher.ctaText}</p>
            <Link
              href="/evaluation"
              className="press inline-flex h-[50px] items-center justify-center gap-2 rounded-md bg-brand-gold px-7 font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
            >
              {content.matcher.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Method */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">
            {content.method.title}
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {content.method.steps.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-3xl text-brand-gold-light">{s.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-brand-white">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Final CTA */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.finalCta.title}
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
            >
              {content.finalCta.primary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-black/25 px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
            >
              {content.finalCta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
