import { z } from "zod";

// The contact fields collected on the conversion screen, plus the raw answers so the
// server can rebuild the summary. Answers are validated loosely (enums are enforced in
// the UI); the orientation is recomputed server-side from them.
export const evaluationSchema = z.object({
  prenom: z.string().trim().min(1).max(80),
  nom: z.string().trim().min(1).max(80),
  whatsapp: z.string().trim().min(3).max(40),
  email: z.string().trim().email(),
  pays: z.string().trim().min(1).max(80),
  answers: z.record(z.string(), z.string()).default({}),
});

export type EvaluationInput = z.infer<typeof evaluationSchema>;
