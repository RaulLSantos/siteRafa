import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | Dra. [Nome da Advogada]" },
      { name: "description", content: "Aviso legal institucional do site." },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: AvisoPage,
});

function AvisoPage() {
  return (
    <>
      <PageHeader eyebrow="Institucional" title="Aviso legal" />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>As informações disponibilizadas neste site possuem caráter exclusivamente informativo, não constituem promessa de resultado e não substituem a análise jurídica individualizada por profissional habilitado.</p>
        <p>O conteúdo aqui apresentado segue as normas do Código de Ética e Disciplina da Ordem dos Advogados do Brasil e o Provimento aplicável à publicidade na advocacia, observando-se a sobriedade e a discrição inerentes à profissão.</p>
        <p>Eventuais reproduções de textos devem indicar a fonte. O acesso e a utilização deste site implicam concordância com as informações aqui descritas.</p>
      </section>
    </>
  );
}