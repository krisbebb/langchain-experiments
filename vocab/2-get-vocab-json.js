import dotenv from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';

import { writeToFileWithTimestamp } from '../utils/utils.js';

dotenv.config();

export const VOCAB_WORD_LIST = [
  'Force',
  'Reflect',
  'Matter',
  'Model',
  'Flexibility',
  'Fruit',
];

const YEAR_GROUP = '4'; // Replace this with the year group
const AGE = '9-10'; // Replace this with the corresponding age range

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
{format_instructions}
`;

// With a `StructuredOutputParser` we can define a schema for the output.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  vocab_word: 'the word',
  year_group: 'the year group',
  age: 'the age range',
  def_1_en: 'first definition in English',
  def_2_en: 'second definition in English',
  def_3_en: 'third definition in English',
  def_1_es: 'first definition in Spanish',
  translation_1_es_en: 'first translation from Spanish to English',
  def_2_es: 'second definition in Spanish',
  translation_2_es_en: 'second translation from Spanish to English',
  def_3_es: 'third definition in Spanish',
  translation_3_es_en: 'third translation from Spanish to English',
  lexical_category: 'lexical category of the word, lowercase',
  example_sentence: 'example sentence',
  image_description: 'description of an image that could represent the word',
});

const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template,
  inputVariables: ['word', 'yearGroup', 'age'],
  partialVariables: { format_instructions: formatInstructions },
});

const model = new OpenAI({
  modelName: 'gpt-3.5-turbo',
  temperature: 0, // from 0 to 1, 1 being most creative
  // verbose: true, // optional but useful for debugging
  maxTokens: 1024,
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const vocabResponses = [];

async function processWords() {
  console.log('Processing words...', VOCAB_WORD_LIST);
  for (let i = 0; i < VOCAB_WORD_LIST.length; i++) {
    await delay(500); // half a second interval between each call
    const input = await prompt.format({
      word: VOCAB_WORD_LIST[i],
      yearGroup: YEAR_GROUP,
      age: AGE,
    });

    const response = await model.call(input);
    // console log a status update with the word being processed and the year group and age range
    console.log(
      `Word ${VOCAB_WORD_LIST[i]}, Year Group ${YEAR_GROUP}, Age Range ${AGE}`
    );
    const parsedOutput = await parser.parse(response);
    console.log('Parsing output to json...');
    vocabResponses.push(parsedOutput);
  }
  writeToFileWithTimestamp(
    JSON.stringify(vocabResponses, null, 2),
    'vocab-responses-structured',
    'json'
  );
}

processWords();
