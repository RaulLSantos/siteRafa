import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { pageMeta } from "@/lib/seo";

const ABOUT_TEXT =
  "Formada pelo Centro Universitário Univel em 2016, atua na advocacia trabalhista desde a graduação. Pós-graduada em Direito do Trabalho e Processo do Trabalho e em Direito Civil e Empresarial pela Damásio Educacional. Especialista em soluções de litígios trabalhistas, tanto na advocacia defensiva quanto preventiva, com assessoria e orientação às empresas. Atua também no contencioso cível e Direito do Consumidor, representando empresas e consumidores finais. Busca constante atualização e especializações para atender seus clientes com excelência.";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta({
      title: "Sobre a advogada | Dra. Rafaella Borges",
      description:
        "Conheça a formação e atuação da Dra. Rafaella Borges em Direito do Trabalho, Direito Civil, Empresarial e Consumidor.",
      path: "/sobre",
    }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Sobre a advogada"
        intro="Trajetória profissional dedicada à advocacia trabalhista, cível e empresarial."
      />

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 md:py-12">
        <p className="text-base leading-8 text-foreground/88 md:text-lg">{ABOUT_TEXT}</p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-2 md:py-12">
          {[
            {
              t: "Formação acadêmica",
              d: "Bacharelado em Direito pelo Centro Universitário Univel, com pós-graduação em Direito do Trabalho e Processo do Trabalho e em Direito Civil e Empresarial.",
            },
            {
              t: "Atuação trabalhista",
              d: "Atuação em litígios trabalhistas, advocacia defensiva e preventiva, com assessoria e orientação a empresas.",
            },
            {
              t: "Áreas de atendimento",
              d: "Direito do Trabalho, Direito Previdenciário e Direito Civil, com análise individualizada de cada demanda.",
            },
            {
              t: "Valores profissionais",
              d: "Atualização constante, excelência técnica, clareza na comunicação e compromisso com as necessidades de cada cliente.",
            },
          ].map((b) => (
            <article key={b.t} className="border-t border-border pt-5 transition-colors hover:border-accent/70">
              <p className="font-serif text-xl text-primary">{b.t}</p>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
