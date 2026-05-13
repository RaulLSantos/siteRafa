import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Artigos e conteúdos informativos | Dra. [Nome da Advogada]" },
      { name: "description", content: "Conteúdos com finalidade informativa sobre temas jurídicos relevantes." },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
  component: ArtigosPage,
});

const ARTIGOS = [
  { t: "Como funciona o divórcio consensual?", d: "Aspectos gerais do procedimento, requisitos e diferenças em relação ao divórcio litigioso.", a: "Direito de Família" },
  { t: "O que é guarda compartilhada?", d: "Compreensão geral sobre o instituto e seus reflexos na convivência familiar.", a: "Direito de Família" },
  { t: "Quais documentos podem ser importantes em uma ação de família?", d: "Notas informativas sobre documentos comumente analisados em demandas familiares.", a: "Direito de Família" },
  { t: "Diferença entre união estável e casamento", d: "Aspectos distintivos entre os dois institutos sob a perspectiva jurídica.", a: "Direito de Família" },
  { t: "O que é planejamento previdenciário?", d: "Visão geral sobre a análise técnica voltada à proteção previdenciária.", a: "Direito Previdenciário" },
  { t: "A importância da análise documental em questões jurídicas", d: "Por que documentos costumam ser elementos centrais na compreensão do caso.", a: "Geral" },
];

function ArtigosPage() {
  return (
    <>
      <PageHeader eyebrow="Conteúdo" title="Artigos e conteúdos informativos" intro="Conteúdos com finalidade informativa sobre temas jurídicos relevantes." />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTIGOS.map((a) => (
            <article key={a.t} className="flex flex-col border border-border bg-card p-7 transition-colors hover:border-accent/60">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent">{a.a}</p>
              <h2 className="mt-4 font-serif text-xl leading-snug text-primary">{a.t}</h2>
              <div className="gold-rule mt-4" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Conteúdo informativo</p>
            </article>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Este conteúdo possui finalidade exclusivamente informativa e não substitui a análise individualizada de um profissional habilitado.
          </p>
        </div>
      </section>
    </>
  );
}