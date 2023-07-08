import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import dotenv from 'dotenv';

import {
  INPUT_VARIABLE_SUBJECT,
  INPUT_VARIABLE_YEAR,
  PROMPT_GENERATE_TOPIC_UNITS_LESSONS,
  TEMPLATE_INQUISITIVE_TEACHER_AU_LESSON_STRUCTURE,
} from './prompt.constants.js';

dotenv.config();

const template = `${TEMPLATE_INQUISITIVE_TEACHER_AU_LESSON_STRUCTURE} ${PROMPT_GENERATE_TOPIC_UNITS_LESSONS}`;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: [INPUT_VARIABLE_SUBJECT, INPUT_VARIABLE_YEAR],
});

const model = new OpenAI({
  temperature: 0, // from 0 to 1, 1 being most creative
  verbose: true, // optional but useful for debugging
  maxTokens: 1024,
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

const res = await chain.call({
  subject: 'Maths',
  year: 'Year 1',
});

console.log(res);
