'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  // In a real application, you would:
  // 1. Send an email notification (e.g., using Nodemailer, Resend)
  // 2. Save the lead to a CRM or database
  console.log('New contact submission:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thanks for reaching out! We'll be in touch soon.",
  };
}
