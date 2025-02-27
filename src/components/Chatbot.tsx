"use client";

import { useState, useEffect } from "react";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-2xl w-96 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <FaRobot />
              <span>AI Career Chatbot</span>
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="mb-4 flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-500 flex items-center justify-center"
            >
              <FaPaperPlane size={18} />
            </button>
          </form>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 min-h-[50px]">
            {isLoading ? (
              <p className="text-gray-400 animate-pulse">⏳ Typing...</p>
            ) : (
              reply && <p>{reply}</p>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <FaRobot size={20} />
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
