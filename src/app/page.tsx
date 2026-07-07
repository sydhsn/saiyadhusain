"use client";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ThemeToggle />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Chatbot title="Saiyad's Assistant" theme="dark" />
    </div>
  );
}
