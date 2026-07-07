import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "../../../messages/fr.json";

type HomeContent = typeof frMessages.home;

export default async function HomePage() {
  const t = await getTranslations("home");
  const content = await getPageContent<HomeContent>("home");

  return (
    <div className="flex flex-col">
      <section className="relative bg-brand-black text-brand-white overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/90 to-brand-black/50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start gap-6">
          <h1
            className="animate-fade-up text-4xl sm:text-5xl font-serif max-w-2xl leading-tight"
          >
            {content.heroTitle}
          </h1>
          <p
            className="animate-fade-up max-w-xl text-brand-white/80 text-lg"
            style={{ animationDelay: "80ms" }}
          >
            {content.heroSubtitle}
          </p>
          <div
            className="animate-fade-up flex flex-wrap gap-4 mt-2"
            style={{ animationDelay: "160ms" }}
          >
            <Link
              href="/candidate/signup"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("ctaCandidate")}
            </Link>
            <Link
              href="/employer/signup"
              className="press rounded-full border border-brand-gold px-6 py-3 text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-colors duration-150"
            >
              {t("ctaEmployer")}
            </Link>
            <Link
              href="/book-appointment"
              className="press rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {t("ctaBook")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{content.whyTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="lift-on-hover animate-fade-up rounded-lg bg-brand-white border border-brand-grid p-6"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="text-brand-gold-text font-semibold mb-2">
                  {content[`why${i}Title` as "why1Title"]}
                </h3>
                <p className="text-brand-ink-secondary text-sm leading-relaxed">
                  {content[`why${i}Body` as "why1Body"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-serif text-brand-ink mb-10">{content.tracksTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <Link
              href="/german-courses"
              className="lift-on-hover rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors duration-150 block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {content.fastTrackTitle}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {content.fastTrackBody}
              </p>
            </Link>
            <Link
              href="/german-courses"
              className="lift-on-hover rounded-lg border border-brand-grid p-8 hover:border-brand-gold transition-colors duration-150 block"
            >
              <h3 className="text-xl font-serif text-brand-black mb-3">
                {content.fullTrainingTitle}
              </h3>
              <p className="text-brand-ink-secondary text-sm leading-relaxed">
                {content.fullTrainingBody}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
