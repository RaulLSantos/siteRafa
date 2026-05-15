import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () =>
    pageMeta({
      title: "Áreas de atuação | Dra. Rafaella Borges",
      description:
        "Atuação em Direito do Trabalho, Direito Previdenciário e Direito Civil em Cascavel/PR, com orientação técnica e atendimento individualizado.",
      path: "/areas-de-atuacao",
    }),
  component: AreasPage,
});

const AREAS = [
  {
    t: "Direito do Trabalho",
    d: "Atuação em demandas trabalhistas, consultoria preventiva, defesa de empresas e orientação em relações de trabalho.",
  },
  {
    t: "Direito Previdenciário",
    d: "Atuação em questões envolvendo aposentadorias, benefícios previdenciários, revisões e orientações relacionadas ao INSS.",
  },
  {
    t: "Direito Civil",
    d: "Atuação em demandas envolvendo contratos, responsabilidade civil, cobranças, Direito do Consumidor e relações jurídicas entre particulares.",
  },
];

function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Atuação"
        title="Áreas de atuação"
        intro="Atendimento jurídico nas principais demandas trabalhistas, previdenciárias e cíveis."
      />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {AREAS.map((a, i) => (
            <article
              key={a.t}
              className="group flex flex-col border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/65 hover:shadow-md md:p-7"
            >
              <p className="font-serif text-xs uppercase tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-serif text-2xl text-primary">{a.t}</h2>
              <div className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{a.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
