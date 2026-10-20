import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { RecruitmentRequestForm } from "@/components/entreprises/recruitment-request-form";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { DEMANDE_PAGE as D } from "@/lib/entreprises-demande-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/demande-recrutement",
    locale,
    title: tr(D.heroTitle, locale),
    description: tr(D.heroText1, locale),
  });
}

export default async function DemandeRecrutementPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);
  const f = D.form;

  const labels = {
    secEntreprise: L(f.secEntreprise),
    secInterlocuteur: L(f.secInterlocuteur),
    secBesoin: L(f.secBesoin),
    secExigences: L(f.secExigences),
    entreprise: L(f.entreprise),
    secteur: L(f.secteur),
    secteurChoose: L(f.secteurChoose),
    secteurs: f.secteurs.map((s) => L(s)),
    siteWeb: L(f.siteWeb),
    prenomNom: L(f.prenomNom),
    fonction: L(f.fonction),
    email: L(f.email),
    telephone: L(f.telephone),
    besoin: L(f.besoin),
    besoinChoose: L(f.besoinChoose),
    besoinFach: L(f.besoinFach),
    besoinAzubis: L(f.besoinAzubis),
    besoinLesDeux: L(f.besoinLesDeux),
    besoinEtude: L(f.besoinEtude),
    metier: L(f.metier),
    nombre: L(f.nombre),
    delai: L(f.delai),
    delaiChoose: L(f.delaiChoose),
    delaiAsap: L(f.delaiAsap),
    delai36: L(f.delai36),
    delai6plus: L(f.delai6plus),
    delaiDefinir: L(f.delaiDefinir),
    niveauAllemand: L(f.niveauAllemand),
    qualification: L(f.qualification),
    message: L(f.message),
    consent: L(f.consent),
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
          { name: L(D.heroTitle), pathname: "/entreprises/demande-recrutement" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div>
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(D.heroKicker)}
            </p>
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight lg:whitespace-nowrap">
              {L(D.heroTitle)}
            </h1>
            <p className="animate-fade-up mt-5 text-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
              {L(D.heroText1)}
            </p>
            <p className="animate-fade-up mt-3 text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "120ms" }}>
              {L(D.heroText2)}
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Suspense fallback={null}>
            <RecruitmentRequestForm labels={labels} />
          </Suspense>
        </div>
      </section>

      {/* Après l'envoi */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black leading-snug">{L(D.afterTitle)}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {D.afterSteps.map((step, i) => (
              <div key={L(step.title)} className="rounded-2xl bg-brand-white p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]">
                <span className="font-serif text-2xl font-bold text-brand-gold-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-lg text-brand-black leading-snug">{L(step.title)}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(step.body)}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-brand-ink-muted leading-relaxed">{L(D.afterNote)}</p>
        </div>
      </section>
    </div>
  );
}
