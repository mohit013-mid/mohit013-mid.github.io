import {
  ArrowDown, Bot, Brain, Briefcase, Check, Clock, Cloud, Container, Database,
  ExternalLink, FileSearch, FileText, GitPullRequest, Globe, Layers, Mail, Menu,
  Moon, Network, PanelsTopLeft, Receipt, Rocket, Send, Server, ShieldCheck,
  Sparkles, Sun, Workflow, Wrench, X, Gauge,
} from "lucide-react";

/** Icons that content files can reference by name (keeps data files free of JSX). */
export const iconMap = {
  server: Server,
  brain: Brain,
  database: Database,
  wrench: Wrench,
  frontend: PanelsTopLeft,
  shield: ShieldCheck,
  briefcase: Briefcase,
  layers: Layers,
  bot: Bot,
  workflow: Workflow,
  fileSearch: FileSearch,
  container: Container,
  cloud: Cloud,
  gauge: Gauge,
  network: Network,
  clock: Clock,
  receipt: Receipt,
  gitPullRequest: GitPullRequest,
  globe: Globe,
  sparkles: Sparkles,
  rocket: Rocket,
} as const;

export type IconName = keyof typeof iconMap;

/** UI icons used directly by components. */
export const ui = { ArrowDown, Check, ExternalLink, FileText, Mail, Menu, Moon, Send, Sun, X };
