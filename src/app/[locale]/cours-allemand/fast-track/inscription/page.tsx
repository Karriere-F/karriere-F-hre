import { getLocale, getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FastTrackApplicationForm } from "@/components/cours/fast-track-application-form";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { FAST_PAGE as F } from "@/lib/fast-track-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/cours-allemand/fast-track/inscription",
    locale,
    title: tr(F.apply.heroTitle, locale),
    description: tr(F.apply.heroIntro, locale),
  });
}

export default async function FastTrackApplyPage() {
  const tNav = await getTranslations("nav");
  const tCours = await getTranslations("coursAllemand");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);
  const a = F.apply;

  const labels = {
    secIdentity: L(a.secIdentity),
    secB2: L(a.secB2),
    secParcours: L(a.secParcours),
    secProjet: L(a.secProjet),
    secDocs: L(a.secDocs),
    prenom: L(a.prenom),
    nom: L(a.nom),
    email: L(a.email),
    whatsapp: L(a.whatsapp),
    pays: L(a.pays),
    b2Confirm: L(a.b2Confirm),
    b2Organisme: L(a.b2Organisme),
    b2Annee: L(a.b2Annee),
    formation: L(a.formation),
    metier: L(a.metier),
    experience: L(a.experience),
    objectif: L(a.objectif),
    objectifChoose: L(a.objectifChoose),
    objectifEmploi: L(a.objectifEmploi),
    objectifAusbildung: L(a.objectifAusbildung),
    objectifLesDeux: L(a.objectifLesDeux),
    domaine: L(a.domaine),
    emploiRecherche: L(a.emploiRecherche),
    cvLien: L(a.cvLien),
    diplomesLien: L(a.diplomesLien),
    message: L(a.message),
    docsNote: L(a.docsNote),
    required: L(a.required),
    submit: L(a.submit),
    submitting: L(a.submitting),
    errorGeneric: L(a.errorGeneric),
    errorB2: L(a.errorB2),
    errorDocs: L(a.errorDocs),
    successTitle: L(a.successTitle),
    successText: L(a.successText),
  };

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tCours("title"), pathname: "/cours-allemand" },
          { name: "Fast Track", pathname: "/cours-allemand/fast-track" },
          { name: L(a.heroTitle), pathname: "/cours-allemand/fast-track/inscription" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(a.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
            {L(a.heroTitle)}
          </h1>
          <p
            className="animate-fade-up mt-5 text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]"
            style={{ animationDelay: "80ms" }}
          >
            {L(a.heroIntro)}
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <FastTrackApplicationForm labels={labels} />
        </div>
      </section>
    </div>
  );
}
