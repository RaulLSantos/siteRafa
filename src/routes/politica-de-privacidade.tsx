import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade | Dra. Rafaella Borges" },
      { name: "description", content: "Política de privacidade institucional do site." },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <>
      <PageHeader eyebrow="Institucional" title="Política de privacidade" />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>Este site possui finalidade exclusivamente institucional e informativa. Não realiza coleta ativa de dados pessoais para fins comerciais.</p>
        <p>Eventuais informações técnicas de navegação podem ser registradas para fins de segurança e funcionamento do site, observando-se a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).</p>
        <p>O sigilo profissional, dever ético da advocacia, permanece como princípio orientador da conduta profissional, em conformidade com as normas aplicáveis.</p>
      </section>
    </>
  );
}
