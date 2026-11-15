import Anthropic from "@anthropic-ai/sdk";

// Needs ANTHROPIC_API_KEY in your environment (https://console.anthropic.com), or `ant auth login`.
const client = new Anthropic();

const message = await client.messages.create({
  model: "claude-opus-5-5",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Say hello to a developer who is learning to use the Claude API." }],
});

for (const block of message.content) {
  if (block.type === "text") console.log(block.text);
}
console.log("tokens:", message.usage.input_tokens, "in /", message.usage.output_tokens, "out");
