import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Rafaella Borges | Advocacia Individual" },
      {
        name: "description",
        content:
          "Site institucional da Dra. Rafaella Borges, advogada com atuação profissional pautada pela ética, clareza, responsabilidade e atendimento jurídico individualizado.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index(): JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Advocacia Individual
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-primary md:text-6xl">
              Dra. Rafaella Borges
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Advogada inscrita na OAB/[UF] nº XXXXX
            </p>
            <div className="gold-rule mt-7" />
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/85">
              Atuação jurídica com responsabilidade, ética e clareza.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Atuação voltada à orientação jurídica individualizada, com compromisso técnico,
              discrição profissional e respeito às particularidades de cada situação.
            </p>
            <div className="mt-9">
              <WhatsAppButton variant="outline">Fale conosco</WhatsAppButton>
            </div>
          </div>

          <aside className="relative" aria-label="Foto profissional">
            <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/60" />
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-muted">
              <figure className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-px w-12 bg-accent" />
                  <p className="mt-4 font-serif text-xl text-primary/70">[Foto profissional]</p>
                  <figcaption className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Espaço reservado
                  </figcaption>
                </div>
              </figure>
            </div>
          </aside>
        </div>
      </section>

      {/* Atuação profissional */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Atuação profissional</p>
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">
            Escuta atenta, análise técnica e orientação responsável
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            A atuação profissional é pautada pela escuta atenta, análise técnica e orientação
            jurídica responsável, sempre respeitando os limites éticos da advocacia e as
            necessidades específicas de cada caso.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            {{
              t: "Ética",
              d: "Compromisso com os princípios e deveres da advocacia em cada orientação prestada.",
            },
            {
              t: "Clareza",
              d: "Comunicação objetiva e acessível, sem excessos técnicos desnecessários.",
            },
            {
              t: "Discrição",
              d: "Respeito ao sigilo profissional e à individualidade de cada situação.",
            }}.map((p) => (
              <article key={p.t} className="border-t border-border pt-6" aria-labelledby={`pillar-${p.t}`}>
                <p id={`pillar-${p.t}`} className="font-serif text-xl text-primary">{p.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
