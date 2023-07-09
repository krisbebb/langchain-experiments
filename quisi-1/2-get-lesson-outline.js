import dotenv from 'dotenv';
import { OpenAI } from 'langchain';
import { PromptTemplate, PipelinePromptTemplate } from 'langchain/prompts';

import {
  EXAMPLE_SCIENCE_LESSON_US,
  TEMPLATE_INQUISITIVE_TEACHER_US,
} from './prompt.constants.js';
import { writeToFileWithTimestamp } from '../utils/utils.js';

dotenv.config();

const model = new OpenAI({
  temperature: 0, // from 0 to 1, 1 being most creative
  verbose: true, // optional but useful for debugging
  maxTokens: 1024,
});

const fullPrompt = PromptTemplate.fromTemplate(`{introduction}

{example}

{start}`);

const introductionPrompt = PromptTemplate.fromTemplate(`{person}`);

const examplePrompt =
  PromptTemplate.fromTemplate(`Here's an example of an interaction:
Q: {example_q}
A: {example_a}`);

const startPrompt = PromptTemplate.fromTemplate(`Now, do this for real!
Q: {input}
A:`);

const composedPrompt = new PipelinePromptTemplate({
  pipelinePrompts: [
    {
      name: 'introduction',
      prompt: introductionPrompt,
    },
    {
      name: 'example',
      prompt: examplePrompt,
    },
    {
      name: 'start',
      prompt: startPrompt,
    },
  ],
  finalPrompt: fullPrompt,
});

const formattedPrompt = await composedPrompt.format({
  person: TEMPLATE_INQUISITIVE_TEACHER_US,
  example_q: 'Generate a lesson outline for "Science" and "Year 5"',
  example_a: EXAMPLE_SCIENCE_LESSON_US,
  input: 'Generate a lesson outline for "Maths" and "Year 1"',
});

const res = await model.call(formattedPrompt);

writeToFileWithTimestamp(res, 'get-lesson-outline');

console.log(res);
