interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-4xl px-5 pb-7 pt-6 sm:px-6 md:pb-9 md:pt-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-serif text-3xl leading-tight text-primary md:text-4xl">{title}</h1>
        <div className="gold-rule mt-3" />
        {intro && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
