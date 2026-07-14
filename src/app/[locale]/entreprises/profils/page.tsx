import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprisesProfils;

export const generateMetadata = () =>
  metadataFromNamespace("entreprisesProfils", "/entreprises/profils");

export default async function EntreprisesProfilsPage() {
  const content = await getPageContent<Content>("entreprisesProfils");

  return (
    <SimplePage
      title={content.title}
      subtitle={content.subtitle}
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
      ]}
      cta={{ label: content.cta, href: "/employer/signup" }}
    />
  );
}
