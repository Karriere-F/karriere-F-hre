import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.candidatsEligibilite;

export const generateMetadata = () =>
  metadataFromNamespace("candidatsEligibilite", "/candidats/eligibilite");

export default async function CandidatsEligibilitePage() {
  const content = await getPageContent<Content>("candidatsEligibilite");

  return (
    <SimplePage
      title={content.title}
      subtitle={content.subtitle}
      sections={[
        { title: content.section1Title, body: content.section1Body },
        { title: content.section2Title, body: content.section2Body },
        { title: content.section3Title, body: content.section3Body },
        { title: content.section4Title, body: content.section4Body },
      ]}
      cta={{ label: content.cta, href: "/book-appointment" }}
    />
  );
}
