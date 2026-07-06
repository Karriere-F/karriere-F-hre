import { requireRole } from "@/lib/auth/require-role";

export default async function CandidateDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole("candidate");

  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 w-full">{children}</div>;
}
