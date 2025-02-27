"use client";

import { useState, useEffect } from "react";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [model, setModel] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Lazy load the model only when the chatbot is opened
  useEffect(() => {
    if (isOpen && !model) {
      const loadModel = async () => {
        const loadedModel = await use.load();
        setModel(loadedModel);
      };
      loadModel();
    }
  }, [isOpen]);

  // Predefined questions and answers
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

    setIsLoading(true); // Start loading
    setReply(""); // Clear previous reply

    try {
      // Encode user input and predefined questions
      const inputEmbedding = await model.embed([message]);
      const questionEmbeddings = await model.embed(
        qaPairs.map((pair) => pair.question)
      );

      // Calculate cosine similarity
      const similarities = tf.matMul(
        inputEmbedding,
        questionEmbeddings,
        false,
        true
      );

      const closestIndex = similarities.argMax(1).dataSync()[0];
      setReply(qaPairs[closestIndex].answer);
    } catch (error) {
      console.error(error);
      setReply("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
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
              disabled={isLoading} // Disable button while loading
              className="mt-2 bg-[#3345A4] text-white p-2 rounded w-full hover:bg-[#ff0058] disabled:bg-gray-400"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
          {isLoading ? (
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-white">Typing...</p> {/* Loading indicator */}
            </div>
          ) : (
            reply && (
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-white">{reply}</p>
              </div>
            )
          )}
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
