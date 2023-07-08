import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import dotenv from "dotenv";

dotenv.config();

const model = new OpenAI({
  verbose: true, // optional but useful for debugging
}); // default values for temperature

const memory = new BufferMemory();

const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

const res1 = await chain.call({ input: "Hello, I am Kris" });
console.log(res1);

const res2 = await chain.call({ input: "What is my name?" });
console.log(res2);
