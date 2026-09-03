import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { AusbildungEvaluator } from "@/components/ausbildung/ausbildung-evaluator";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("ausbildungEval");
  return buildMetadata({
    pathname: "/ausbildung-allemagne/evaluation",
    locale,
    title: t("intro.title"),
    description: t("intro.text"),
  });
}

export default function AusbildungEvaluationPage() {
  return (
    <div className="bg-brand-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <AusbildungEvaluator />
      </div>
    </div>
  );
}
