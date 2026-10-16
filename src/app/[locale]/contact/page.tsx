import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "../../../../messages/fr.json";

type ContactContent = typeof frMessages.contact;

export const generateMetadata = () => metadataFromNamespace("contact", "/contact");

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const content = await getPageContent<ContactContent>("contact");

  return (
    <div>
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        image="/images/contact-call-center.jpg"
        imageAlt="Une conseillère en centre d'appels, casque audio, prête à répondre à vos questions"
        imagePosition="center 6%"
        imageWidthClass="w-[62%]"
        alignTop
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-16 grid gap-12 sm:grid-cols-2">
        {/* Form pulled up beside the hero photo (desktop), over the faded-left of the image */}
        <div className="relative z-10 lg:-mt-64">
          <ContactForm />
        </div>
        <div>
          <h2 className="text-brand-gold-text font-semibold text-sm mb-2">{t("whatsapp")}</h2>
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
          <h2 className="text-brand-gold-text font-semibold text-sm mb-2">{content.office}</h2>
          <p className="text-sm text-brand-ink-secondary">{content.officeLocation}</p>
        </div>
      </div>
    </div>
  );
}
