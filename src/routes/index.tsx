import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. [Nome da Advogada] | Advocacia Individual em [Cidade/UF]" },
      {
        name: "description",
        content:
          "Site institucional da Dra. [Nome da Advogada], advogada inscrita na OAB/[UF], com atuação jurídica pautada pela ética, clareza e responsabilidade profissional.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
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
              Dra. [Nome da Advogada]
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
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/60" />
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-muted">
              {/* Espaço reservado para foto profissional */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-px w-12 bg-accent" />
                  <p className="mt-4 font-serif text-xl text-primary/70">
                    [Foto profissional]
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Espaço reservado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atuação profissional */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Atuação profissional
          </p>
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
            {[
              {
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
              },
            ].map((p) => (
              <div key={p.t} className="border-t border-border pt-6">
                <p className="font-serif text-xl text-primary">{p.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
