interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-serif text-4xl text-primary md:text-5xl">{title}</h1>
        <div className="gold-rule mt-6" />
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}