'use server';
/**
 * @fileOverview Summarizes experiment results and suggests optimal design parameters.
 *
 * - summarizeExperimentResults - A function that summarizes experiment results.
 * - SummarizeExperimentResultsInput - The input type for the summarizeExperimentResults function.
 * - SummarizeExperimentResultsOutput - The return type for the summarizeExperimentResults function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperimentResultsInputSchema = z.object({
  experimentData: z.string().describe('The data from the series of experiments.'),
});
export type SummarizeExperimentResultsInput = z.infer<typeof SummarizeExperimentResultsInputSchema>;

const SummarizeExperimentResultsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key findings from the experiments.'),
  optimalParameters: z.string().describe('Suggested optimal design parameters based on the experiment results.'),
});
export type SummarizeExperimentResultsOutput = z.infer<typeof SummarizeExperimentResultsOutputSchema>;

export async function summarizeExperimentResults(input: SummarizeExperimentResultsInput): Promise<SummarizeExperimentResultsOutput> {
  return summarizeExperimentResultsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperimentResultsPrompt',
  input: {schema: SummarizeExperimentResultsInputSchema},
  output: {schema: SummarizeExperimentResultsOutputSchema},
  prompt: `You are an AI expert in analyzing experiment results for analog design optimization.

  Given the following experiment data, summarize the key findings and suggest optimal design parameters.

  Experiment Data:
  {{experimentData}}

  Summary:
  {{summary}}

  Optimal Design Parameters:
  {{optimalParameters}}`,
});

const summarizeExperimentResultsFlow = ai.defineFlow(
  {
    name: 'summarizeExperimentResultsFlow',
    inputSchema: SummarizeExperimentResultsInputSchema,
    outputSchema: SummarizeExperimentResultsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
