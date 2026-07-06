import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "../i18n/routing";
import { updateSession } from "./lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

// Path segments (after the locale prefix) that require an authenticated session at all —
// the specific role/validation checks still happen in each route's layout via
// requireRole()/requireValidatedEmployer(), and ultimately in Postgres RLS. This is just
// the first, cheapest line of defense: bounce anonymous visitors before rendering.
const PROTECTED_PREFIXES = [
  "/candidate/dashboard",
  "/candidate/profile",
  "/candidate/cv",
  "/employer/dashboard",
  "/employer/pending",
  "/employer/requests",
  "/employer/candidates",
  "/admin",
];

function stripLocale(pathname: string) {
  const [, maybeLocale, ...rest] = pathname.split("/");
  if ((routing.locales as readonly string[]).includes(maybeLocale)) {
    return "/" + rest.join("/");
  }
  return pathname;
}

export default async function proxy(request: NextRequest) {
  const intlResponse = intlMiddleware(request);

  // Supabase isn't configured yet during initial setup (no project created) — skip the
  // session refresh entirely rather than crashing every single request, public marketing
  // pages included. Once NEXT_PUBLIC_SUPABASE_URL/ANON_KEY are set, this activates normally.
  const supabaseConfigured =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const user = supabaseConfigured
    ? (await updateSession(request, intlResponse)).user
    : null;

  const pathWithoutLocale = stripLocale(request.nextUrl.pathname);
  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathWithoutLocale.startsWith(prefix)
  );

  if (isProtected && !user) {
    // Redirect unprefixed — the follow-up request runs through this proxy again and
    // intlMiddleware adds the correct locale prefix via cookie/Accept-Language detection.
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
