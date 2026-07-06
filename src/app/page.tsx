"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";
import Resume from "@/components/Resume";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
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
      <Chatbot title="Saiyad's Assistant" theme="dark" />
    </div>
  );
}
