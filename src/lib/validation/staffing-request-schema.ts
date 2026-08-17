import { z } from "zod";

export const staffingRequestSchema = z.object({
  professionTitle: z.string().min(2).max(200),
  headcountNeeded: z.coerce.number().int().min(1).max(1000),
  description: z.string().max(4000).optional(),
  germanLevelRequired: z.enum(["none", "a1", "a2", "b1", "b2", "c1", "c2"]).optional(),
});
export type StaffingRequestInput = z.infer<typeof staffingRequestSchema>;
