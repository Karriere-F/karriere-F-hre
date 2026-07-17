"use client";

import { Link } from "../../../i18n/navigation";
import { useAudience } from "./use-audience";

// The primary CTA follows the audience: candidates apply, employers submit a staffing
// need. Two literal <Link> branches rather than a computed href, so next-intl's typed
// routing still checks each destination.
export function HeaderCta({
  postulerLabel,
  employerCtaLabel,
  loginLabel,
}: {
  postulerLabel: string;
  employerCtaLabel: string;
  loginLabel: string;
}) {
  const audience = useAudience();
  const ctaClass =
    "press hidden md:inline-flex items-center rounded-full bg-brand-gold px-4 py-2 text-sm text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150";

  return (
    <>
      <Link
        href="/login"
        className="hidden lg:inline text-sm text-brand-ink-secondary hover:text-brand-gold-text transition-colors duration-150"
      >
        {loginLabel}
      </Link>
      {audience === "employer" ? (
        <Link href="/employer/signup" className={ctaClass}>
          {employerCtaLabel}
        </Link>
      ) : (
        <Link href="/postuler" className={ctaClass}>
          {postulerLabel}
        </Link>
      )}
    </>
  );
}
