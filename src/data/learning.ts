import type { IconName } from "../lib/icons";

export interface LearningTopic { title: string; icon: IconName }

export const learningTopics: readonly LearningTopic[] = [
  { title: "Advanced AI Agents", icon: "bot" },
  { title: "Agentic Workflows", icon: "workflow" },
  { title: "RAG Architecture", icon: "fileSearch" },
  { title: "Docker and Container Security", icon: "container" },
  { title: "Cloud Deployment", icon: "cloud" },
  { title: "System Design", icon: "layers" },
  { title: "Backend Scalability", icon: "gauge" },
];
