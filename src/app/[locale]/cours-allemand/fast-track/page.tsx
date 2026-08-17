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
    pathname: "/cours-allemand/fast-track",
    locale,
    title: t("fastPageTitle"),
    description: t("fastPageSub"),
  });
}

export default async function FastTrackPage() {
  const t = await getTranslations("coursAllemand");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("coursAllemand");

  const includes = [content.fastIncl1, content.fastIncl2, content.fastIncl3, content.fastIncl4];
  const steps = [
    [content.fastStep1Title, content.fastStep1Body],
    [content.fastStep2Title, content.fastStep2Body],
    [content.fastStep3Title, content.fastStep3Body],
    [content.fastStep4Title, content.fastStep4Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/cours-allemand" },
          { name: content.fastCardBadge, pathname: "/cours-allemand/fast-track" },
        ]}
      />

      <PageHero title={content.fastPageTitle} subtitle={content.fastPageSub} />

      <AnchorSection id="fast-track" eyebrow={content.fastEyebrow} title={content.fastTitle} lead={content.fastLead}>
        {/* Ce que comprend le Fast Track : les modules de préparation professionnelle */}
        <h3 className="font-serif text-lg text-brand-black mb-4">{content.fastInclTitle}</h3>
        <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl mb-12">
          {includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-brand-ink-secondary rounded-lg border border-brand-grid bg-brand-card p-4"
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h3 className="font-serif text-lg text-brand-black mb-4">{content.fastStepsTitle}</h3>
        <ol className="space-y-4 max-w-3xl">
          {steps.map(([title, body], i) => (
            <li
              key={title}
              className="animate-fade-up flex gap-5 rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 h-10 w-10 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-brand-black mb-1">{title}</h3>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-3xl">
          <p className="text-sm text-brand-ink-secondary">{content.fastNote}</p>
        </div>
        <div className="mt-6">
          <Link
            href="/postuler"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.fastCta}
          </Link>
        </div>
      </AnchorSection>
    </div>
  );
}
