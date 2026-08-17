import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { CourseTrackChooser } from "@/components/candidate/course-track-chooser";
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

  const full = {
    title: content.quizResFullTitle,
    text: content.quizResFullText,
    ctaLabel: content.quizResFullCta,
    ctaHref: getPathname({ href: "/cours-allemand/full-training", locale }),
  };
  const fast = {
    title: content.quizResFastTitle,
    text: content.quizResFastText,
    ctaLabel: content.quizResFastCta,
    ctaHref: getPathname({ href: "/cours-allemand/fast-track", locale }),
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
          <CourseTrackChooser
            eyebrow={content.quizEyebrow}
            title={content.quizTitle}
            subtitle={content.quizSubtitle}
            levelQuestion={content.quizQ1Title}
            levels={[
              { value: "none", label: content.quizQ1o1 },
              { value: "a1a2", label: content.quizQ1o2 },
              { value: "b1", label: content.quizQ1o3 },
              { value: "b2plus", label: content.quizQ1o4 },
            ]}
            matchBadge={content.quizMatchBadge}
            fast={fast}
            full={full}
          />
        </div>
      </section>
    </div>
  );
}
