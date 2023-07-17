import dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

import {
  PROMPT_GENERATE_VOCAB_WORD,
  VOCAB_WORD_LIST,
} from './prompt.constants.js';
import { writeToFileWithTimestamp } from '../utils/utils.js';

dotenv.config();

const template = PROMPT_GENERATE_VOCAB_WORD;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ['word'],
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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function processWords() {
  for (let i = 0; i < VOCAB_WORD_LIST.length; i++) {
    await delay(500); // half a second interval between each call
    const res = await chain.call({
      word: VOCAB_WORD_LIST[i],
    });
    console.log(res);
    writeToFileWithTimestamp(res.text, `vocab-${VOCAB_WORD_LIST[i]}`);
  }
}

processWords();
