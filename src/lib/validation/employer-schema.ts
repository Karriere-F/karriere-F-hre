import { z } from "zod";

export const employerSignupSchema = z.object({
  fullName: z.string().min(2).max(200),
  companyName: z.string().min(2).max(200),
  email: z.string().email(),
  password: z.string().min(8),
});
export type EmployerSignupInput = z.infer<typeof employerSignupSchema>;
