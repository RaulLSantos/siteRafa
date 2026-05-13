import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Áreas de atuação | Dra. [Nome da Advogada]" },
      {
        name: "description",
        content:
          "Áreas de atuação profissional: Direito de Família, Direito Previdenciário e Direito Cível.",
      },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao" }],
  }),
  component: AreasPage,
});

const AREAS = [
  {
    t: "Direito de Família",
    d: "Atuação em temas relacionados a divórcio, guarda, pensão alimentícia, união estável e partilha de bens.",
  },
  {
    t: "Direito Previdenciário",
    d: "Atuação em questões envolvendo aposentadorias, benefícios previdenciários, revisões e orientações relacionadas ao INSS.",
  },
  {
    t: "Direito Cível",
    d: "Atuação em demandas envolvendo contratos, responsabilidade civil, cobranças e relações jurídicas entre particulares.",
  },
];

function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Atuação"
        title="Áreas de atuação"
        intro="Atuação profissional voltada às matérias abaixo, com análise individualizada de cada situação e respeito às particularidades de cada caso."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {AREAS.map((a, i) => (
            <article
              key={a.t}
              className="group flex flex-col border border-border bg-card p-8 transition-colors hover:border-accent/60"
            >
              <p className="font-serif text-xs uppercase tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 font-serif text-2xl text-primary">{a.t}</h2>
              <div className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}