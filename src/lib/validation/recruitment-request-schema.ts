import { z } from "zod";

// B2B recruitment request (dedicated conversion page). Captures the employer's need —
// never candidate data. Consent is required. Short enough for a first contact; details
// are clarified in the follow-up exchange.
export const recruitmentRequestSchema = z.object({
  entreprise: z.string().min(2).max(200),
  secteur: z.string().max(120).optional().or(z.literal("")),
  siteWeb: z.string().max(300).optional().or(z.literal("")),

  prenomNom: z.string().min(2).max(200),
  fonction: z.string().min(2).max(200),
  email: z.string().email(),
  telephone: z.string().max(40).optional().or(z.literal("")),

  besoin: z.string().min(2).max(120),
  metier: z.string().min(2).max(200),
  nombre: z.string().max(60).optional().or(z.literal("")),
  delai: z.string().max(120).optional().or(z.literal("")),

  niveauAllemand: z.string().max(120).optional().or(z.literal("")),
  qualification: z.string().max(1500).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),

  consent: z.literal(true),
});

export type RecruitmentRequestInput = z.infer<typeof recruitmentRequestSchema>;
