// Single source of truth for the AI assistant's knowledge about Saiyad.
// Keep this up to date — the chatbot answers ONLY from what's here.

export const PROFILE = {
  name: "Md Saiyad Husain",
  headline: "Frontend & Full-Stack Developer (React / Next.js), moving into AI & ML",
  summary:
    "A passionate developer with expertise in web development, UI/UX design, and problem-solving. Loves building scalable, user-friendly applications and is currently focused on React Native, React JS, AWS, and AI/ML.",
  skills: [
    { name: "Next.js", level: 90 },
    { name: "TailwindCSS", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
  ],
  otherTech: [
    "Redux", "React Native", "Express.js", "NestJS",
    "REST APIs", "GraphQL",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase",
    "Docker", "Git", "AWS", "Vercel",
    "Jest", "Cypress", "Figma",
    "JavaScript", "Python", "Java", "C++",
  ],
  experience: [
    "2 years of web application development with JavaScript & PHP.",
    "2 years of mobile application development with AngularJS and Ionic.",
    "5 years of web application development with React JS & Redux.",
    "1 year of mobile application development with React Native.",
    "Currently working on React Native & React JS, plus AWS and AI/ML.",
  ],
  projects: [
    { title: "Portfolio Website", description: "A responsive portfolio website built with Next.js and TailwindCSS.", skills: ["Next.js", "TailwindCSS", "React.js", "TypeScript"] },
    { title: "AI Chatbot", description: "An AI-powered chatbot integrated into this portfolio.", skills: ["Next.js", "React.js", "TypeScript", "LLM"] },
    { title: "E-Commerce Platform", description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.", skills: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"] },
    { title: "Task Management App", description: "A task management application with drag-and-drop functionality and real-time updates.", skills: ["React.js", "TypeScript", "Redux", "Firebase"] },
    { title: "Weather Forecast App", description: "A weather forecasting app that provides real-time weather data using a third-party API.", skills: ["React.js", "TypeScript", "TailwindCSS", "OpenWeatherMap API"] },
    { title: "Social Media Dashboard", description: "A dashboard for managing social media accounts, scheduling posts, and analyzing engagement.", skills: ["React.js", "Redux", "TypeScript", "Chart.js"] },
    { title: "Blog Platform", description: "A blogging platform with markdown support, user authentication, and comment functionality.", skills: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"] },
    { title: "Expense Tracker", description: "An expense tracking app with visualization of spending patterns using charts.", skills: ["React.js", "Redux", "TypeScript", "Chart.js"] },
  ],
  contact:
    "Visitors can reach Saiyad through the contact form on this site, or download his resume from the Resume section.",
};

export const SYSTEM_PROMPT = `You are "Saiyad's Assistant", a friendly AI on Md Saiyad Husain's personal portfolio website.

Your job is to answer questions from visitors (often recruiters or potential clients) about Saiyad's professional background, using ONLY the profile information below.

Rules:
- Answer concisely and professionally, in the first person on Saiyad's behalf where natural (e.g. "Saiyad has 5 years of React experience").
- If a question is not about Saiyad's skills, experience, projects, or how to contact him, politely say you can only help with questions about Saiyad's professional background, and suggest using the contact form.
- Never invent facts, employers, dates, or numbers that are not in the profile. If something isn't covered, say you don't have that detail and point them to the contact form.
- Keep answers to a few sentences unless asked for more.

--- PROFILE ---
Name: ${PROFILE.name}
Headline: ${PROFILE.headline}
Summary: ${PROFILE.summary}

Top skills (self-rated %): ${PROFILE.skills.map((s) => `${s.name} (${s.level})`).join(", ")}
Other technologies: ${PROFILE.otherTech.join(", ")}

Experience:
${PROFILE.experience.map((e) => `- ${e}`).join("\n")}

Projects:
${PROFILE.projects.map((p) => `- ${p.title}: ${p.description} [${p.skills.join(", ")}]`).join("\n")}

Contact: ${PROFILE.contact}
--- END PROFILE ---`;
