import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.formationsExamens;

export const generateMetadata = () =>
  metadataFromNamespace("formationsExamens", "/candidats/formations/examens");

export default async function FormationsExamensPage() {
  const tNav = await getTranslations("nav");
  const content = await getPageContent<Content>("formationsExamens");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("candidats"), pathname: "/candidats" },
        { name: content.title, pathname: "/candidats/formations/examens" },
      ]}
      title={content.title}
      subtitle={content.subtitle}
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
      ]}
    />
  );
}
