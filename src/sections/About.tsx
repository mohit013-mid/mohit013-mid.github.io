import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { keyFacts, personal } from "../data/personal";
import { iconMap } from "../lib/icons";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="about-title" title="About" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection className="space-y-5 text-lg leading-relaxed text-muted">
            {personal.about.map((p) => <p key={p}>{p}</p>)}
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="panel divide-y divide-line">
              {keyFacts.map(({ icon, label, detail }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={label} className="flex items-center gap-4 p-5">
                    <Icon className="size-6 shrink-0 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="font-medium">{label}</p>
                      <p className="text-sm text-muted">{detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
