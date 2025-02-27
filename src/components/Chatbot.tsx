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
    {
      question: "Can you describe your experience as a Lead ReactJS Developer?",
      answer:
        "As a Lead ReactJS Developer, I have led cross-functional teams in designing and developing scalable web applications. I specialize in ReactJS, NestJS, and AWS, ensuring high performance and responsiveness. My responsibilities include architecting applications, mentoring junior developers, conducting code reviews, and implementing best practices for front-end development.",
    },
    {
      question: "What are your key technical skills?",
      answer:
        "Frontend: ReactJS, Redux, HTML5, CSS3, SCSS, Bootstrap | Backend: NodeJS, NestJS | Database: MongoDB, AWS Redshift | Cloud & DevOps: AWS Cognito, Beanstalk, S3 | Testing: Jest | Version Control: Git, BitBucket",
    },
    {
      question: "What methodologies do you follow in development?",
      answer:
        "I follow Agile (Scrum) methodologies, using tools like JIRA and Confluence for project tracking. I emphasize test-driven development (TDD) and continuous integration/deployment (CI/CD) for smooth and efficient development cycles.",
    },
    {
      question: "Can you walk me through your experience with AWS?",
      answer:
        "I have worked with AWS services such as Cognito for authentication, Beanstalk for deployment, and S3 for file storage. In my projects, I integrated AWS services to enhance security, scalability, and performance.",
    },
    {
      question: "Can you describe the Natixis Investment Managers project?",
      answer:
        "The Natixis Investment Managers project involved developing a ReactJS UI and NestJS backend with AWS integrations. My role included: Developing a dynamic and responsive UI using ReactJS, Implementing secure authentication with AWS Cognito, Setting up cloud storage using AWS S3, Conducting functional and integration testing using Jest.",
    },
    {
      question: "How do you manage state in React applications?",
      answer:
        "I primarily use Redux for global state management and React Context API for lightweight state management. Depending on the project, I also implement React Query for efficient data fetching.",
    },
    {
      question: "How do you handle API integration in React applications?",
      answer:
        "I use Axios or Fetch API for API calls, managing async operations with React Query or Redux Thunk. I also implement error handling and caching mechanisms to optimize performance.",
    },
    {
      question: "How do you mentor junior developers?",
      answer:
        "I actively mentor junior developers by conducting knowledge-sharing sessions, pair programming, and providing guidance on best practices and design patterns.",
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
              className="bg-[#3345A4] p-3 rounded-lg hover:bg-[#ff0058] disabled:bg-gray-500 flex items-center justify-center"
            >
              <FaPaperPlane size={18} />
            </button>
          </form>
          {!reply && !isLoading ? null : (
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 min-h-[50px]">
              {isLoading ? (
                <p className="text-gray-400 animate-pulse">⏳ Typing...</p>
              ) : (
                <p>{reply}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#3345A4] text-white p-4 rounded-full shadow-lg hover:bg-[#ff0058] flex items-center space-x-2"
        >
          <FaRobot size={20} />
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
