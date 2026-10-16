import { z } from "zod";

// Fast Track application. B2 is a hard admission condition, so `b2Confirm` must be true.
// `objectif` lets a candidate aim at qualified employment, an Ausbildung, or both — so the
// form fits someone who only holds the Abitur/bac and wants to train, not just experienced
// professionals. Documents (CV / diplomas) are uploaded as PDF files, handled in the action.
export const fastTrackApplicationSchema = z.object({
  prenom: z.string().min(2).max(100),
  nom: z.string().min(2).max(100),
  email: z.string().email(),
  whatsapp: z.string().min(5).max(40),
  pays: z.string().min(2).max(100),

  b2Confirm: z.literal(true),
  b2Organisme: z.string().max(100).optional().or(z.literal("")),
  b2Annee: z.string().max(10).optional().or(z.literal("")),

  formation: z.string().max(1000).optional().or(z.literal("")),
  metier: z.string().max(200).optional().or(z.literal("")),
  experience: z.string().max(1000).optional().or(z.literal("")),

  objectif: z.string().min(2).max(100),
  domaine: z.string().min(2).max(200),
  emploiRecherche: z.string().max(300).optional().or(z.literal("")),

  message: z.string().max(2000).optional().or(z.literal("")),
});

export type FastTrackApplicationInput = z.infer<typeof fastTrackApplicationSchema>;
