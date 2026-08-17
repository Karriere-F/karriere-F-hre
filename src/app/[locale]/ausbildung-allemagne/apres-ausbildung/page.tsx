import { getLocale, getTranslations } from "next-intl/server";
import { Wrench, HeartPulse, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("ausbildung");
  return buildMetadata({
    pathname: "/ausbildung-allemagne/apres-ausbildung",
    locale,
    title: t("apresPageTitle"),
    description: t("apresPageSub"),
  });
}

export default async function ApresAusbildungPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: tNav("ausApres"), pathname: "/ausbildung-allemagne/apres-ausbildung" },
        ]}
      />

      <PageHero title={content.apresPageTitle} subtitle={content.apresPageSub} />

      <AnchorSection id="apres" white eyebrow={content.apresEyebrow} title={content.apresTitle}>
        <blockquote className="border-l-4 border-brand-gold pl-5 py-1 max-w-3xl mb-6">
          <p className="font-serif text-xl sm:text-2xl text-brand-black italic">{content.apresQuote}</p>
        </blockquote>
        <p className="text-brand-ink-secondary max-w-3xl mb-8">{content.apresIntro}</p>

        {/* Les deux transformations */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mb-10">
          {[
            { Icon: Wrench, kicker: content.path1Kicker, goal: content.path1Goal, body: content.path1Body },
            { Icon: HeartPulse, kicker: content.path2Kicker, goal: content.path2Goal, body: content.path2Body },
          ].map(({ Icon, kicker, goal, body }, i) => (
            <div
              key={kicker}
              className="lift-on-hover animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text mb-4">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="text-xs uppercase tracking-widest text-brand-ink-muted mb-1">{kicker}</p>
              <div className="flex items-center gap-2 mb-3">
                <span aria-hidden="true" className="text-brand-gold text-2xl font-bold leading-none">
                  →
                </span>
                <span className="font-serif text-2xl text-brand-gold-text">{goal}</span>
              </div>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>

        {/* Accès à l'université sans Abitur (voie des beruflich Qualifizierte) */}
        <div className="rounded-xl border-l-4 border-brand-gold bg-brand-gold/10 p-6 max-w-3xl mb-6">
          <div className="flex items-start gap-3">
            <GraduationCap size={24} strokeWidth={1.75} aria-hidden="true" className="shrink-0 text-brand-gold-text mt-0.5" />
            <div>
              <h3 className="font-serif text-lg text-brand-black mb-1">{content.univTitle}</h3>
              <p className="text-sm text-brand-ink-secondary">{content.univBody}</p>
            </div>
          </div>
        </div>

        {/* Les deux voies officielles vers l'université */}
        <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mb-8">
          {[
            { n: "1", title: content.route1Title, body: content.route1Body },
            { n: "2", title: content.route2Title, body: content.route2Body },
          ].map(({ n, title, body }, i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-brand-gold text-brand-black font-serif font-bold text-sm flex items-center justify-center">
                  {n}
                </span>
                <h3 className="font-serif text-lg text-brand-black">{title}</h3>
              </div>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>

        {/* Les chiffres réels */}
        <dl className="grid gap-4 sm:grid-cols-3 max-w-4xl mb-3">
          {[
            [content.apresStat1Num, content.apresStat1Label],
            [content.apresStat2Num, content.apresStat2Label],
            [content.apresStat3Num, content.apresStat3Label],
          ].map(([num, label], i) => (
            <div
              key={label}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <dt className="font-serif text-3xl text-brand-gold-text">{num}</dt>
              <dd className="mt-1 text-sm text-brand-ink-secondary">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-brand-ink-muted max-w-4xl mb-8">{content.apresSource}</p>

        {/* Payé, puis étudier */}
        <p className="font-medium text-brand-black max-w-3xl mb-6">{content.payeLine}</p>

        <Link
          href="/ausbildung-allemagne/metiers"
          className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
        >
          {content.ctaMetiers}
        </Link>
      </AnchorSection>
    </div>
  );
}
