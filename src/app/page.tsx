"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";
import Resume from "@/components/Resume";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Chatbot } from "smart-ai-chatbot";
export default function Home() {
  // chatboat data set
  const qaPairs = [
    {
      question: "What is your name?",
      answer: "My name is Md Saiyad Husain",
    },
    {
      question: "What are your skills?",
      answer:
        "I specialize in Next.js, TailwindCSS, TypeScript, React, and Node.js. I also have experience with REST APIs, GraphQL, and database technologies like MongoDB and PostgreSQL.",
    },
    {
      question: "What is your experience?",
      answer:
        "I have 3+ years of experience as a frontend developer, working on building responsive and scalable web applications. I've collaborated with cross-functional teams to deliver high-quality products.",
    },
    {
      question: "What is your education?",
      answer:
        "I hold a Bachelor's degree in Computer Science from a reputable university. During my studies, I focused on software development, algorithms, and web technologies.",
    },
    {
      question: "What tools and technologies do you use?",
      answer:
        "I use a variety of tools and technologies, including VS Code, Git, Docker, Figma, and Postman. I'm also familiar with CI/CD pipelines and cloud platforms like AWS and Vercel.",
    },
    {
      question: "Do you have experience with backend development?",
      answer:
        "Yes, I have experience with backend development using Node.js and Express. I've built RESTful APIs, handled authentication, and integrated databases like MongoDB and PostgreSQL.",
    },
    {
      question: "What kind of projects have you worked on?",
      answer:
        "I've worked on a variety of projects, including e-commerce platforms, SaaS applications, and personal portfolio websites. I've also contributed to open-source projects and built custom solutions for clients.",
    },
    {
      question: "Are you familiar with testing?",
      answer:
        "Yes, I have experience with testing frameworks like Jest and Cypress. I write unit tests, integration tests, and end-to-end tests to ensure the reliability of my applications.",
    },
    {
      question: "What is your approach to problem-solving?",
      answer:
        "I follow a structured approach to problem-solving, which includes understanding the problem, breaking it down into smaller parts, researching solutions, and implementing them iteratively.",
    },
    {
      question: "Do you work with UI/UX design?",
      answer:
        "Yes, I collaborate closely with designers to implement user-friendly interfaces. I have experience with Figma and follow best practices for accessibility and responsive design.",
    },
    {
      question: "What are your strengths as a developer?",
      answer:
        "My strengths include strong problem-solving skills, attention to detail, and the ability to learn quickly. I'm also a team player and enjoy collaborating with others to achieve common goals.",
    },
    {
      question: "What are your career goals?",
      answer:
        "My career goals include becoming a full-stack developer, contributing to impactful projects, and continuously improving my skills in emerging technologies.",
    },
    {
      question: "Can you describe a challenging project you worked on?",
      answer:
        "One challenging project involved building a real-time chat application with WebSocket integration. I had to optimize performance and ensure seamless communication between users.",
    },
    {
      question: "Do you have experience with version control?",
      answer:
        "Yes, I use Git for version control and have experience with platforms like GitHub and GitLab. I follow best practices for branching, merging, and code reviews.",
    },
    {
      question: "What is your experience with responsive design?",
      answer:
        "I have extensive experience building responsive designs using CSS frameworks like TailwindCSS and Bootstrap. I ensure that applications work seamlessly across all devices.",
    },
    {
      question: "Do you have experience with Agile methodologies?",
      answer:
        "Yes, I've worked in Agile environments, participating in daily stand-ups, sprint planning, and retrospectives. I'm familiar with tools like Jira and Trello.",
    },
    {
      question: "What programming languages do you know?",
      answer:
        "I am proficient in JavaScript, TypeScript, and Python. I also have basic knowledge of Java and C++.",
    },
    {
      question: "Do you have experience with databases?",
      answer:
        "Yes, I have experience with both SQL and NoSQL databases, including PostgreSQL, MySQL, MongoDB, and Firebase.",
    },
    {
      question: "What is your experience with APIs?",
      answer:
        "I have built and consumed RESTful APIs and GraphQL APIs. I'm familiar with authentication methods like JWT and OAuth.",
    },
    {
      question: "Do you contribute to open source?",
      answer:
        "Yes, I contribute to open-source projects on GitHub. I believe in giving back to the community and learning from others' code.",
    },
    {
      question: "What is your experience with deployment?",
      answer:
        "I have experience deploying applications using platforms like Vercel, Netlify, and AWS. I also set up CI/CD pipelines for automated deployments.",
    },
    {
      question: "What are your hobbies outside of coding?",
      answer:
        "Outside of coding, I enjoy reading tech blogs, playing video games, and exploring new technologies. I also like to stay active by hiking and cycling.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <ThemeToggle />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Chatbot dataset={qaPairs} title="My Chatbot" theme="dark" />
    </div>
  );
}
