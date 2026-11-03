import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "ERP Karriere Fähre", template: "%s | ERP Karriere Fähre" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-brand-ink">{children}</body>
    </html>
  );
}
