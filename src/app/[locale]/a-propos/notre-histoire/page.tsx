import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.aProposHistoire;

export const generateMetadata = () =>
  metadataFromNamespace("aProposHistoire", "/a-propos/notre-histoire");

export default async function AProposHistoirePage() {
  const tNav = await getTranslations("nav");
  const content = await getPageContent<Content>("aProposHistoire");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("aPropos"), pathname: "/a-propos" },
        { name: content.title, pathname: "/a-propos/notre-histoire" },
      ]}
      title={content.title}
      subtitle={content.subtitle}
      image="/images/about-founder.jpg"
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
      ]}
    />
  );
}
