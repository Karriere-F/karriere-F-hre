import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildungSalaire;

export const generateMetadata = () =>
  metadataFromNamespace("ausbildungSalaire", "/ausbildung-allemagne/salaire");

export default async function AusbildungSalairePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildungSalaire");

  const eligibiliteHref = `${getPathname({ href: "/candidats", locale })}#eligibilite`;

  // Statutory minimum (Mindestausbildungsvergütung) for contracts starting in 2026 --
  // BIBB, under the BBiG. Public German data, attributed on the page; these are NOT
  // Karriere Fähre figures and must never be presented as guaranteed pay.
  const minimums = [
    [content.minY1, content.minV1],
    [content.minY2, content.minV2],
    [content.minY3, content.minV3],
    [content.minY4, content.minV4],
  ];

  const moyennes = [
    [content.moy1Label, content.moy1Value],
    [content.moy2Label, content.moy2Value],
    [content.moy3Label, content.moy3Value],
  ];

  const varie = [
    [content.varie1Title, content.varie1Body],
    [content.varie2Title, content.varie2Body],
    [content.varie3Title, content.varie3Body],
    [content.varie4Title, content.varie4Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: content.title, pathname: "/ausbildung-allemagne/salaire" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      {/* Minimum légal */}
      <AnchorSection
        id="minimum"
        white
        eyebrow={content.minEyebrow}
        title={content.minTitle}
        lead={content.minLead}
      >
        <div className="max-w-2xl overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-brand-grid bg-brand-card p-3 text-left font-serif font-semibold text-brand-black">
                  {content.minCol1}
                </th>
                <th className="border border-brand-grid bg-brand-card p-3 text-left font-serif font-semibold text-brand-black">
                  {content.minCol2}
                </th>
              </tr>
            </thead>
            <tbody>
              {minimums.map(([year, value]) => (
                <tr key={year}>
                  <td className="border border-brand-grid p-3 text-brand-ink-secondary">{year}</td>
                  <td className="border border-brand-grid p-3 font-medium text-brand-black">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-brand-ink-muted max-w-2xl italic">{content.minNote}</p>
      </AnchorSection>

      {/* Moyennes réelles */}
      <AnchorSection
        id="moyenne"
        eyebrow={content.moyEyebrow}
        title={content.moyTitle}
        lead={content.moyLead}
      >
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {moyennes.map(([label, value], i) => (
            <div
              key={label}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-serif text-2xl text-brand-gold-text mb-1">{value}</div>
              <div className="text-sm text-brand-ink-secondary">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-brand-ink-secondary max-w-3xl mb-4">{content.moyBody}</p>
        <p className="text-xs text-brand-ink-muted max-w-3xl italic">{content.moyNote}</p>
      </AnchorSection>

      {/* Ce qui fait varier */}
      <AnchorSection id="variations" white eyebrow={content.varieEyebrow} title={content.varieTitle}>
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {varie.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-brand-black font-medium text-sm mb-1">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>

        {/* Load-bearing: these are public German averages, not a Karriere Fähre promise. */}
        <div className="mt-8 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-3xl">
          <p className="text-sm text-brand-ink-secondary">{content.disclaimer}</p>
        </div>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <a
            href={eligibiliteHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </a>
        </div>
      </section>
    </div>
  );
}
