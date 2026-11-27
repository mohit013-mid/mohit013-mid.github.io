import type { IconName } from "../lib/icons";

export type ProjectCategory = "Backend" | "AI" | "Automation" | "Full Stack";
export const projectCategories: readonly ProjectCategory[] = ["Backend", "AI", "Automation", "Full Stack"];

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  features: readonly string[];
  stack: readonly string[];
  categories: readonly ProjectCategory[];
  /** Replace the YOUR_USERNAME placeholder with the real repository URL. */
  githubUrl: string;
  /** Optional. Add a deployed URL and a "Live demo" button appears automatically. */
  liveUrl?: string;
  /** Custom visual shown on the card: an icon plus a few lines of illustrative code. */
  visual: { icon: IconName; lines: readonly string[] };
}

const repo = (name: string) => `https://github.com/YOUR_USERNAME/${name}`;

export const projects: readonly Project[] = [
  {
    id: "ai-refund-processing",
    title: "AI Refund Processing System",
    summary:
      "An AI-powered refund management system that automates refund processing using risk evaluation, business rules, and human-in-the-loop approval workflows.",
    problem:
      "Refund requests pile up when every case needs manual review. This system scores risk, applies configurable rules, and sends only the cases that need judgment to a human reviewer.",
    features: [
      "Automated refund risk assessment",
      "Configurable approval thresholds",
      "Human-in-the-loop review",
      "Approve, reject, and modify decisions",
      "Background worker processing",
      "Persistent workflow state",
      "Recovery after application restart",
      "JWT authentication",
      "Role-based access control",
      "Customer and reviewer dashboards",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "React", "TypeScript", "Redis", "JWT"],
    categories: ["Backend", "AI", "Full Stack"],
    githubUrl: repo("ai-refund-processing"),
    visual: { icon: "receipt", lines: ["risk_score(refund)", "if score > threshold:", "    queue_for_review()"] },
  },
  {
    id: "ai-pr-reviewer",
    title: "AI Pull Request Reviewer & Unit Test Generator",
    summary:
      "An AI-powered development tool that analyzes source code, identifies potential issues, generates unit tests, and executes tests inside an isolated Docker sandbox.",
    problem:
      "Reviewing code and writing tests by hand is slow, and running generated code is risky. This tool reviews and tests code automatically while keeping execution isolated in a container.",
    features: [
      "Python AST analysis",
      "AI-powered code review",
      "Automatic test generation",
      "Pytest integration",
      "Docker sandbox execution",
      "Secure code execution",
      "Test result reporting",
    ],
    stack: ["Python", "FastAPI", "LLM APIs", "AST", "Pytest", "Docker"],
    categories: ["AI", "Backend", "Automation"],
    githubUrl: repo("ai-pr-reviewer"),
    visual: { icon: "gitPullRequest", lines: ["tree = ast.parse(source)", "tests = llm.generate(tree)", "sandbox.run(tests)"] },
  },
  {
    id: "ai-support-agent-rag",
    title: "AI Support Agent with RAG",
    summary:
      "An intelligent customer support agent that answers questions using uploaded documents and a retrieval-augmented generation pipeline.",
    problem:
      "Support teams answer the same questions from the same documents again and again. This agent retrieves the relevant passages and answers from them, so replies stay grounded in the knowledge base.",
    features: [
      "Document uploads",
      "Text extraction",
      "Chunking",
      "Embedding generation",
      "Vector search",
      "Context-aware AI responses",
      "Knowledge base management",
      "Chat interface",
    ],
    stack: ["Python", "FastAPI", "React", "LLM APIs", "Vector Database", "Embeddings"],
    categories: ["AI", "Full Stack"],
    githubUrl: repo("ai-support-agent-rag"),
    visual: { icon: "fileSearch", lines: ["chunks = split(document)", "hits = vectors.search(q)", "answer = llm(q, hits)"] },
  },
  {
    id: "browser-automation-agent",
    title: "Autonomous Browser Automation Agent",
    summary:
      "An automation agent that interacts with websites through a browser to execute tasks, extract information, and automate workflows.",
    problem:
      "Many repetitive web tasks have no API. This agent drives a real browser to complete them and exposes task management through an API.",
    features: [
      "Browser automation",
      "Playwright integration",
      "Web scraping",
      "Task execution",
      "Automation workflows",
      "API-based task management",
    ],
    stack: ["Python", "FastAPI", "Playwright", "Chromium", "PostgreSQL"],
    categories: ["Automation", "Backend"],
    githubUrl: repo("browser-automation-agent"),
    visual: { icon: "globe", lines: ["page = browser.new_page()", "page.goto(task.url)", "data = page.extract()"] },
  },
  {
    id: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    summary:
      "An intelligent recommendation system that combines user preferences, behavioral data, semantic similarity, and hybrid ranking to generate personalized recommendations.",
    problem:
      "Single-signal recommendations feel generic. This engine blends stated preferences, observed behavior, and semantic similarity into one ranked, personalized list.",
    features: [
      "User preference storage",
      "Interaction tracking",
      "Content-based recommendations",
      "Behavior-based recommendations",
      "Hybrid ranking",
      "Vector similarity",
      "Personalized results",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "OpenAI API", "Vue", "TypeScript"],
    categories: ["AI", "Full Stack"],
    githubUrl: repo("ai-recommendation-engine"),
    visual: { icon: "sparkles", lines: ["content = similar(item)", "behavior = history(user)", "rank = hybrid(a, b)"] },
  },
];
