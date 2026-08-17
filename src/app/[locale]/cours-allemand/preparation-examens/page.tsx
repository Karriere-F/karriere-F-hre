import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.formationsExamens;

export const generateMetadata = () =>
  metadataFromNamespace("formationsExamens", "/cours-allemand/preparation-examens");

export default async function PreparationExamensPage() {
  const tNav = await getTranslations("nav");
  const tCours = await getTranslations("coursAllemand");
  const content = await getPageContent<Content>("formationsExamens");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("coursAllemand"), pathname: "/cours-allemand" },
        { name: content.title, pathname: "/cours-allemand/preparation-examens" },
      ]}
      title={content.title}
      subtitle={content.subtitle}
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
      ]}
      cta={{ label: tCours("ctaInscription"), href: "/candidate/signup" }}
    />
  );
}
