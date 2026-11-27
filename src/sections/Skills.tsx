import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading id="skills-title" title="Technical skills" description="The tools I use to build and ship backend and AI systems." />
        <AnimatedSection className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c) => <SkillCard key={c.id} category={c} />)}
        </AnimatedSection>
      </div>
    </section>
  );
}
