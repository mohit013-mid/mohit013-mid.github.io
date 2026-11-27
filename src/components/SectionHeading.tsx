interface Props {
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 id={id} className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}
