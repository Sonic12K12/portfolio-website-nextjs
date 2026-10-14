"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { id } from "zod/locales";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function ChatWidget() {
  // Toggle state for the chat window visibility
  const [isOpen, setIsOpen] = useState(false);

  // Custom local state to reliably control the text input field
  const [input, setInput] = useState("");

  // Initialize the Vercel AI SDK chat hook using the latest API
  // We extract messages, sendMessage for manual submission, and status for loading checks
  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",

    // Define the initial message array to be rendered on first load
    messages: [
      {
        id: "welcome-messsage",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hi! I'm Konstantin's digital proxy.👾\nAsk me anything about Konstantin's projects, his skills, or how many tries he usually needs to center a div. ",
          },
        ],
      },
    ],
  });

  // Determine if the AI is currently processing or streaming a response
  const isLoading = status === "submitted" || status === "streaming";

  // Reference to auto-scroll to the bottom of the message list
  const messagesEndRef = useRef(null);

  // Trigger smooth scroll when the messages array updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Trigger auto-open only on desktop screens after a 3.5 second delay
  useEffect(() => {
    // Check if the current window width is 768px or greater (Tailwind's 'md' breakpoint)
    // This prevents the chat from automatically blocking the screen on mobile devices
    if (window.innerWidth >= 768) {
      // Set a timer to open the chat widget
      const autoOpenTimer = setTimeout(() => {
        setIsOpen(true); // Replace 'setIsOpen' with your actual state updater function
      }, 6000);

      // Cleanup function to clear the timeout if the component unmounts
      // This prevents memory leaks if the user navigates away before the timer fires
      return () => clearTimeout(autoOpenTimer);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end whitespace-pre-wrap">
      {/* Conditionally render the chat window */}
      {isOpen && (
        <div className="w-auto sm:w-96 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-xl shadow-2xl mb-4 overflow-hidden flex flex-col h-125 sm:h-[60vh] sm:max-h-225 sm:min-h-150">
          {/* Header section */}
          <div className="bg-primary text-white p-4 font-semibold flex justify-between items-center">
            <span>Konst.log()</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-zinc-200 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Scrollable chat history container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-900/60 text-[13px]">
            {/* Render all user and assistant messages */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none"
                  }`}
                >
                  {m.parts?.map((part, index) =>
                    part.type === "text" ? (
                      <div key={index} className="leading-normal">
                        <ReactMarkdown
                          components={{
                            // Reduce bottom margin to keep paragraphs tight
                            p: ({ node, ...props }) => (
                              <p
                                {...props}
                                className="text-inherit mb-1.5 last:mb-0"
                              />
                            ),

                            // Render all markdown links via Next.js Link to prevent full page reloads
                            // and keep the chat widget open during navigation
                            a: ({ node, href, children, ...props }) => (
                              <Link
                                href={href || "/"}
                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
                                {...props}
                              >
                                {children}
                              </Link>
                            ),

                            // Style unordered lists: compact spacing and list-outside for clean alignment
                            ul: ({ node, ...props }) => (
                              <ul
                                {...props}
                                className="list-disc list-outside pl-4 my-1.5 space-y-1"
                              />
                            ),

                            // Style ordered lists (in case the AI enumerates projects with numbers)
                            ol: ({ node, ...props }) => (
                              <ol
                                {...props}
                                className="list-decimal list-outside pl-4 my-1.5 space-y-1"
                              />
                            ),

                            // Remove margins from paragraphs inside list items and keep nested lists tight
                            li: ({ node, ...props }) => (
                              <li
                                {...props}
                                className="[&>p]:m-0 [&>p]:inline [&_ul]:my-0.5 [&_ul]:pl-3"
                              />
                            ),

                            // Style inline code blocks for technical terms
                            code: ({ node, inline, ...props }) => (
                              <code
                                {...props}
                                className="bg-zinc-900 text-indigo-300 px-1.5 py-0.5 rounded text-[11px] font-mono border border-zinc-700/50"
                              />
                            ),
                          }}
                        >
                          {part.text}
                        </ReactMarkdown>
                      </div>
                    ) : null,
                  )}
                </div>
              </div>
            ))}

            {/* Show a loading state while waiting for the stream */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-zinc-400 border border-zinc-700 rounded-lg rounded-bl-none p-3 text-xs animate-pulse">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form wrapper handling the submission logic */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!input.trim() || isLoading) return;
              sendMessage({ text: input });
              setInput("");
            }}
            // Removed flex classes here because the layout is now handled by the relative wrapper below
            className="p-3 bg-zinc-900/50 border-t border-zinc-800"
          >
            {/* Relative container to anchor the absolute positioned submit button */}
            <div className="relative">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  // Submit on Enter without Shift
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault(); // Prevent default newline
                    if (input.trim() && !isLoading) {
                      sendMessage({ text: input });
                      setInput("");
                    }
                  }
                  // Shift + Enter naturally inserts a newline
                }}
                placeholder="Type your question..."
                rows={3}
                // Added pr-12 to ensure text wraps before running underneath the absolute button
                className="w-full bg-zinc-800 text-zinc-100 placeholder-zinc-500 rounded-lg py-2 pl-3 pr-12 outline-none focus:ring-1 focus:ring-indigo-500 border border-zinc-700 resize-none overflow-y-auto"
              />

              <button
                type="submit"
                disabled={isLoading || input.trim() === ""}
                // Absolute positioned inside the relative wrapper, anchored bottom-right
                className="absolute right-2 bottom-2 bg-primary text-white p-1.5 rounded-md hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {/* Minimalist SVG arrow icon matching modern chat interfaces */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating action button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-indigo-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
