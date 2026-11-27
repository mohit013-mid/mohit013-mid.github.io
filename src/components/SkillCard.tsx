import type { SkillCategory } from "../data/skills";
import { iconMap } from "../lib/icons";
import { Chip } from "./Chip";

export function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon];
  return (
    <section className="panel p-6" aria-labelledby={`skill-${category.id}`}>
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-accent-text" strokeWidth={1.75} aria-hidden="true" />
        <h3 id={`skill-${category.id}`} className="font-medium">{category.title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((s) => <li key={s}><Chip>{s}</Chip></li>)}
      </ul>
    </section>
  );
}
