import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.visaChancenkarte;

export const generateMetadata = () =>
  metadataFromNamespace("visaChancenkarte", "/visa-allemagne/chancenkarte");

export default async function ChancenkartePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("visaChancenkarte");

  const quoi = [
    [content.quoi1Title, content.quoi1Body],
    [content.quoi2Title, content.quoi2Body],
    [content.quoi3Title, content.quoi3Body],
  ];

  const base = [
    [content.base1Title, content.base1Body],
    [content.base2Title, content.base2Body],
    [content.base3Title, content.base3Body],
  ];

  // Point values from § 20a AufenthG, sourced + attributed in pointsNote. These stay in
  // the CMS registry so they can be refreshed if the law's schedule changes.
  const points = [
    [content.p1Label, content.p1Val],
    [content.p2Label, content.p2Val],
    [content.p3Label, content.p3Val],
    [content.p4Label, content.p4Val],
    [content.p5Label, content.p5Val],
    [content.p6Label, content.p6Val],
    [content.p7Label, content.p7Val],
    [content.p8Label, content.p8Val],
    [content.p9Label, content.p9Val],
    [content.p10Label, content.p10Val],
    [content.p11Label, content.p11Val],
    [content.p12Label, content.p12Val],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("visa"), pathname: "/visa-allemagne" },
          { name: content.title, pathname: "/visa-allemagne/chancenkarte" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      {/* C'est quoi */}
      <AnchorSection
        id="c-est-quoi"
        white
        eyebrow={content.quoiEyebrow}
        title={content.quoiTitle}
        lead={content.quoiLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {quoi.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Conditions de base */}
      <AnchorSection
        id="conditions"
        eyebrow={content.baseEyebrow}
        title={content.baseTitle}
        lead={content.baseLead}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {base.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up flex gap-3 rounded-lg border border-brand-grid bg-brand-white p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-brand-black font-medium text-sm mb-1">{title}</h4>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Système à points */}
      <AnchorSection
        id="points"
        white
        eyebrow={content.pointsEyebrow}
        title={content.pointsTitle}
        lead={content.pointsLead}
      >
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-brand-grid bg-brand-card p-3 text-left font-serif font-semibold text-brand-black">
                  {content.pointsCol1}
                </th>
                <th className="border border-brand-grid bg-brand-card p-3 text-center font-serif font-semibold text-brand-black w-20">
                  {content.pointsCol2}
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map(([label, value], i) => (
                <tr key={i}>
                  <td className="border border-brand-grid p-3 text-brand-ink-secondary">{label}</td>
                  <td className="border border-brand-grid p-3 text-center font-serif font-bold text-brand-gold-text">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-brand-ink-muted max-w-3xl italic">{content.pointsNote}</p>
      </AnchorSection>

      {/* Notre rôle */}
      <AnchorSection id="notre-role" eyebrow={content.roleEyebrow} title={content.roleTitle}>
        <div className="max-w-3xl">
          <p className="text-brand-ink-secondary mb-6">{content.roleBody}</p>
          <Link
            href="/postuler"
            className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.roleCta}
          </Link>
        </div>

        {/* Load-bearing: official German criteria, not a Karriere Fähre promise. */}
        <div className="mt-8 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-3xl">
          <p className="text-sm text-brand-ink-secondary">{content.disclaimer}</p>
        </div>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <Link
            href="/postuler"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
