import dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

import { VOCAB_WORD_LIST } from '../quisi-1/prompt.constants.js';
import { writeToFileWithTimestamp } from '../utils/utils.js';

dotenv.config();

const yearGroup = '4'; // Replace this with the year group
const age = '9-10'; // Replace this with the corresponding age range

const template = `
Given the word {word}, please provide the following information that is appropriate for primary school age students in year {yearGroup} (ages {age}):

- English Definitions: Provide three simple definitions of the word in English.
    - Definition 1: 
    - Definition 2: 
    - Definition 3: 

- Spanish Definitions: Provide three simple definitions of the word in Spanish and translate them for me.
    - Spanish Definition 1: 
    - English Translation 1:
    - Spanish Definition 2: 
    - English Translation 2:
    - Spanish Definition 3: 
    - English Translation 3:

- Lexical Category: Identify the lexical category (noun, verb, etc.) of the word.

- Example Sentence: Provide a sentence that helps communicate the word's definition and how to use it properly.

- Image Description: Suggest a description of an image that could represent the word and its definition.
`;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ['word', 'yearGroup', 'age'],
});

const model = new OpenAI({
  modelName: 'gpt-3.5-turbo',
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
      yearGroup,
      age,
    });
    console.log(res);
    writeToFileWithTimestamp(
      res.text,
      `${VOCAB_WORD_LIST[i]}-Year_${yearGroup}-Age_${age}`
    );
  }
}

processWords();
