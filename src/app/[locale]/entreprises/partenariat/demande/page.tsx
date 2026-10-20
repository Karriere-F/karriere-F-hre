import { getLocale, getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PartnershipRequestForm } from "@/components/entreprises/partnership-request-form";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_PARTENARIAT as E } from "@/lib/entreprises-partenariat-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/partenariat/demande",
    locale,
    title: tr(E.formTitle, locale),
    description: tr(E.formIntro, locale),
  });
}

export default async function PartenariatDemandePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const f = E.form;
  const formLabels = {
    sec1: L(f.sec1),
    sec2: L(f.sec2),
    sec3: L(f.sec3),
    unternehmen: L(f.unternehmen),
    branche: L(f.branche),
    website: L(f.website),
    ansprechpartner: L(f.ansprechpartner),
    position: L(f.position),
    email: L(f.email),
    telefon: L(f.telefon),
    interesse: L(f.interesse),
    interesseOptions: f.interesseOptions.map((o) => L(o)),
    nachricht: L(f.nachricht),
    consent: L(f.consent),
    consentNote: L(f.consentNote),
    submit: L(f.submit),
    submitting: L(f.submitting),
    required: L(f.required),
    error: L(f.error),
    errorConsent: L(f.errorConsent),
    successTitle: L(f.successTitle),
    successText: L(f.successText),
  };

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          { name: L(E.heroTitle), pathname: "/entreprises/partenariat" },
          { name: L(E.formTitle), pathname: "/entreprises/partenariat/demande" },
        ]}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.formKicker)}</p>
            <h1 className="animate-fade-up mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight">{L(E.formTitle)}</h1>
            <p className="animate-fade-up mx-auto mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{L(E.formIntro)}</p>
          </div>
          <div className="animate-fade-up mt-10">
            <PartnershipRequestForm labels={formLabels} />
          </div>
        </div>
      </section>
    </div>
  );
}
