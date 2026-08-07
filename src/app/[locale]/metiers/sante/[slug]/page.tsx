import type { Metadata } from "next";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SANTE_FICHES, SANTE_UI, tr } from "@/lib/sante-metiers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const fiche = SANTE_FICHES[slug];
  if (!fiche) return {};
  return buildMetadata({
    pathname: { pathname: "/metiers/sante/[slug]", params: { slug } },
    locale,
    title: tr(fiche.title, locale),
    description: tr(fiche.intro, locale),
  });
}

export default async function SanteFichePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const fiche = SANTE_FICHES[slug];

  if (!fiche) {
    notFound();
  }

  const title = tr(fiche.title, locale);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SANTE_UI.home, locale), pathname: "/" },
          { name: tr(SANTE_UI.metiers, locale), pathname: "/metiers" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/metiers/sante" },
          { name: title, pathname: { pathname: "/metiers/sante/[slug]", params: { slug } } },
        ]}
      />
      <FaqJsonLd items={fiche.faq.map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))} />

      <PageHero title={title} subtitle={tr(fiche.intro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/metiers/sante"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SANTE_UI.backToSante, locale)}
          </Link>

          {/* Illustration */}
          {fiche.image && (
            <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-2xl sm:aspect-[16/9]">
              <Image
                src={`/images/metiers/sante/${fiche.image}.jpg`}
                alt={title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Optional video */}
          {fiche.video && (
            <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl">
              <iframe
                src={fiche.video}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          )}

          {/* Content sections */}
          <div className="mt-8 space-y-9">
            {fiche.sections.map((s) => (
              <div key={tr(s.heading, locale)} className="animate-fade-up">
                <h2 className="font-serif text-xl sm:text-2xl text-brand-black leading-snug">
                  {tr(s.heading, locale)}
                </h2>
                <p className="mt-2.5 text-brand-ink-secondary leading-relaxed text-pretty">
                  {tr(s.body, locale)}
                </p>
              </div>
            ))}
          </div>

          {/* Primary action */}
          <div className="mt-10">
            <Link
              href="/postuler"
              className="press inline-flex items-center gap-2 rounded-lg bg-brand-gold px-7 py-3.5 font-medium text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
            >
              {tr(SANTE_UI.apply, locale)}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-brand-black">{tr(SANTE_UI.faqTitle, locale)}</h2>
            <dl className="mt-5 divide-y divide-brand-grid border-y border-brand-grid">
              {fiche.faq.map((item) => (
                <div key={tr(item.q, locale)} className="py-4">
                  <dt className="font-medium text-brand-black">{tr(item.q, locale)}</dt>
                  <dd className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">
                    {tr(item.a, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 text-xs text-brand-ink-muted leading-relaxed">
            {tr(fiche.sourceNote, locale)}
          </p>
        </div>
      </section>
    </div>
  );
}
