import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().max(50).optional(),
  appointmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  appointmentTime: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().max(2000).optional(),
  // Honeypot: hidden field; real users leave it blank, bots fill it and get dropped.
  company: z.string().optional(),
});
export type AppointmentInput = z.infer<typeof appointmentSchema>;
