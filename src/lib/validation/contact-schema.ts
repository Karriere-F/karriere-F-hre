import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email(),
  message: z.string().min(5).max(5000),
  // Honeypot: hidden field; real users leave it blank, bots fill it and get dropped.
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
