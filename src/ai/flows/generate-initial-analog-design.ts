'use server';
/**
 * @fileOverview Generates an initial analog design configuration based on a user prompt.
 *
 * - generateInitialAnalogDesign - A function that takes a prompt and returns an initial design configuration.
 * - GenerateInitialAnalogDesignInput - The input type for the generateInitialAnalogDesign function.
 * - GenerateInitialAnalogDesignOutput - The return type for the generateInitialAnalogDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialAnalogDesignInputSchema = z.object({
  prompt: z
    .string()
    .describe('A high-level prompt describing the desired analog circuit.'),
});
export type GenerateInitialAnalogDesignInput = z.infer<
  typeof GenerateInitialAnalogDesignInputSchema
>;

const GenerateInitialAnalogDesignOutputSchema = z.object({
  designConfiguration: z
    .string()
    .describe(
      'The initial design configuration for the analog circuit, provided as a string.'
    ),
});
export type GenerateInitialAnalogDesignOutput = z.infer<
  typeof GenerateInitialAnalogDesignOutputSchema
>;

export async function generateInitialAnalogDesign(
  input: GenerateInitialAnalogDesignInput
): Promise<GenerateInitialAnalogDesignOutput> {
  return generateInitialAnalogDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialAnalogDesignPrompt',
  input: {schema: GenerateInitialAnalogDesignInputSchema},
  output: {schema: GenerateInitialAnalogDesignOutputSchema},
  prompt: `You are an expert analog circuit designer. Based on the user's prompt, generate an initial design configuration for the analog circuit.

User Prompt: {{{prompt}}}

Initial Design Configuration:`,
});

const generateInitialAnalogDesignFlow = ai.defineFlow(
  {
    name: 'generateInitialAnalogDesignFlow',
    inputSchema: GenerateInitialAnalogDesignInputSchema,
    outputSchema: GenerateInitialAnalogDesignOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
