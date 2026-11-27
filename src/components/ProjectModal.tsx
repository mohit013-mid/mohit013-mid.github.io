import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { ui } from "../lib/icons";
import { Chip } from "./Chip";
import { ProjectLinks } from "./ProjectLinks";

interface Props { project: Project | null; onClose: () => void }

/** Accessible detail view built on the native <dialog> (focus trap, Esc to close). */
export function ProjectModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
    document.documentElement.style.overflow = project ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="project-dialog-title"
      className="m-auto max-h-[88vh] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-md border border-line bg-surface p-0 text-fg backdrop:bg-black/70"
    >
      {project && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 id="project-dialog-title" className="text-2xl font-semibold tracking-tight">{project.title}</h3>
            <button type="button" className="icon-btn -mr-2 -mt-2 shrink-0" onClick={onClose} aria-label="Close project details">
              <ui.X size={20} aria-hidden="true" />
            </button>
          </div>
          <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

          <h4 className="mt-8 font-medium">Problem solved</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>

          <h4 className="mt-8 font-medium">Key features</h4>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <ui.Check size={16} className="mt-0.5 shrink-0 text-accent-text" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-medium">Tech stack</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((t) => <li key={t}><Chip>{t}</Chip></li>)}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
            <ProjectLinks project={project} size="md" />
          </div>
        </div>
      )}
    </dialog>
  );
}
