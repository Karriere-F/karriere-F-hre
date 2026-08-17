"use client";

import { usePathname } from "../../../i18n/navigation";

export type Audience = "candidate" | "employer";

// next-intl's usePathname un-localizes to the canonical route key (verified: on
// /de/unternehmen it returns "/entreprises"), so this works across all locales without
// touching the localized slugs. Everything that isn't the employer tree is candidate --
// candidates are the dominant audience and the sensible default on the homepage.
export function useAudience(): Audience {
  const pathname = usePathname();
  const isEmployer =
    pathname === "/entreprises" ||
    pathname.startsWith("/entreprises/") ||
    pathname.startsWith("/employer");
  return isEmployer ? "employer" : "candidate";
}
