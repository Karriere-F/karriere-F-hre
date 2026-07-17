import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.aProposMethode;

export const generateMetadata = () => metadataFromNamespace("aProposMethode", "/a-propos/methode");

export default async function AProposMethodePage() {
  const tNav = await getTranslations("nav");
  const content = await getPageContent<Content>("aProposMethode");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("aPropos"), pathname: "/a-propos" },
        { name: content.title, pathname: "/a-propos/methode" },
      ]}
      title={content.title}
      subtitle={content.subtitle}
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
        { title: content.section4Title, body: content.section4Body },
      ]}
    />
  );
}
