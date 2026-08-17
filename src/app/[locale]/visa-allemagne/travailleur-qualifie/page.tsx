import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.visaTravailleur;

export const generateMetadata = () =>
  metadataFromNamespace("visaTravailleur", "/visa-allemagne/travailleur-qualifie");

export default async function VisaTravailleurPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("visaTravailleur");

  const quoi = [
    [content.quoi1Title, content.quoi1Body],
    [content.quoi2Title, content.quoi2Body],
    [content.quoi3Title, content.quoi3Body],
  ];
  const conditions = [
    [content.cond1Title, content.cond1Body],
    [content.cond2Title, content.cond2Body],
    [content.cond3Title, content.cond3Body],
  ];
  const roles = [content.role1, content.role2, content.role3, content.role4];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("visa"), pathname: "/visa-allemagne" },
          { name: tNav("visTravailleur"), pathname: "/visa-allemagne/travailleur-qualifie" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/postuler"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaPostuler}
          </Link>
          <a
            href="#conditions"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.condTitle}
          </a>
        </div>
      </div>

      {/* C'est quoi */}
      <AnchorSection id="c-est-quoi" white eyebrow={content.quoiEyebrow} title={content.quoiTitle} lead={content.quoiLead}>
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

      {/* Conditions */}
      <AnchorSection id="conditions" eyebrow={content.condEyebrow} title={content.condTitle} lead={content.condLead}>
        <div className="grid gap-4 sm:grid-cols-3">
          {conditions.map(([title, body], i) => (
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

      {/* Procédure accélérée */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.accelEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.accelTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.accelBody}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.accelNote}</p>
        </div>
      </section>

      {/* Notre rôle */}
      <AnchorSection id="notre-role" white eyebrow={content.roleEyebrow} title={content.roleTitle}>
        <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl">
          {roles.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-brand-ink-secondary rounded-lg border border-brand-grid bg-brand-card p-4"
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </AnchorSection>

      {/* CTA final -> Chancenkarte pour ceux sans offre */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-ink-secondary max-w-lg">{content.finalText}</p>
          <Link
            href="/visa-allemagne/chancenkarte"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
