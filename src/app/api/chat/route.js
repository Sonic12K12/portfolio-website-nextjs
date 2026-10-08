import {
  streamText,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";
import { openai } from "@ai-sdk/openai";

// Export the POST handler for the API route
export async function POST(req) {
  // Parse the incoming request JSON without TypeScript annotations
  const { messages } = await req.json();

  // Start the streaming text request
  const result = streamText({
    model: openai("gpt-4o-mini"),
    // Define the core instructions and context for the AI
    system:
      "You are the digital assistant on the portfolio of a Media Informatics student at HTW Berlin. Your task is to answer questions about his projects (like the Movie Marathon Calculator or the Unity/Godot games) professionally and precisely. Politely decline any questions that are not related to his work, web development, or game design.",
    messages: await convertToModelMessages(messages),
  });

  // Return the streamed response to the client
  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
