import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { CourseTrackQuiz } from "@/components/candidate/course-track-quiz";
import { getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.coursAllemand;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("coursAllemand");
  return buildMetadata({
    pathname: "/cours-allemand/quel-parcours",
    locale,
    title: t("quizPageTitle"),
    description: t("quizPageSub"),
  });
}

export default async function QuelParcoursPage() {
  const t = await getTranslations("coursAllemand");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("coursAllemand");

  // Results now link to the dedicated track pages (full navigation), not same-page anchors.
  const quizResults = {
    full: {
      title: content.quizResFullTitle,
      text: content.quizResFullText,
      ctaLabel: content.quizResFullCta,
      ctaHref: getPathname({ href: "/cours-allemand/full-training", locale }),
    },
    fast: {
      title: content.quizResFastTitle,
      text: content.quizResFastText,
      ctaLabel: content.quizResFastCta,
      ctaHref: getPathname({ href: "/cours-allemand/fast-track", locale }),
    },
    advisor: {
      title: content.quizResAdvisorTitle,
      text: content.quizResAdvisorText,
      ctaLabel: content.quizResAdvisorCta,
      ctaHref: getPathname({ href: "/postuler", locale }),
    },
  };

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/cours-allemand" },
          { name: tNav("coursQuiz"), pathname: "/cours-allemand/quel-parcours" },
        ]}
      />

      <PageHero title={content.quizPageTitle} subtitle={content.quizPageSub} />

      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <CourseTrackQuiz
            eyebrow={content.quizEyebrow}
            title={content.quizTitle}
            subtitle={content.quizSubtitle}
            q1={{
              title: content.quizQ1Title,
              options: [
                { value: "none", label: content.quizQ1o1 },
                { value: "a1a2", label: content.quizQ1o2 },
                { value: "b1", label: content.quizQ1o3 },
                { value: "b2plus", label: content.quizQ1o4 },
              ],
            }}
            q2={{
              title: content.quizQ2Title,
              options: [
                { value: "b2recent", label: content.quizQ2o1 },
                { value: "b2old", label: content.quizQ2o2 },
                { value: "lower", label: content.quizQ2o3 },
                { value: "none", label: content.quizQ2o4 },
              ],
            }}
            q3={{
              title: content.quizQ3Title,
              options: [
                { value: "learn", label: content.quizQ3o1 },
                { value: "workfast", label: content.quizQ3o2 },
                { value: "evaluate", label: content.quizQ3o3 },
              ],
            }}
            results={quizResults}
            resetLabel={content.quizReset}
          />
        </div>
      </section>
    </div>
  );
}
