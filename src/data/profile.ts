// Single source of truth for the whole site AND the AI assistant.
// Update facts here and every section + the chatbot stays in sync.

export const PROFILE = {
  name: "Md Saiyad Husain",
  firstName: "Saiyad",
  role: "Senior Frontend Tech Lead",
  headline:
    "Senior Frontend Tech Lead — React.js · Next.js · TypeScript · Frontend Architecture · Performance · Scalable UI · NestJS · MongoDB · E-Commerce",
  location: "Mumbai Metropolitan Region, India",
  tagline: "I build products that perform at scale — and lead the teams that make it happen.",
  summary:
    "10+ years of hands-on engineering and leadership experience. I've architected and shipped high-traffic e-commerce platforms and enterprise applications trusted by thousands of users. My work sits at the intersection of elegant UI and robust backend systems — from pixel-perfect React interfaces to resilient NestJS APIs and AWS-deployed microservices. I thrive where ownership, speed, and craft matter: leading teams through complex product launches and diving deep into performance bottlenecks.",
  summaryShort:
    "Senior Frontend Tech Lead with 10+ years building high-traffic e-commerce and enterprise apps — React, Next.js, TypeScript on the front, NestJS & AWS behind it.",

  email: "saiyad.husain@ymail.com",
  phone: "+91 8652431765",
  links: {
    linkedin: "https://www.linkedin.com/in/sydhsn2020",
    github: "https://github.com/sydhsn",
    personal: "https://sydhsn.github.io/saiyadhusain/",
    linktree: "https://linktr.ee/saiyadhusain",
    whatsapp: "https://wa.me/918652431765",
  },

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "Tech Lead", label: "@ EY Technology" },
    { value: "4", label: "Enterprise Employers" },
    { value: "1000s", label: "Users Served" },
  ],

  // Top skills with self-rated proficiency (for the animated bars)
  topSkills: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "Redux", level: 88 },
    { name: "Node.js / NestJS", level: 84 },
    { name: "AWS", level: 80 },
  ],

  // Full stack shown as chips
  techStack: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "Redux",
    "Node.js", "NestJS", "TypeORM", "MongoDB", "REST APIs",
    "Microservices", "AWS", "Tailwind CSS", "Ionic", "AngularJS",
  ],

  experience: [
    {
      company: "EY Technology Solutions",
      role: "Tech Lead",
      period: "Sep 2022 – Present",
      location: "Mumbai",
      current: true,
      note: "Leading frontend architecture and delivery for enterprise applications — mentoring engineers, driving code reviews, and cross-team collaboration on scalable UI systems.",
    },
    {
      company: "Mphasis",
      role: "Senior Software Engineer",
      period: "Nov 2019 – Sep 2022",
      location: "Mumbai Metropolitan Region",
      current: false,
      note: "React.js & JavaScript development for high-traffic web applications, focused on performance and maintainable component architecture.",
    },
    {
      company: "Cognizant",
      role: "Project Associate",
      period: "Mar 2018 – Nov 2019",
      location: "Mumbai, Maharashtra",
      current: false,
      note: "Frontend development across enterprise client projects, building responsive interfaces and reusable UI patterns.",
    },
    {
      company: "Dion Global Solutions Ltd",
      role: "Software Engineer",
      period: "May 2016 – Feb 2018",
      location: "Mumbai, Maharashtra",
      current: false,
      note: "Hybrid mobile application development with the Ionic framework and AngularJS.",
    },
  ],

  education: [
    {
      school: "Padmashree Institute of Information Technology",
      degree: "Bachelor of Computer Application (BCA), Computer Software Engineering",
      period: "2007 – 2010",
    },
    {
      school: "BMP-7 High School, Katihar",
      degree: "10th (Secondary Education)",
      period: "2004 – 2005",
    },
  ],

  certifications: [
    "GitHub Copilot",
    "Angular Security and CLI",
    "Java Certificate",
    "JavaScript",
  ],

  languages: ["English (Native / Bilingual)"],

  projects: [
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "High-traffic e-commerce platform with optimized checkout flows and catalog-at-scale, built for thousands of concurrent users.",
      skills: ["Next.js", "TypeScript", "NestJS", "MongoDB", "AWS"],
    },
    {
      title: "Scalable Enterprise UI System",
      description:
        "Reusable component library and design system powering multiple enterprise applications with consistent, accessible UI.",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "AI Portfolio Assistant",
      description:
        "This site's AI assistant — a streaming LLM chatbot that answers recruiter questions from a structured profile.",
      skills: ["Next.js", "TypeScript", "LLM", "Streaming"],
    },
    {
      title: "Microservices REST API Suite",
      description:
        "Resilient NestJS + TypeORM services deployed on AWS with a focus on reliability, observability, and cost management.",
      skills: ["NestJS", "TypeORM", "AWS", "Microservices"],
    },
  ],
};

export const SYSTEM_PROMPT = `You are "Saiyad's Assistant", a friendly AI on ${PROFILE.name}'s personal portfolio website.

Answer questions from visitors (often recruiters or clients) about Saiyad's professional background, using ONLY the profile below.

Rules:
- Answer concisely and professionally, on Saiyad's behalf (e.g. "Saiyad has 10+ years of experience...").
- If a question is not about Saiyad's skills, experience, projects, education, or how to contact him, politely say you can only help with questions about Saiyad's professional background and suggest the contact form.
- Never invent facts, employers, dates, or numbers not in the profile. If something isn't covered, say so and point to the contact form.
- Keep answers to a few sentences unless asked for more.

--- PROFILE ---
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Location: ${PROFILE.location}
Headline: ${PROFILE.headline}
Summary: ${PROFILE.summary}

Top skills (self-rated %): ${PROFILE.topSkills.map((s) => `${s.name} (${s.level})`).join(", ")}
Tech stack: ${PROFILE.techStack.join(", ")}

Experience:
${PROFILE.experience.map((e) => `- ${e.role}, ${e.company} (${e.period}, ${e.location}): ${e.note}`).join("\n")}

Education:
${PROFILE.education.map((e) => `- ${e.degree}, ${e.school} (${e.period})`).join("\n")}

Certifications: ${PROFILE.certifications.join(", ")}
Languages: ${PROFILE.languages.join(", ")}

Contact: LinkedIn ${PROFILE.links.linkedin}, GitHub ${PROFILE.links.github}, email ${PROFILE.email}. Or use the contact form on this site.
--- END PROFILE ---`;
