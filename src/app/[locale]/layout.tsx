import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import "../globals.css";

// Premium pairing: an elegant high-contrast display serif for headings,
// a modern geometric sans for everything else.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten script, used only for the brand sign-off in the footer.
// Self-hosted so it works offline and does not depend on Google Fonts at build.
const dancing = localFont({
  variable: "--font-signature",
  display: "swap",
  src: [
    { path: "../fonts/DancingScript-600.ttf", weight: "600", style: "normal" },
    { path: "../fonts/DancingScript-700.ttf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Agence de placement international, Douala, Cameroun",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${manrope.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-white text-brand-ink">
        <OrganizationJsonLd />
        <NextIntlClientProvider>
          <SiteHeader />
          <main className="flex-1 flex flex-col">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
