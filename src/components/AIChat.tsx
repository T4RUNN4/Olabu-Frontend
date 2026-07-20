"use client";

import { Bot, SendHorizontal, X } from "lucide-react";
import { useForm } from "react-hook-form";

type FormValues = {
  message: string;
};

export default function AIChat() {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = ({ message }: FormValues) => {
    console.log(message);
    reset();
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

          <div className="flex-1 overflow-y-auto p-5 space-y-2 text-sm">
            <div className="chat chat-start">
              <div className="chat-bubble bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white">
                👋 Hello! I'm your AI shopping assistant.
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-bubble">
                Ask me things like:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Which wallboard should I buy?</li>
                  <li>Compare Messi vs Ronaldo</li>
                  <li>Which design is best for a gift?</li>
                  <li>Tell me about the Neymar wallboard.</li>
                </ul>
              </div>
            </div>
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
