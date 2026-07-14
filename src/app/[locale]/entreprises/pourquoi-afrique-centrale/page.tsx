import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprisesPourquoi;

export const generateMetadata = () =>
  metadataFromNamespace("entreprisesPourquoi", "/entreprises/pourquoi-afrique-centrale");

export default async function EntreprisesPourquoiPage() {
  const content = await getPageContent<Content>("entreprisesPourquoi");

  return (
    <SimplePage
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
