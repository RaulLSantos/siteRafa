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

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Dra. Rafaella Borges" },
      {
        name: "description",
        content:
          "Informações de contato profissional da Dra. Rafaella Borges em Cascavel, Paraná.",
      },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

type DataItem = {
  l: string;
  v: string;
  href?: string;
};

const PHONE_HREF = `tel:${PHONE_DISPLAY.replace(/\D/g, "")}`;

const DADOS: DataItem[] = [
  { l: "Nome", v: "Dra. Rafaella Borges" },
  { l: "Inscrição", v: OAB },
  { l: "Cidade / UF", v: "Cascavel — Paraná" },
  { l: "E-mail profissional", v: EMAIL, href: `mailto:${EMAIL}` },
  { l: "Telefone / WhatsApp", v: PHONE_DISPLAY, href: PHONE_HREF },
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

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <dl className="divide-y divide-border border-y border-border">
              {DADOS.map((d) => (
                <div
                  key={d.l}
                  className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[160px_1fr] md:gap-6"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {d.l}
                  </dt>
                  <dd className="font-serif text-base text-primary md:text-lg">
                    {"href" in d && d.href ? (
                      <a href={d.href} className="hover:text-accent">
                        {d.v}
                      </a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <WhatsAppButton>Enviar mensagem</WhatsAppButton>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Localização
            </p>
            <div className="gold-rule mt-3" />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block overflow-hidden rounded-sm border border-border transition-colors hover:border-accent/60"
              aria-label="Abrir endereço no Google Maps"
            >
              <div className="relative aspect-[4/3] w-full bg-muted">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Mapa do escritório"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
                <span className="pointer-events-none absolute inset-0" />
              </div>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:text-accent hover:underline"
            >
              Ver localização no Google Maps →
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
          As informações apresentadas têm caráter exclusivamente institucional e informativo.
        </p>
      </section>
    </>
  );
}
