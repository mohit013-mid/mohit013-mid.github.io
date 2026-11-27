export interface Experience {
  role: string;
  /** Optional: shown only when set. */
  company?: string;
  /** Shown under the role, e.g. "Jan 2025 – Present". */
  period?: string;
  summary: string;
  highlights: readonly string[];
}

export const experience: readonly Experience[] = [
  {
    role: "Python Developer",
    // company: "Your company",
    period: "Approximately 1 year of professional experience",
    summary: "Building and maintaining backend applications with Python.",
    highlights: [
      "Backend development",
      "REST API development",
      "Database integration",
      "AI integrations",
      "Authentication and authorization",
      "Application development",
      "Testing and debugging",
    ],
  },
];
