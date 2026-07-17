import { getTranslations } from "next-intl/server";
import { SimplePage } from "@/components/marketing/simple-page";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprisesPartenariat;

export const generateMetadata = () =>
  metadataFromNamespace("entreprisesPartenariat", "/entreprises/partenariat");

export default async function EntreprisesPartenariatPage() {
  const tNav = await getTranslations("nav");
  const content = await getPageContent<Content>("entreprisesPartenariat");

  return (
    <SimplePage
      breadcrumb={[
        { name: tNav("home"), pathname: "/" },
        { name: tNav("entreprises"), pathname: "/entreprises" },
        { name: content.title, pathname: "/entreprises/partenariat" },
      ]}
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
