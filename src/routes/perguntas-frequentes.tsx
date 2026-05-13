import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes | Dra. [Nome da Advogada]" },
      { name: "description", content: "Perguntas frequentes sobre consulta jurídica, sigilo profissional e atuação preventiva." },
    ],
    links: [{ rel: "canonical", href: "/perguntas-frequentes" }],
  }),
  component: FaqPage,
});

const FAQ = [
  { q: "O que é uma consulta jurídica?", a: "A consulta jurídica é o momento em que uma situação específica é analisada por profissional habilitado, considerando os fatos, documentos e normas aplicáveis." },
  { q: "Por que a análise de documentos é importante?", a: "Os documentos ajudam a compreender melhor o contexto jurídico e podem influenciar diretamente na orientação adequada para cada situação." },
  { q: "O que significa atuação preventiva?", a: "A atuação preventiva busca identificar riscos jurídicos antes que eles se transformem em conflitos ou processos." },
  { q: "O que é sigilo profissional?", a: "O sigilo profissional é um dever ético da advocacia e protege as informações compartilhadas no contexto da relação entre advogado e cliente." },
  { q: "As informações do site substituem uma consulta jurídica?", a: "Não. As informações disponibilizadas no site possuem caráter exclusivamente informativo e não substituem a análise individualizada de um profissional habilitado." },
];

function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Esclarecimentos" title="Perguntas frequentes" />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}