import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  FileText,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMeta, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

const PRACTICE_AREAS = [
  {
    id: "trabalho",
    title: "Direito do Trabalho",
    eyebrow: "Empresas e trabalhadores",
    icon: FileText,
    summary:
      "Atuação em demandas trabalhistas, com foco preventivo e defensivo para empresas e orientação clara em cada etapa.",
    points: ["Consultoria preventiva", "Defesa trabalhista", "Acordos e litígios"],
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    eyebrow: "Benefícios e planejamento",
    icon: ShieldCheck,
    summary:
      "Análise técnica de documentos e caminhos possíveis para pedidos previdenciários.",
    points: ["Aposentadorias", "Benefícios por incapacidade", "Revisões e recursos"],
  },
  {
    id: "civel",
    title: "Direito Civil",
    eyebrow: "Relações civis e consumo",
    icon: Scale,
    summary:
      "Atuação no contencioso cível e em Direito do Consumidor, representando empresas e consumidores finais.",
    points: ["Contratos", "Direito do Consumidor", "Responsabilidade civil"],
  },
] as const;

const VALUES = [
  {
    id: "etica",
    t: "Ética",
    d: "Compromisso com os princípios e deveres da advocacia em cada orientação prestada.",
    icon: Scale,
  },
  {
    id: "clareza",
    t: "Clareza",
    d: "Comunicação objetiva e acessível, sem excessos técnicos desnecessários.",
    icon: MessageCircle,
  },
  {
    id: "discricao",
    t: "Discrição",
    d: "Respeito ao sigilo profissional e à individualidade de cada situação.",
    icon: ShieldCheck,
  },
] as const;

const LAWYER_PHOTO_URL = `${import.meta.env.BASE_URL}imagens/rafaella-borges.jpg`;

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      path: "/",
    }),
  component: Index,
});

function Index() {
  const [activeAreaId, setActiveAreaId] = useState<(typeof PRACTICE_AREAS)[number]["id"]>(
    "trabalho",
  );
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  const activeArea =
    PRACTICE_AREAS.find((area) => area.id === activeAreaId) ?? PRACTICE_AREAS[0];
  const ActiveIcon = activeArea.icon;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-8 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-14 md:pb-16 md:pt-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Advocacia Individual
            </p>
            <h1 className="mt-4 font-serif text-[2.85rem] leading-[0.98] text-primary sm:text-5xl md:text-6xl">
              Dra. Rafaella Borges
            </h1>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
              Advogada inscrita na OAB/[UF] nº XXXXX
            </p>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
              Atuação jurídica com responsabilidade, ética e clareza.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
              Orientação individualizada, com compromisso técnico, discrição profissional e
              respeito às particularidades de cada situação.
            </p>

            <div className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton>Fale conosco</WhatsAppButton>
                <a
                  href="#atuacao-interativa"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-primary/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Ver áreas
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Atendimento personalizado, com resposta em horário comercial.
              </p>
            </div>

            <dl className="mt-10 grid max-w-xl gap-4 border-y border-border py-5 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Atendimento
                </dt>
                <dd className="mt-2 font-serif text-xl text-primary">Individual</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Comunicação
                </dt>
                <dd className="mt-2 font-serif text-xl text-primary">Clara</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Conduta
                </dt>
                <dd className="mt-2 font-serif text-xl text-primary">Ética</dd>
              </div>
            </dl>
          </div>

          <aside className="relative" aria-label="Apresentação profissional">
            <div className="absolute -inset-3 -z-10 rounded-sm bg-secondary/70 md:-inset-4" />
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-border bg-muted shadow-sm md:max-w-none">
              {!photoUnavailable && (
                <img
                  src={LAWYER_PHOTO_URL}
                  alt="Dra. Rafaella Borges"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoUnavailable(true)}
                />
              )}
              {photoUnavailable && (
                <div className="flex h-full w-full items-center justify-center px-8">
                  <div className="text-center">
                    <Scale aria-hidden="true" className="mx-auto h-10 w-10 text-accent" />
                    <p className="mt-5 font-serif text-2xl text-primary">Foto profissional</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Use a imagem em public/imagens/rafaella-borges.jpg.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section id="atuacao-interativa" className="border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Áreas de atuação
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Escolha uma área para entender o caminho inicial
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Cada atendimento começa pela compreensão do caso e pela análise dos documentos
              disponíveis. Selecione uma área para ver exemplos de demandas atendidas.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="grid gap-3" role="tablist" aria-label="Áreas de atuação">
              {PRACTICE_AREAS.map((area) => {
                const Icon = area.icon;
                const selected = area.id === activeArea.id;

                return (
                  <button
                    key={area.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="area-panel"
                    onClick={() => setActiveAreaId(area.id)}
                    className={`group flex min-h-24 items-center gap-4 rounded-sm border px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      selected
                        ? "border-accent bg-background shadow-sm"
                        : "border-border bg-background/65 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-background"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                        selected
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-primary group-hover:border-accent"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {area.eyebrow}
                      </span>
                      <span className="mt-1 block font-serif text-xl text-primary">
                        {area.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="area-panel"
              role="tabpanel"
              className="border-l-2 border-accent bg-background px-6 py-6 shadow-sm md:px-7 md:py-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <ActiveIcon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-accent">
                {activeArea.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-primary">{activeArea.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {activeArea.summary}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                {activeArea.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <WhatsAppButton variant="outline" className="mt-7">
                Conversar sobre esta área
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 md:py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Atuação profissional</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-primary md:text-4xl">
            Escuta atenta, análise técnica e orientação responsável
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-6 text-lg leading-8 text-foreground/85">
            A atuação profissional é pautada pela escuta atenta, análise técnica e orientação
            jurídica responsável, sempre respeitando os limites éticos da advocacia e as
            necessidades específicas de cada caso.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {VALUES.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.id}
                  className="group border-t border-border pt-6 transition-colors hover:border-accent"
                  aria-labelledby={`pillar-${value.id}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="mb-5 h-5 w-5 text-accent transition-transform group-hover:-translate-y-1"
                  />
                  <p id={`pillar-${value.id}`} className="font-serif text-xl text-primary">
                    {value.t}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
