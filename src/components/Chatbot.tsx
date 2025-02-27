"use client";

import { useState, useEffect } from "react";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load model only when chatbot opens
  useEffect(() => {
    if (isOpen && !model) {
      use.load().then(setModel);
    }
  }, [isOpen, model]);

  const qaPairs = [
    {
      question: "What are your skills?",
      answer:
        "I specialize in Next.js, TailwindCSS, TypeScript, React, and Node.js.",
    },
    {
      question: "What is your experience?",
      answer: "I have 3+ years of experience as a frontend developer.",
    },
    {
      question: "What is your education?",
      answer: "I have a Bachelor's degree in Computer Science.",
    },
    {
      question: "What projects have you worked on?",
      answer:
        "I have built a portfolio website, an AI chatbot, and several responsive web apps.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!model) return;

    setIsLoading(true);
    setReply("");

    try {
      const inputEmbedding = await model.embed([message]);
      const questionEmbeddings = await model.embed(
        qaPairs.map((q) => q.question)
      );
      const similarities = tf.matMul(
        tf.tensor2d(inputEmbedding.arraySync(), inputEmbedding.shape),
        tf.tensor(questionEmbeddings.arraySync(), questionEmbeddings.shape),
        false,
        true
      );
      setReply(qaPairs[similarities.argMax(1).dataSync()[0]].answer);
    } catch (error) {
      console.error(error);
      setReply("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">AI Career Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me about my career..."
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 bg-[#3345A4] text-white p-2 rounded w-full hover:bg-[#ff0058] disabled:bg-gray-400"
            >
              {isLoading ? "Typing..." : "Send"}
            </button>
          </form>
          <div className="bg-gray-700 p-4 rounded">
            {isLoading ? (
              <p className="text-white">⏳ Typing...</p>
            ) : (
              reply && <p className="text-white">{reply}</p>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#3345A4] text-white p-4 rounded-full shadow-lg hover:bg-[#ff0058]"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
