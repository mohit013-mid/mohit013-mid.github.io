import { AnimatedSection } from "../components/AnimatedSection";
import { Chip } from "../components/Chip";
import { SectionHeading } from "../components/SectionHeading";
import { education } from "../data/education";

export function Education() {
  if (education.length === 0) return null;
  return (
    <section id="education" aria-labelledby="education-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="education-title" title="Education" />
        <AnimatedSection className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <article key={`${e.degree}-${e.institution}`} className="panel p-6">
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-muted">{e.institution}</p>
              <p className="mt-1 font-mono text-sm text-accent-text">{e.graduationYear}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Relevant coursework">
                {e.coursework.map((c) => <li key={c}><Chip>{c}</Chip></li>)}
              </ul>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
