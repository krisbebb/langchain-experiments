import dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

import {
  INPUT_VARIABLE_SUBJECT,
  INPUT_VARIABLE_YEAR,
  TEMPLATE_INQUISITIVE_TEACHER_AU,
  PROMPT_GENERATE_TOPIC_UNITS_LESSONS,
} from './prompt.constants.js';
import { writeToFileWithTimestamp } from '../utils/utils.js';

dotenv.config();

const template = `${TEMPLATE_INQUISITIVE_TEACHER_AU} ${PROMPT_GENERATE_TOPIC_UNITS_LESSONS}`;

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

writeToFileWithTimestamp(res.text, 'get-topics-units-lessons');

console.log(res);
