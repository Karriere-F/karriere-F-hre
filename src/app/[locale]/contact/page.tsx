import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "../../../../messages/fr.json";

type ContactContent = typeof frMessages.contact;

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const content = await getPageContent<ContactContent>("contact");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="text-brand-gold font-semibold text-sm mb-2">{t("whatsapp")}</h2>
          <ul className="text-sm text-brand-ink-secondary space-y-1 mb-8">
            {WHATSAPP_NUMBERS.map((n) => (
              <li key={n.e164}>
                <a
                  href={whatsappLink(n.e164)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-good transition-colors"
                >
                  +{n.e164.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-brand-gold font-semibold text-sm mb-2">{content.office}</h2>
          <p className="text-sm text-brand-ink-secondary">{content.officeLocation}</p>
        </div>
      </div>
    </div>
  );
}
