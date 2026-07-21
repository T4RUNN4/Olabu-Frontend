"use client";

import { Bot, SendHorizontal, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect, useRef } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type FormValues = {
  message: string;
};

const SUGGESTION_MARKER = "|||SUGGESTIONS|||";

function parseAIResponse(text: string) {
  const index = text.indexOf(SUGGESTION_MARKER);

  if (index === -1) {
    return {
      answer: text,
      suggestions: [],
    };
  }

  const answer = text.slice(0, index).trim();

  const suggestionText = text.slice(index + SUGGESTION_MARKER.length).trim();

  return {
    answer,
    suggestions: suggestionText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
  };
}

export default function AIChat() {
  const getVisitorId = () => {
    let id = localStorage.getItem("olabu-chat-id");

    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("olabu-chat-id", id);
    }

    return id;
  };

  const chatEndRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("olabu-chat-history");

    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "👋 Hello! I'm your OLABU shopping assistant.",
        },
      ]);
    }
  }, []);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const limited = messages.slice(-30);

    localStorage.setItem("olabu-chat-history", JSON.stringify(limited));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async ({ message }: FormValues) => {
    if (!message.trim()) return;

    setSuggestions([]);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    reset();
    setIsTyping(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            history: messages,
            visitorId: getVisitorId(),
          }),
        },
      );

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      let assistantMessage = "";
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        if (firstChunk) {
          setIsTyping(false);
          firstChunk = false;

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "",
            },
          ]);
        }

        const chunk = decoder.decode(value);

        for (const char of chunk) {
          assistantMessage += char;

          const { answer, suggestions } = parseAIResponse(assistantMessage);

          setMessages((prev) => {
            const updated = [...prev];

            updated[updated.length - 1] = {
              role: "assistant",
              content: answer,
            };

            return updated;
          });

          if (suggestions.length > 0) {
            setSuggestions(suggestions);
          }

          await new Promise((resolve) => setTimeout(resolve, 25));
        }

        const { answer, suggestions } = parseAIResponse(assistantMessage);

        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            role: "assistant",
            content: answer,
          };

          return updated;
        });

        if (suggestions.length > 0) {
          setSuggestions(suggestions);
        }
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't process that.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="drawer drawer-end">
      <input id="ai-chat-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label
          htmlFor="ai-chat-drawer"
          className="btn bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white border-0 drawer-button btn-circle fixed bottom-6 right-6 z-50 shadow-xl hover:scale-110 transition-transform duration-200"
        >
          <Bot size={22} />
        </label>
      </div>

      <div className="drawer-side z-50">
        <label htmlFor="ai-chat-drawer" className="drawer-overlay" />

        <div className="flex h-full w-105 flex-col bg-base-100 shadow-2xl">
          <div className="border-b border-gray-300 px-5 pt-10 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white p-2 rounded-full">
                <Bot size={30} />
              </div>

              <div>
                <h2 className="font-bold text-2xl">OLABU Assistant</h2>

                <p className="text-xs text-gray-400">
                  Ask me anything about our wallboards.
                </p>
              </div>
            </div>

            <label
              htmlFor="ai-chat-drawer"
              className="btn btn-sm btn-circle btn-ghost"
            >
              <X size={18} />
            </label>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat ${
                  message.role === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  className={`chat-bubble text-justify ${
                    message.role === "assistant"
                      ? "bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white"
                      : "chat-bubble-neutral"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && messages[messages.length - 1]?.content !== "" && (
              <div className="chat chat-start">
                <div className="chat-bubble bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white">
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="flex flex-col mt-3 px-8">
            {suggestions.map((prompt) => (
              <button
                key={prompt}
                className="btn btn-ghost text-xs"
                onClick={() =>
                  onSubmit({
                    message: prompt,
                  })
                }
              >
                {prompt}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-t border-gray-300 p-4"
          >
            <div className="join w-full">
              <input
                {...register("message")}
                className="input focus:border focus:border-gray-500 input-bordered join-item w-full"
                placeholder="Type your message..."
              />

              <button
                className="btn btn-primary join-item bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white"
                type="submit"
              >
                <SendHorizontal size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
