import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  ADDRESS,
  EMAIL,
  MAPS_EMBED_URL,
  MAPS_URL,
  OAB,
  PHONE_DISPLAY,
} from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageMeta({
      title: "Contato | Dra. Rafaella Borges",
      description:
        "Entre em contato com a Dra. Rafaella Borges em Cascavel/PR por WhatsApp, e-mail, telefone ou Instagram.",
      path: "/contato",
    }),
  component: ContatoPage,
});

type DataItem = {
  l: string;
  v: string;
  href?: string;
  external?: boolean;
};

const PHONE_HREF = `tel:${PHONE_DISPLAY.replace(/\D/g, "")}`;
const INSTAGRAM_URL = "https://www.instagram.com/rafaellaborges.adv/";

const DADOS: DataItem[] = [
  { l: "Nome", v: "Dra. Rafaella Borges" },
  { l: "Inscrição", v: OAB },
  { l: "Cidade / UF", v: "Cascavel — Paraná" },
  { l: "E-mail profissional", v: EMAIL, href: `mailto:${EMAIL}` },
  { l: "Telefone / WhatsApp", v: PHONE_DISPLAY, href: PHONE_HREF },
  { l: "Instagram", v: "@rafaellaborges.adv", href: INSTAGRAM_URL, external: true },
  { l: "Endereço", v: ADDRESS },
];

function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Contato"
        intro="Canais profissionais para contato e localização do escritório."
      />

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-6 md:py-12">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          <div>
            <dl className="divide-y divide-border border-y border-border">
              {DADOS.map((d) => (
                <div
                  key={d.l}
                  className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[155px_1fr] md:gap-6 md:py-5"
                >
                  <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {d.l}
                  </dt>
                  <dd className="font-serif text-base text-primary md:text-lg">
                    {"href" in d && d.href ? (
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noopener noreferrer" : undefined}
                        className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {d.v}
                      </a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7">
              <WhatsAppButton>Enviar mensagem</WhatsAppButton>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Resposta em horário comercial.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Localização
            </p>
            <div className="gold-rule mt-3" />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 block overflow-hidden rounded-sm border border-border shadow-sm transition-colors hover:border-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label="Abrir localização no Google Maps"
            >
              <div className="relative aspect-[4/3] w-full bg-muted">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Mapa do escritório"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none h-full w-full border-0 transition-transform duration-300 group-hover:scale-[1.01]"
                  tabIndex={-1}
                />
                <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/[0.03]" />
              </div>
            </a>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{ADDRESS}</p>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
          As informações apresentadas têm caráter exclusivamente institucional e informativo.
        </p>
      </section>
    </>
  );
}
