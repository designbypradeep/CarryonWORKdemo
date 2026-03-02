'use server';
/**
 * @fileOverview An AI tool for Admins to summarize dispute conversations or submitted evidence.
 *
 * - summarizeDispute - A function that handles the dispute summarization process.
 * - AiDisputeSummarizerInput - The input type for the summarizeDispute function.
 * - AiDisputeSummarizerOutput - The return type for the summarizeDispute function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDisputeSummarizerInputSchema = z.object({
  disputeDetails: z
    .string()
    .describe(
      'The full text of the dispute conversation or submitted evidence that needs to be summarized.'
    ),
});
export type AiDisputeSummarizerInput = z.infer<
  typeof AiDisputeSummarizerInputSchema
>;

const AiDisputeSummarizerOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the key points and arguments of the dispute.'),
});
export type AiDisputeSummarizerOutput = z.infer<
  typeof AiDisputeSummarizerOutputSchema
>;

const aiDisputeSummarizerPrompt = ai.definePrompt({
  name: 'aiDisputeSummarizerPrompt',
  input: {schema: AiDisputeSummarizerInputSchema},
  output: {schema: AiDisputeSummarizerOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing dispute conversations or submitted evidence. Your goal is to extract the key points, main arguments from each party, and any relevant facts or evidence presented. Provide a concise, neutral, and informative summary that helps an administrator quickly understand the situation to make an informed resolution. Do not add opinions or suggestions, just summarize the provided text.

Dispute Details:
{{{disputeDetails}}}`,
});

const aiDisputeSummarizerFlow = ai.defineFlow(
  {
    name: 'aiDisputeSummarizerFlow',
    inputSchema: AiDisputeSummarizerInputSchema,
    outputSchema: AiDisputeSummarizerOutputSchema,
  },
  async input => {
    const {output} = await aiDisputeSummarizerPrompt(input);
    return output!;
  }
);

export async function summarizeDispute(
  input: AiDisputeSummarizerInput
): Promise<AiDisputeSummarizerOutput> {
  return aiDisputeSummarizerFlow(input);
}
