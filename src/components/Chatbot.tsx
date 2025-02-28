"use client";

import { useState, useEffect, useCallback } from "react";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

interface QAPair {
  question: string;
  answer: string;
}

interface ChatbotProps {
  dataset: QAPair[];
  title?: string;
  theme?: "dark" | "light"; // Allow only "dark" or "light" theme
}

const Chatbot = ({
  dataset,
  title = "AI Chatbot",
  theme = "dark",
}: ChatbotProps) => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load the Universal Sentence Encoder model when the chatbot opens
  useEffect(() => {
    if (isOpen && !model) {
      use.load().then(setModel);
    }
  }, [isOpen, model]);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (!model || !message.trim()) return;

      setIsLoading(true);
      setReply("");

      try {
        // Offload TensorFlow.js operations to avoid blocking the UI
        const inputEmbedding = await model.embed([message]);
        const questionEmbeddings = await model.embed(
          dataset.map((q) => q.question)
        );

        // Calculate similarities
        const similarities = tf.matMul(
          tf.tensor2d(inputEmbedding.arraySync(), inputEmbedding.shape),
          tf.tensor(questionEmbeddings.arraySync(), questionEmbeddings.shape),
          false,
          true
        );

        // Find the most similar question and set the reply
        const bestMatchIndex = similarities.argMax(1).dataSync()[0];
        setReply(dataset[bestMatchIndex].answer);
      } catch (error) {
        console.error(error);
        setReply("Sorry, something went wrong. Please try again.");
      } finally {
        setMessage("");
        setIsLoading(false);
      }
    },
    [model, message, dataset]
  );

  // Handle Enter key press
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isOpen) {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, handleSubmit]);

  // Clear messages when the chatbot is closed
  const handleClose = () => {
    setIsOpen(false);
    setMessage("");
    setReply("");
  };

  // Define themes
  const themes = {
    dark: {
      backgroundColor: "#1A1A1A", // Dark gray
      buttonColor: "#4CAF50", // Green
      textColor: "#FFFFFF", // White
      inputBackgroundColor: "#121212", // Slightly darker gray
      borderColor: "#4CAF50", // Green
      closeIconColor: "text-gray-400 hover:text-white", // Gray with white hover
    },
    light: {
      backgroundColor: "#FFFFFF", // White
      buttonColor: "#2196F3", // Blue
      textColor: "#000000", // Black
      inputBackgroundColor: "#F5F5F5", // Light gray
      borderColor: "#2196F3", // Blue
      closeIconColor: "text-gray-600 hover:text-gray-900", // Dark gray with black hover
    },
  };

  // Get the selected theme
  const selectedTheme = themes[theme];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {isOpen ? (
        <div
          className="p-6 rounded-lg shadow-2xl w-96 max-w-[90vw] border"
          style={{
            backgroundColor: selectedTheme.backgroundColor,
            color: selectedTheme.textColor,
            borderColor: selectedTheme.borderColor,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center space-x-2">
              <FaRobot />
              <span>{title}</span>
            </h3>
            <button
              onClick={handleClose}
              className={selectedTheme.closeIconColor} // Dynamic close icon color
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
              className="w-full p-3 rounded-lg border focus:ring focus:ring-blue-500"
              style={{
                backgroundColor: selectedTheme.inputBackgroundColor,
                color: selectedTheme.textColor,
                borderColor: selectedTheme.borderColor,
              }}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-3 rounded-lg hover:bg-opacity-80 disabled:bg-gray-500 flex items-center justify-center"
              style={{ backgroundColor: selectedTheme.buttonColor }}
            >
              <FaPaperPlane size={18} />
            </button>
          </form>
          {!reply && !isLoading ? null : (
            <div
              className="p-4 rounded-lg border min-h-[50px]"
              style={{
                backgroundColor: selectedTheme.inputBackgroundColor,
                borderColor: selectedTheme.borderColor,
              }}
            >
              {isLoading ? (
                <p className="animate-pulse">⏳ Typing...</p>
              ) : (
                <p>{reply}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-lg flex items-center space-x-2"
          style={{
            backgroundColor: selectedTheme.backgroundColor,
            color: selectedTheme.textColor,
          }}
        >
          <FaRobot size={20} />
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
