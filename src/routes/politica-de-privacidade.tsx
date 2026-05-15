import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    pageMeta({
      title: "Política de privacidade | Dra. Rafaella Borges",
      description:
        "Política de privacidade do site da Dra. Rafaella Borges Advocacia, com informações sobre finalidade institucional e tratamento de dados.",
      path: "/politica-de-privacidade",
    }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <>
      <PageHeader eyebrow="Institucional" title="Política de privacidade" />
      <section className="mx-auto max-w-3xl space-y-5 px-5 py-10 text-base leading-8 text-muted-foreground sm:px-6 md:py-12">
        <p>Este site possui finalidade exclusivamente institucional e informativa. Não realiza coleta ativa de dados pessoais para fins comerciais.</p>
        <p>Eventuais informações técnicas de navegação podem ser registradas para fins de segurança e funcionamento do site, observando-se a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).</p>
        <p>O sigilo profissional, dever ético da advocacia, permanece como princípio orientador da conduta profissional, em conformidade com as normas aplicáveis.</p>
      </section>
    </>
  );
}
