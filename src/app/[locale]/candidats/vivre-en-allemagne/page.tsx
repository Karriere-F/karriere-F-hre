import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.candidatsVivre;

export const generateMetadata = () =>
  metadataFromNamespace("candidatsVivre", "/candidats/vivre-en-allemagne");

export default async function CandidatsVivrePage() {
  const tNav = await getTranslations("nav");
  const content = await getPageContent<Content>("candidatsVivre");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("candidats"), pathname: "/candidats" },
        { name: content.title, pathname: "/candidats/vivre-en-allemagne" },
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
