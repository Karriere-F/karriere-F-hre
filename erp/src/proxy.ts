import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/proxy";

// Refreshes the Supabase session cookie on every request and bounces signed-out visitors
// to /login. Role checks (admin/staff) happen in requireStaff() and in Postgres RLS.
export default async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });
  const { user } = await updateSession(request, response);

  if (!user && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
