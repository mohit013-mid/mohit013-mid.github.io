import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { learningTopics } from "../data/learning";
import { iconMap } from "../lib/icons";

export function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="learning-title" title="Currently learning" description="Where I'm spending my study time right now." />
        <AnimatedSection>
          <ul className="flex flex-wrap gap-3">
            {learningTopics.map(({ title, icon }) => {
              const Icon = iconMap[icon];
              return (
                <li key={title} className="group flex items-center gap-3 rounded-md border border-dashed border-line px-5 py-4 transition-colors hover:border-accent-text hover:bg-surface">
                  <Icon className="size-5 text-sky transition-colors group-hover:text-accent-text" strokeWidth={1.75} aria-hidden="true" />
                  <span className="font-medium">{title}</span>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
