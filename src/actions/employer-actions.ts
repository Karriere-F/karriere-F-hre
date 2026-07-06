"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { staffingRequestSchema } from "@/lib/validation/staffing-request-schema";

export async function createStaffingRequest(input: unknown) {
  const parsed = staffingRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "invalid_input" };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false as const, error: "not_authenticated" };
  }

  const { error } = await supabase.from("staffing_requests").insert({
    employer_id: user.id,
    profession_title: parsed.data.professionTitle,
    headcount_needed: parsed.data.headcountNeeded,
    description: parsed.data.description,
    german_level_required: parsed.data.germanLevelRequired,
  });

  if (error) {
    return { ok: false as const, error: "insert_failed" };
  }

  revalidatePath("/employer/requests");
  return { ok: true as const };
}
