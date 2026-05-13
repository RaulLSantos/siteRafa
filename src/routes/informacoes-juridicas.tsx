import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/informacoes-juridicas")({
  head: () => ({
    meta: [
      { title: "Informações jurídicas | Dra. [Nome da Advogada]" },
      {
        name: "description",
        content:
          "Informações institucionais sobre a forma de atuação profissional, sigilo, análise individualizada e responsabilidade ética.",
      },
    ],
    links: [{ rel: "canonical", href: "/informacoes-juridicas" }],
  }),
  component: InfoPage,
});

const BLOCKS = [
  { t: "Análise individualizada", d: "Cada situação é examinada considerando seus fatos, documentos e particularidades." },
  { t: "Sigilo profissional", d: "As informações compartilhadas no contexto profissional são protegidas por dever ético." },
  { t: "Atuação preventiva", d: "Avaliação de riscos jurídicos antes que se transformem em conflitos ou processos." },
  { t: "Orientação técnica", d: "Esclarecimentos fundamentados na legislação aplicável e na doutrina pertinente." },
  { t: "Clareza na comunicação", d: "Linguagem acessível, sem reduzir o rigor técnico necessário a cada matéria." },
  { t: "Responsabilidade ética", d: "Conduta orientada pelos princípios e deveres da advocacia." },
];

function InfoPage() {
  return (
    <>
      <PageHeader eyebrow="Informações" title="Informações sobre a atuação profissional" />
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="text-lg leading-relaxed text-foreground/85">
          A análise jurídica depende da avaliação específica de cada caso, dos documentos
          disponíveis e das normas aplicáveis à situação apresentada.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A atuação profissional pode envolver orientação jurídica, análise documental,
          elaboração de peças, acompanhamento de processos e atuação preventiva ou
          contenciosa, conforme as particularidades da demanda.
        </p>
      </section>
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
          {BLOCKS.map((b) => (
            <div key={b.t} className="bg-background p-8">
              <p className="font-serif text-lg text-primary">{b.t}</p>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}