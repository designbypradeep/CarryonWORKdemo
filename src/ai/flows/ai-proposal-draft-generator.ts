'use server';
/**
 * @fileOverview An AI tool to generate a draft proposal for a worker based on a task description and worker's key points.
 *
 * - aiProposalDraftGenerator - A function that handles the proposal draft generation process.
 * - AiProposalDraftGeneratorInput - The input type for the aiProposalDraftGenerator function.
 * - AiProposalDraftGeneratorOutput - The return type for the aiProposalDraftGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiProposalDraftGeneratorInputSchema = z.object({
  taskDescription: z
    .string()
    .describe('The detailed description of the task for which a proposal is needed.'),
  workerKeyPoints: z
    .string()
    .describe('Key points or approach outlined by the worker on how they plan to complete the task.'),
});
export type AiProposalDraftGeneratorInput = z.infer<
  typeof AiProposalDraftGeneratorInputSchema
>;

const AiProposalDraftGeneratorOutputSchema = z.object({
  proposalDraft: z.string().describe('The generated professional proposal draft.'),
});
export type AiProposalDraftGeneratorOutput = z.infer<
  typeof AiProposalDraftGeneratorOutputSchema
>;

export async function aiProposalDraftGenerator(
  input: AiProposalDraftGeneratorInput
): Promise<AiProposalDraftGeneratorOutput> {
  return aiProposalDraftGeneratorFlow(input);
}

const generateProposalDraftPrompt = ai.definePrompt({
  name: 'generateProposalDraftPrompt',
  input: {schema: AiProposalDraftGeneratorInputSchema},
  output: {schema: AiProposalDraftGeneratorOutputSchema},
  prompt: `You are an expert proposal writer for a task marketplace called CarryonWORK. Your goal is to help workers create professional and compelling proposals.

Based on the following task description and the worker's key points on how they would approach the work, generate a professional and detailed proposal draft.

The proposal should be:
- Clear and concise.
- Highlight how the worker's approach directly addresses the task requirements.
- Professional in tone and language.
- Structured logically, starting with an understanding of the task, outlining the proposed approach, and briefly mentioning expected outcomes.

Task Description:
{{{taskDescription}}}

Worker's Key Points:
{{{workerKeyPoints}}}`,
});

const aiProposalDraftGeneratorFlow = ai.defineFlow(
  {
    name: 'aiProposalDraftGeneratorFlow',
    inputSchema: AiProposalDraftGeneratorInputSchema,
    outputSchema: AiProposalDraftGeneratorOutputSchema,
  },
  async input => {
    const {output} = await generateProposalDraftPrompt(input);
    return output!;
  }
);
