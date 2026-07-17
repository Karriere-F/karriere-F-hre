import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.partir;

export const generateMetadata = () => metadataFromNamespace("partir", "/partir-en-allemagne");

export default async function PartirPage() {
  const t = await getTranslations("partir");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("partir");

  const eligibiliteHref = `${getPathname({ href: "/candidats", locale })}#eligibilite`;
  const contactHref = getPathname({ href: "/contact", locale });

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/partir-en-allemagne" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href={eligibiliteHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaEval}
          </a>
          <Link
            href="/partir-en-allemagne/cameroun"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaCameroun}
          </Link>
        </div>
      </div>

      {/* Ancrage */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.ancrageEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.ancrageTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.ancrageBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.ancrageBody2}</p>
        </div>
      </section>

      {/* Pays */}
      <AnchorSection
        id="pays"
        eyebrow={content.paysEyebrow}
        title={content.paysTitle}
        lead={content.paysLead}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Cameroun -- the one built country page */}
          <Link
            href="/partir-en-allemagne/cameroun"
            className="lift-on-hover animate-fade-up flex flex-col rounded-xl border border-brand-gold bg-brand-white p-7"
          >
            <span className="inline-block self-start text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
              {content.camerounCardBadge}
            </span>
            <h3 className="font-serif text-xl text-brand-black mb-2">{content.camerounCardTitle}</h3>
            <p className="text-sm text-brand-ink-secondary mb-4">{content.camerounCardBody}</p>
            <span className="mt-auto text-sm font-medium text-brand-gold-text">
              {content.camerounCardCta} →
            </span>
          </Link>

          {/* Other Central African countries -- named, but routed to contact, not to empty pages */}
          <div
            className="animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-card p-7"
            style={{ animationDelay: "60ms" }}
          >
            <h3 className="font-serif text-xl text-brand-black mb-2">{content.autresTitle}</h3>
            <p className="text-sm text-brand-ink-secondary mb-4">{content.autresBody}</p>
            <a href={contactHref} className="mt-auto text-sm font-medium text-brand-gold-text hover:underline">
              {content.autresCta} →
            </a>
          </div>
        </div>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black max-w-xl">
            {content.finalTitle}
          </h2>
          <p className="text-brand-ink-secondary max-w-lg">{content.finalText}</p>
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
