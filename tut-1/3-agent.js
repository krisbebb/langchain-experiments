import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import dotenv from 'dotenv';

dotenv.config();

const model = new OpenAI({
  temperature: 0,
});

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, { hl: 'en', gl: 'us' }), // 3rd party api for searching google
  new Calculator(),
];

// The agent you choose depends on the type of task you want to perform. Here's a quick guide to help you pick the right agent for your use case:

// If you're using a text LLM, first try zero-shot-react-description, aka. the MRKL agent for LLMs.
// If you're using a Chat Model, try chat-zero-shot-react-description, aka. the MRKL agent for Chat Models.
// If you're using a Chat Model and want to use memory, try chat-conversational-react-description, the Conversational agent.
// If you have a complex task that requires many steps and you're interested in experimenting with a new type of agent, try the Plan-and-Execute agent.

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: 'zero-shot-react-description',
  verbose: true, // useful for debugging
});

console.log('Loaded the agent!');

const res = await executor.call({
  input:
    "Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?",
});

console.log(res.output);
