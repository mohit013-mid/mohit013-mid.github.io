import { useState } from "react";
import { m } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { SectionHeading } from "../components/SectionHeading";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/projects";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Filter = "All" | ProjectCategory;
const filters: readonly Filter[] = ["All", ...projectCategories];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduced = usePrefersReducedMotion();

  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="projects-title" title="Featured projects" description="Backend systems, AI applications, and automation tools I've built." />

        <AnimatedSection>
          <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`cursor-pointer rounded-md border px-4 py-2 text-sm transition-colors ${
                  filter === f ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:border-accent-text hover:text-fg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">{`Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"}`}</p>
        </AnimatedSection>

        <m.div
          key={filter}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {visible.map((p) => <ProjectCard key={p.id} project={p} onOpenDetails={setSelected} />)}
        </m.div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
