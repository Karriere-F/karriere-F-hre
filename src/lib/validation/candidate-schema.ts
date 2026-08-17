import { z } from "zod";

export const candidateSignupSchema = z.object({
  fullName: z.string().min(2).max(200),
  email: z.string().email(),
  password: z.string().min(8),
  needsTraining: z.enum(["true", "false"]),
});

export type CandidateSignupInput = z.infer<typeof candidateSignupSchema>;

export const candidateProfileSchema = z.object({
  bio: z.string().max(2000).optional(),
  yearsExperience: z.coerce.number().int().min(0).max(60).optional(),
  germanLevel: z.enum(["none", "a1", "a2", "b1", "b2", "c1", "c2"]),
});

export type CandidateProfileInput = z.infer<typeof candidateProfileSchema>;
