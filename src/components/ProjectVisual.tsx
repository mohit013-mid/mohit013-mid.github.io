import { iconMap } from "../lib/icons";
import type { Project } from "../data/projects";

export function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  const Icon = iconMap[visual.icon];
  return (
    <div aria-hidden="true" className="dot-pattern relative flex h-40 items-end justify-between overflow-hidden border-b border-line bg-raised p-5">
      <div className="absolute -right-10 -top-10 size-40 rounded-full hero-glow opacity-70" />
      <pre className="relative font-mono text-xs leading-relaxed text-muted">
        {visual.lines.map((line, i) => (
          <span key={i} className="block">
            <span className={i === 0 ? "text-accent-text" : "text-sky"}>{i === 0 ? "› " : "  "}</span>
            {line}
          </span>
        ))}
      </pre>
      <Icon className="relative size-10 shrink-0 text-accent-text" strokeWidth={1.5} />
    </div>
  );
}
