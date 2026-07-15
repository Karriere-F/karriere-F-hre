import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { Link, getPathname } from "../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { createClient } from "@/lib/supabase/server";
import { OCCUPATION_CATEGORIES, categoryLabel } from "@/lib/occupation-categories";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "../../../i18n/routing";
import type frMessages from "../../../messages/fr.json";

type HomeContent = typeof frMessages.home;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/",
    locale,
    title: t("heroTitle"),
    description: t("heroSubtitle"),
  });
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const content = await getPageContent<HomeContent>("home");
  const locale = (await getLocale()) as Locale;
  const formationsHref = `${getPathname({ href: "/candidats", locale })}#formations`;
  const supabase = await createClient();

  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("category")
    .eq("is_published", true);

  const categoryCounts = new Map<string, number>();
  for (const occ of occupations ?? []) {
    categoryCounts.set(occ.category, (categoryCounts.get(occ.category) ?? 0) + 1);
  }
  const categories = Object.keys(OCCUPATION_CATEGORIES).filter((c) => categoryCounts.has(c));

  return (
    <div className="flex flex-col">
      {/* Hero — split screen, light background, real photo on the right */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col items-start gap-6">
            <h1 className="animate-fade-up text-4xl sm:text-5xl font-serif text-brand-black leading-tight">
              {content.heroTitle}
            </h1>
            <p
              className="animate-fade-up max-w-xl text-brand-ink-secondary text-lg"
              style={{ animationDelay: "80ms" }}
            >
              {content.heroSubtitle}
            </p>
            <div
              className="animate-fade-up flex flex-wrap gap-4 mt-2"
              style={{ animationDelay: "160ms" }}
            >
              <Link
                href="/candidats"
                className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
              >
                {t("ctaCandidate")}
              </Link>
              <Link
                href="/entreprises"
                className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
              >
                {t("ctaEmployer")}
              </Link>
            </div>
          </div>
          <div
            className="animate-fade-up relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
            style={{ animationDelay: "120ms" }}
          >
            <Image
              src="/images/home-hero.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Deux rives, un même besoin */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2 text-center">
            {content.riveEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-3 text-center">
            {content.riveTitle}
          </h2>
          <p className="text-brand-ink-secondary max-w-2xl mx-auto mb-10 text-center">
            {content.riveLead}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-7">
              <h3 className="font-serif text-lg text-brand-black mb-2">{content.riveDeTitle}</h3>
              <p className="text-brand-ink-secondary text-sm">{content.riveDeBody}</p>
            </div>
            <div
              className="animate-fade-up rounded-xl bg-brand-black text-brand-white p-7"
              style={{ animationDelay: "60ms" }}
            >
              <h3 className="font-serif text-lg mb-2">{content.riveAfTitle}</h3>
              <p className="text-brand-white/75 text-sm">{content.riveAfBody}</p>
            </div>
          </div>
          <p className="text-center font-serif text-lg text-brand-gold-text mt-8">
            {content.bridgeLine} →
          </p>
        </div>
      </section>

      {/* Comment se passe la traversée */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2 text-center">
            {content.processEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-3 text-center">
            {content.processTitle}
          </h2>
          <p className="text-brand-ink-secondary max-w-2xl mx-auto mb-10 text-center">
            {content.processLead}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-6"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-gold text-brand-black font-serif font-semibold text-sm mb-3">
                  {i}
                </span>
                <h3 className="text-brand-black font-medium mb-1">
                  {content[`proc${i}Title` as "proc1Title"]}
                </h3>
                <p className="text-sm text-brand-ink-secondary">
                  {content[`proc${i}Body` as "proc1Body"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shortage-occupation categories — the "métiers en pénurie" grid */}
      {categories.length > 0 && (
        <section className="bg-brand-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl font-serif text-brand-ink mb-3">
                {content.categoriesTitle}
              </h2>
              <p className="text-brand-ink-secondary">{content.categoriesSubtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const Icon = OCCUPATION_CATEGORIES[cat].icon;
                return (
                  <Link
                    key={cat}
                    href="/candidats/metiers"
                    className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid bg-brand-card p-6 flex items-start gap-4"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="shrink-0 h-11 w-11 rounded-full bg-brand-gold/15 text-brand-gold-text flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-brand-black font-medium">
                        {categoryLabel(cat, locale)}
                      </h3>
                      <p className="text-sm text-brand-ink-muted mt-1">
                        {t("occupationsCount", { count: categoryCounts.get(cat) ?? 0 })}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/candidats/metiers"
              className="press inline-flex mt-10 rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
            >
              {content.categoriesCta}
            </Link>
          </div>
        </section>
      )}

      {/* Why Karriere Fähre */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{content.whyTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="lift-on-hover animate-fade-up rounded-lg bg-brand-white border border-brand-grid p-6"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="text-brand-gold-text font-semibold mb-2">
                  {content[`why${i}Title` as "why1Title"]}
                </h3>
                <p className="text-brand-ink-secondary text-sm leading-relaxed">
                  {content[`why${i}Body` as "why1Body"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two tracks */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{content.tracksTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <a
              href={formationsHref}
              className="lift-on-hover rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors duration-150 block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {content.fastTrackTitle}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {content.fastTrackBody}
              </p>
            </a>
            <a
              href={formationsHref}
              className="lift-on-hover rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors duration-150 block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {content.fullTrainingTitle}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {content.fullTrainingBody}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA — the one deliberate dark band on the page */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalCtaTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalCtaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/postuler"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("ctaCandidate")}
            </Link>
            <Link
              href="/book-appointment"
              className="press rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {t("ctaBook")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
