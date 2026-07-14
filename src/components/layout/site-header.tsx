import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { ComponentProps } from "react";
import { Link } from "../../../i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";

type NavHref = ComponentProps<typeof Link>["href"];

export async function SiteHeader() {
  const t = await getTranslations("nav");

  const links = [
    { href: "/candidats", label: t("candidats") },
    { href: "/entreprises", label: t("entreprises") },
    { href: "/candidats/formations", label: t("formations") },
    { href: "/a-propos", label: t("aPropos") },
    { href: "/blog", label: t("blog") },
  ] satisfies { href: NavHref; label: string }[];

  return (
    <header className="bg-brand-white text-brand-ink sticky top-0 z-40 border-b border-brand-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Karriere Fähre"
              width={1024}
              height={1024}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-ink-secondary hover:text-brand-gold-text transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden lg:inline text-sm text-brand-ink-secondary hover:text-brand-gold-text transition-colors duration-150"
            >
              {t("login")}
            </Link>
            <Link
              href="/postuler"
              className="press hidden md:inline-flex items-center rounded-full bg-brand-gold px-4 py-2 text-sm text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("postuler")}
            </Link>
            <LocaleSwitcher />
            <MobileNav links={links} postulerLabel={t("postuler")} loginLabel={t("login")} />
          </div>
        </div>
      </div>
    </header>
  );
}
