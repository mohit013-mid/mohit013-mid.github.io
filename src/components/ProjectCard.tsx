import type { Project } from "../data/projects";
import { Chip } from "./Chip";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectVisual } from "./ProjectVisual";

const VISIBLE_TAGS = 5;

interface Props { project: Project; onOpenDetails: (project: Project) => void }

export function ProjectCard({ project, onOpenDetails }: Props) {
  const extra = project.stack.length - VISIBLE_TAGS;
  return (
    <article className="panel flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-accent-text/60">
      <ProjectVisual visual={project.visual} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 text-sm leading-relaxed">
          <span className="font-medium text-accent-text">Problem solved: </span>
          <span className="text-muted">{project.problem}</span>
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.slice(0, VISIBLE_TAGS).map((t) => (
            <li key={t}><Chip>{t}</Chip></li>
          ))}
          {extra > 0 && <li><Chip>{`+${extra} more`}</Chip></li>}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onOpenDetails(project)}>
            Project details
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
