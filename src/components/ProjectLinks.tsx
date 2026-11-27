import type { Project } from "../data/projects";
import { ui } from "../lib/icons";
import { GithubIcon } from "./BrandIcons";

export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  const sizing = size === "sm" ? "btn-sm" : "";
  return (
    <>
      <a className={`btn btn-ghost ${sizing}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
        <GithubIcon className="size-4" /> GitHub
      </a>
      {project.liveUrl && (
        <a className={`btn btn-ghost ${sizing}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
          <ui.ExternalLink size={16} aria-hidden="true" /> Live demo
        </a>
      )}
    </>
  );
}
