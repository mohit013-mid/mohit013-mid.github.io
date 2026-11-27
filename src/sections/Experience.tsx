import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";
import { ui } from "../lib/icons";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="experience-title" title="Experience" />
        <ol className="relative ml-2 border-l border-line">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company ?? ""}`} className="relative pb-2 pl-8 sm:pl-10">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-accent ring-4 ring-bg" />
              <AnimatedSection>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {job.role}
                  {job.company && <span className="text-muted"> at {job.company}</span>}
                </h3>
                {job.period && <p className="mt-1 font-mono text-sm text-accent-text">{job.period}</p>}
                <p className="mt-4 max-w-2xl text-muted">{job.summary}</p>
                <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <ui.Check size={16} className="mt-0.5 shrink-0 text-accent-text" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
