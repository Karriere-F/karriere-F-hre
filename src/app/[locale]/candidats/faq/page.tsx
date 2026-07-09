import { getTranslations } from "next-intl/server";
import { FaqPage } from "@/components/marketing/faq-page";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.candidatsFaq;

export default async function CandidatsFaqPage() {
  const t = await getTranslations("candidatsFaq");
  const content = await getPageContent<Content>("candidatsFaq");

  const items = [1, 2, 3, 4, 5, 6].map((i) => ({
    q: t(`q${i}` as "q1"),
    a: t(`a${i}` as "a1"),
  }));

  return <FaqPage title={content.title} subtitle={content.subtitle} items={items} />;
}
