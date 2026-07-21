"use client";

import { Bot, SendHorizontal, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type FormValues = {
  message: string;
};

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hello! I'm your AI shopping assistant.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const { register, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async ({ message }: FormValues) => {
    if (!message) return;

    // Show user's message immediately
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
          body: JSON.stringify({ message }),
        },
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
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
                  className={`chat-bubble ${
                    message.role === "assistant"
                      ? "bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white"
                      : "chat-bubble-neutral"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat chat-start">
                <div className="chat-bubble bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white">
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              </div>
            )}
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
