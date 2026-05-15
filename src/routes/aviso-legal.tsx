import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/aviso-legal")({
  head: () =>
    pageMeta({
      title: "Aviso legal | Dra. Rafaella Borges",
      description:
        "Aviso legal do site da Dra. Rafaella Borges Advocacia sobre finalidade informativa, ética profissional e uso do conteúdo.",
      path: "/aviso-legal",
    }),
  component: AvisoPage,
});

function AvisoPage() {
  return (
    <>
      <PageHeader eyebrow="Institucional" title="Aviso legal" />
      <section className="mx-auto max-w-3xl space-y-5 px-5 py-10 text-base leading-8 text-muted-foreground sm:px-6 md:py-12">
        <p>As informações disponibilizadas neste site possuem caráter exclusivamente informativo, não constituem promessa de resultado e não substituem a análise jurídica individualizada por profissional habilitado.</p>
        <p>O conteúdo aqui apresentado segue as normas do Código de Ética e Disciplina da Ordem dos Advogados do Brasil e o Provimento aplicável à publicidade na advocacia, observando-se a sobriedade e a discrição inerentes à profissão.</p>
        <p>Eventuais reproduções de textos devem indicar a fonte. O acesso e a utilização deste site implicam concordância com as informações aqui descritas.</p>
      </section>
    </>
  );
}
