import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import dotenv from 'dotenv';

dotenv.config();

const template =
  'What would be a good company name for a company that makes {product}';
const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ['product'],
});

const model = new OpenAI({
  temperature: 0.9, // from 0 to 1, 1 being most creative
  // verbose: true, // optional but useful for debugging
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

const res = await chain.call({ product: 'cars' });

console.log(res);
