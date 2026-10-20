import { z } from "zod";

// B2B partnership enquiry (dedicated partner page). Lightweight first-contact form —
// company, contact person, type of collaboration. No candidate data, no recruitment
// need. Consent is required.
export const partnershipRequestSchema = z.object({
  unternehmen: z.string().min(2).max(200),
  branche: z.string().max(120).optional().or(z.literal("")),
  website: z.string().max(300).optional().or(z.literal("")),

  ansprechpartner: z.string().min(2).max(200),
  position: z.string().max(200).optional().or(z.literal("")),
  email: z.string().email(),
  telefon: z.string().max(40).optional().or(z.literal("")),

  interesse: z.string().min(2).max(200),
  nachricht: z.string().max(2000).optional().or(z.literal("")),

  consent: z.literal(true),
});

export type PartnershipRequestInput = z.infer<typeof partnershipRequestSchema>;
