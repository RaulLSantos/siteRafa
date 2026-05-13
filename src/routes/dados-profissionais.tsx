import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/dados-profissionais")({
  head: () => ({
    meta: [
      { title: "Dados profissionais | Dra. [Nome da Advogada]" },
      { name: "description", content: "Dados profissionais institucionais da Dra. [Nome da Advogada] — OAB/[UF] nº XXXXX." },
    ],
    links: [{ rel: "canonical", href: "/dados-profissionais" }],
  }),
  component: DadosPage,
});

const DADOS = [
  { l: "Nome", v: "Dra. [Nome da Advogada]" },
  { l: "Inscrição", v: "OAB/[UF] nº XXXXX" },
  { l: "Cidade / UF", v: "[Cidade] — [Estado]" },
  { l: "E-mail profissional", v: "[email profissional]" },
  { l: "Endereço profissional", v: "[endereço, se houver]" },
];

function DadosPage() {
  return (
    <>
      <PageHeader eyebrow="Institucional" title="Dados profissionais" />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <dl className="divide-y divide-border border-y border-border">
          {DADOS.map((d) => (
            <div key={d.l} className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.l}</dt>
              <dd className="font-serif text-lg text-primary">{d.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">As informações apresentadas têm caráter exclusivamente institucional e informativo.</p>
      </section>
    </>
  );
}