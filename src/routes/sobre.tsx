import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a advogada | Dra. Rafaella Borges" },
      {
        name: "description",
        content:
          "Conheça a trajetória profissional, formação e valores da Dra. Rafaella Borges, advogada inscrita na OAB/[UF].",
      },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Sobre a advogada"
        intro="A Dra. Rafaella Borges é advogada inscrita na OAB/[UF] nº XXXXX, com atuação voltada à orientação jurídica responsável e individualizada."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="text-lg leading-relaxed text-foreground/85">
          Sua atuação é baseada na clareza das informações, na análise cuidadosa de cada
          situação e no respeito ao sigilo profissional, buscando oferecer uma condução
          técnica, ética e humanizada.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {[
            {
              t: "Formação acadêmica",
              d: "Bacharelado em Direito por instituição reconhecida pelo MEC, com aprofundamento em áreas específicas do exercício profissional.",
            },
            {
              t: "Inscrição na OAB",
              d: "Inscrição regular na Ordem dos Advogados do Brasil — OAB/[UF] nº XXXXX, em conformidade com as normas do Conselho Federal.",
            },
            {
              t: "Áreas de atuação",
              d: "Direito de Família, Direito Previdenciário e Direito Cível, com atendimento individualizado em cada matéria.",
            },
            {
              t: "Valores profissionais",
              d: "Ética, clareza, responsabilidade, discrição e compromisso técnico orientam toda a atuação profissional.",
            },
          ].map((b) => (
            <article key={b.t} className="border-t border-border pt-6">
              <p className="font-serif text-xl text-primary">{b.t}</p>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}