import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.coursAllemand;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("coursAllemand");
  return buildMetadata({
    pathname: "/cours-allemand/full-training",
    locale,
    title: t("fullPageTitle"),
    description: t("fullPageSub"),
  });
}

export default async function FullTrainingPage() {
  const t = await getTranslations("coursAllemand");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("coursAllemand");

  const levels = [
    { id: "a1", title: content.a1Title, duree: content.a1Duree, sous: content.a1Sous, body: content.a1Body },
    { id: "a2", title: content.a2Title, duree: content.a2Duree, sous: content.a2Sous, body: content.a2Body },
    { id: "b1", title: content.b1Title, duree: content.b1Duree, sous: content.b1Sous, body: content.b1Body },
    { id: "b2", title: content.b2Title, duree: content.b2Duree, sous: content.b2Sous, body: content.b2Body },
    { id: "examen", title: content.prepTitle, duree: content.prepDuree, sous: null, body: content.prepBody },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/cours-allemand" },
          { name: content.fullCardBadge, pathname: "/cours-allemand/full-training" },
        ]}
      />

      <PageHero title={content.fullPageTitle} subtitle={content.fullPageSub} />

      <AnchorSection
        id="parcours"
        eyebrow={content.parcoursEyebrow}
        title={content.parcoursTitle}
        lead={content.parcoursLead}
      >
        {/* Rythme : le détail qui distingue un cours intensif d'un cours du soir */}
        <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-5 py-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-text">
            {content.rythmeLabel}
          </span>
          <span className="text-sm text-brand-ink-secondary">{content.rythmeText}</span>
        </div>

        <ol className="space-y-4 max-w-3xl">
          {levels.map((level, i) => (
            <li
              key={level.id}
              id={level.id}
              className="animate-fade-up scroll-mt-24 flex gap-5 rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 h-10 w-10 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <h3 className="font-serif text-lg text-brand-black">{level.title}</h3>
                  <span className="text-xs font-medium text-brand-gold-text">{level.duree}</span>
                </div>
                {level.sous && (
                  <p className="text-xs text-brand-ink-muted mb-1.5">
                    {content.sousLabel} : {level.sous}
                  </p>
                )}
                <p className="text-sm text-brand-ink-secondary">{level.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-brand-ink-muted">{content.totalNote}</p>
        <div className="mt-8">
          <Link
            href="/candidate/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaInscription}
          </Link>
        </div>
      </AnchorSection>

      {/* Notre différence */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.metierEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.metierTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.metierBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.metierBody2}</p>
        </div>
      </section>

      {/* Examens */}
      <AnchorSection
        id="examens"
        white
        eyebrow={content.examensEyebrow}
        title={content.examensTitle}
        lead={content.examensLead}
      >
        <Link
          href="/cours-allemand/preparation-examens"
          className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
        >
          {content.examensCta}
        </Link>
      </AnchorSection>
    </div>
  );
}
