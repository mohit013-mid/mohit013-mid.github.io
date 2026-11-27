import type { IconName } from "../lib/icons";

export interface NavItem { id: string; label: string }
export interface KeyFact { icon: IconName; label: string; detail: string }
export type TerminalTone = "plain" | "ok" | "info";
export interface TerminalLine { kind: "cmd" | "out"; text: string; tone?: TerminalTone }

/**
 * Everything personal lives here. Replace the placeholder URLs and email.
 * Placeholders contain YOUR_USERNAME / YOUR_PROFILE / example.com.
 */
export const personal = {
  name: "Mohit",
  title: "Python Backend Developer ",
  headline: "Building intelligent backend systems and AI-powered applications.",
  description:
    "I develop scalable backend systems, intelligent AI applications, automation tools, and reliable APIs using Python and modern technologies.",
  availability: "Open to opportunities",

  email: "mohitrawat90347@gmail.com",
  github: "https://github.com/mohit013-mid",
  linkedin: "https://www.linkedin.com/in/mohit-rawat-a7333b311/",

  /** File inside /public. Replace public/resume.pdf with your real resume. */
  resumePath: "resume.pdf",
  resumeDownloadName: "Mohit-Resume.pdf",

  about: [
    "I am a Python Developer with approximately one year of experience building backend applications, REST APIs, AI-powered systems, and database-driven applications.",
    "My primary focus is backend development using Python, FastAPI, Django, PostgreSQL, and SQLAlchemy. I also work with AI integrations, LLM applications, RAG pipelines, AI agents, automation, and Docker-based environments.",
    "I enjoy solving complex problems, designing reliable systems, and building practical applications that combine backend engineering with artificial intelligence.",
  ],

  contact: {
    headline: "Let's build something meaningful.",
    description:
      "I'm open to Python backend developer opportunities, AI engineering projects, and interesting technical collaborations.",
  },
} as const;

export const navItems: readonly NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const keyFacts: readonly KeyFact[] = [
  { icon: "clock", label: "1 Year Experience", detail: "Professional Python development" },
  { icon: "server", label: "Backend Development", detail: "FastAPI, Django, SQLAlchemy" },
  { icon: "brain", label: "AI Application Development", detail: "LLMs, RAG pipelines, agents" },
  { icon: "network", label: "REST API Development", detail: "Typed, tested, documented APIs" },
  { icon: "database", label: "Database Design", detail: "PostgreSQL, pgvector, Redis" },
];

/** Script played by the animated terminal in the hero. */
export const terminalScript: readonly TerminalLine[] = [
  { kind: "cmd", text: "uvicorn app.main:app --reload" },
  { kind: "out", text: "INFO  Application startup complete.", tone: "info" },
  { kind: "cmd", text: "curl -X POST localhost:8000/refunds" },
  { kind: "out", text: '{ "risk": "low", "decision": "auto_approved" }', tone: "ok" },
  { kind: "cmd", text: "pytest -q" },
  { kind: "out", text: "all tests passed", tone: "ok" },
];
