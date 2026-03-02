'use server';
/**
 * @fileOverview An AI tool to expand a brief task title into a detailed description,
 * including suggested requirements, scope, and necessary skills.
 *
 * - aiTaskDescriptionTool - A function that elaborates on a task title.
 * - AiTaskDescriptionToolInput - The input type for the aiTaskDescriptionTool function.
 * - AiTaskDescriptionToolOutput - The return type for the aiTaskDescriptionTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTaskDescriptionToolInputSchema = z.object({
  taskTitle: z.string().describe('A brief title for the task.'),
});
export type AiTaskDescriptionToolInput = z.infer<
  typeof AiTaskDescriptionToolInputSchema
>;

const AiTaskDescriptionToolOutputSchema = z.object({
  detailedDescription: z
    .string()
    .describe('A detailed and comprehensive description of the task.'),
  requirements: z
    .array(z.string())
    .describe('A list of specific requirements and deliverables for the task.'),
  scope: z
    .string()
    .describe(
      'The defined scope of the task, outlining what is included and excluded.'
    ),
  necessarySkills: z
    .array(z.string())
    .describe('A list of essential skills required to complete the task.'),
});
export type AiTaskDescriptionToolOutput = z.infer<
  typeof AiTaskDescriptionToolOutputSchema
>;

export async function aiTaskDescriptionTool(
  input: AiTaskDescriptionToolInput
): Promise<AiTaskDescriptionToolOutput> {
  return aiTaskDescriptionToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTaskDescriptionPrompt',
  input: {schema: AiTaskDescriptionToolInputSchema},
  output: {schema: AiTaskDescriptionToolOutputSchema},
  prompt: `You are an expert task planner and project manager. Your goal is to take a brief task title and expand it into a comprehensive task posting.

Generate a detailed description, specific requirements, a clear scope, and a list of necessary skills based on the provided task title.

Task Title: {{{taskTitle}}}`,
});

const aiTaskDescriptionToolFlow = ai.defineFlow(
  {
    name: 'aiTaskDescriptionToolFlow',
    inputSchema: AiTaskDescriptionToolInputSchema,
    outputSchema: AiTaskDescriptionToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
