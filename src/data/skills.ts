import type { IconName } from "../lib/icons";

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconName;
  skills: readonly string[];
}

export const skillCategories: readonly SkillCategory[] = [
  { id: "backend", title: "Backend Development", icon: "server",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "SQLAlchemy", "Pydantic"] },
  { id: "ai", title: "AI & Machine Learning Integration", icon: "brain",
    skills: ["LLM Integration", "AI Agents", "RAG", "Prompt Engineering", "Embeddings", "Vector Databases", "OpenAI API", "Groq API"] },
  { id: "database", title: "Database", icon: "database",
    skills: ["PostgreSQL", "Redis", "pgvector", "SQL", "Database Design"] },
  { id: "devops", title: "DevOps & Tools", icon: "wrench",
    skills: ["Docker", "Git", "GitHub", "Linux", "GitHub Actions"] },
  { id: "frontend", title: "Frontend", icon: "frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { id: "testing", title: "Testing & Security", icon: "shield",
    skills: ["Pytest", "API Testing", "JWT Authentication", "RBAC", "Docker Sandboxing", "Application Security"] },
];
