"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

interface ChatbotProps {
  title?: string;
  theme?: "dark" | "light";
}

type Msg = { role: "user" | "assistant"; content: string };

const themes = {
  // Kept in sync with the design tokens in src/styles/globals.css
  dark: {
    backgroundColor: "#1f2937", // surface
    buttonColor: "#5468d4", // primary (dark)
    textColor: "#ededed", // content
    inputBackgroundColor: "#111827", // canvas
    borderColor: "#374151", // border
    bubbleUser: "#5468d4", // primary (dark)
    closeIconColor: "text-gray-400 hover:text-white",
  },
  light: {
    backgroundColor: "#FFFFFF", // surface
    buttonColor: "#3345a4", // primary
    textColor: "#171717", // content
    inputBackgroundColor: "#f3f4f6", // surface-2
    borderColor: "#e5e7eb", // border
    bubbleUser: "#3345a4", // primary
    closeIconColor: "text-gray-600 hover:text-gray-900",
  },
};

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm Saiyad's AI assistant. Ask me about his skills, experience, or projects.",
};

const Chatbot = ({ title = "AI Assistant", theme = "dark" }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = themes[theme];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, isLoading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const history: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Don't send the local greeting to the model.
        body: JSON.stringify({ messages: history.filter((m) => m !== GREETING) }),
      });

      if (!res.ok || !res.body) {
        const errText =
          res.status === 429
            ? "You're sending messages a bit fast — please wait a moment."
            : "Sorry, something went wrong. Please try again.";
        setMessages([...history, { role: "assistant", content: errText }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: acc }]);
      }
    } catch {
      setMessages([
        ...history,
        { role: "assistant", content: "Sorry, I couldn't reach the server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  // Wipe the conversation on close so the next visitor
  // (e.g. on a shared device) starts fresh.
  const closeChat = () => {
    setIsOpen(false);
    setMessages([GREETING]);
    setInput("");
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div
          className="flex flex-col rounded-lg shadow-2xl w-96 max-w-[90vw] h-[28rem] max-h-[70vh] border overflow-hidden"
          style={{
            backgroundColor: t.backgroundColor,
            color: t.textColor,
            borderColor: t.borderColor,
          }}
        >
          <div
            className="flex justify-between items-center p-4 border-b"
            style={{ borderColor: t.borderColor }}
          >
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <FaRobot />
              <span>{title}</span>
            </h3>
            <button
              onClick={closeChat}
              aria-label="Close and clear chat"
              className={t.closeIconColor}
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 rounded-lg text-sm whitespace-pre-wrap"
                  style={{
                    backgroundColor:
                      m.role === "user" ? t.bubbleUser : t.inputBackgroundColor,
                    color: m.role === "user" ? "#FFFFFF" : t.textColor,
                  }}
                >
                  {m.content ||
                    (isLoading && i === messages.length - 1 ? "…" : "")}
                </div>
              </div>
            ))}
            {isLoading &&
              messages[messages.length - 1]?.content === "" && (
                <p className="text-xs opacity-60 animate-pulse">Typing…</p>
              )}
          </div>

          <div
            className="p-3 border-t flex space-x-2"
            style={{ borderColor: t.borderColor }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask me anything…"
              className="w-full p-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              style={{
                backgroundColor: t.inputBackgroundColor,
                color: t.textColor,
                borderColor: t.borderColor,
              }}
            />
            <button
              onClick={send}
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-lg disabled:opacity-50 flex items-center justify-center"
              style={{ backgroundColor: t.buttonColor, color: "#FFFFFF" }}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-lg flex items-center space-x-2"
          style={{ backgroundColor: t.backgroundColor, color: t.textColor }}
        >
          <FaRobot size={20} />
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
