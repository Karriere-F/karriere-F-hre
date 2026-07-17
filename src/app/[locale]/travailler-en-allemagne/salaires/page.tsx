import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.travaillerSalaires;

export const generateMetadata = () =>
  metadataFromNamespace("travaillerSalaires", "/travailler-en-allemagne/salaires");

export default async function TravaillerSalairesPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("travaillerSalaires");

  const eligibiliteHref = `${getPathname({ href: "/candidats", locale })}#eligibilite`;

  // Entgeltatlas (Bundesagentur für Arbeit) medians, sourced + attributed in tableNote.
  // CMS-editable so they can be refreshed each year; each row names the German occupation.
  const rows = [
    [content.r1Label, content.r1Val],
    [content.r2Label, content.r2Val],
    [content.r3Label, content.r3Val],
    [content.r4Label, content.r4Val],
    [content.r5Label, content.r5Val],
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
          { name: tNav("travailler"), pathname: "/travailler-en-allemagne" },
          { name: content.title, pathname: "/travailler-en-allemagne/salaires" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      {/* Repère national */}
      <AnchorSection
        id="repere"
        white
        eyebrow={content.repereEyebrow}
        title={content.repereTitle}
      >
        <p className="text-brand-ink-secondary max-w-3xl">{content.repereLead}</p>
      </AnchorSection>

      {/* Table par secteur */}
      <AnchorSection
        id="par-secteur"
        eyebrow={content.tableEyebrow}
        title={content.tableTitle}
        lead={content.tableLead}
      >
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-brand-grid bg-brand-white p-3 text-left font-serif font-semibold text-brand-black">
                  {content.tableCol1}
                </th>
                <th className="border border-brand-grid bg-brand-white p-3 text-left font-serif font-semibold text-brand-black w-40">
                  {content.tableCol2}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label}>
                  <td className="border border-brand-grid p-3 text-brand-ink-secondary">{label}</td>
                  <td className="border border-brand-grid p-3 font-serif font-bold text-brand-gold-text">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-brand-ink-muted max-w-3xl italic">{content.tableNote}</p>
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

        {/* Load-bearing: public German medians, not a Karriere Fähre promise. */}
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
