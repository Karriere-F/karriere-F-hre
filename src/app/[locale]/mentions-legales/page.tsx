import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("legal");
  return buildMetadata({
    pathname: "/mentions-legales",
    locale,
    title: t("imprintTitle"),
    description: t("imprintNote"),
  });
}

export default async function MentionsLegalesPage() {
  const t = await getTranslations("legal");

  const rows: [string, string][] = [
    [t("companyNameLabel"), t("companyName")],
    [t("legalFormLabel"), t("legalForm")],
    [t("registrationLabel"), t("registrationValue")],
    [t("registeredAddressLabel"), t("registeredAddressValue")],
    [t("postalAddressLabel"), t("postalAddressValue")],
  ];

  return (
    <div>
      <PageHero title={t("imprintTitle")} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <dl className="grid gap-4 text-sm mb-8">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="text-brand-ink-muted">{label}</dt>
              <dd className="text-brand-black">{value}</dd>
            </div>
          ))}
          <div>
            <dt className="text-brand-ink-muted">{t("contactLabel")}</dt>
            <dd className="text-brand-black">
              {WHATSAPP_NUMBERS.map((n, i) => (
                <span key={n.e164}>
                  {i > 0 && " / "}
                  <a
                    href={whatsappLink(n.e164)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-good transition-colors"
                  >
                    +{n.e164.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
                  </a>
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <p className="text-brand-ink-secondary text-sm">{t("imprintNote")}</p>
      </div>
    </div>
  );
}
