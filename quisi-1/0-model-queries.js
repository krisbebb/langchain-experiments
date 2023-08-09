import { OpenAIApi, Configuration } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const listModels = await openai.listModels();
const retrieveModel = await openai.retrieveModel('gpt-3.5-turbo');

const availableModels = listModels.data.data.map(model => model.id);

console.log(availableModels);

console.log(retrieveModel.data);
