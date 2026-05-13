import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/informacoes-juridicas", label: "Informações Jurídicas" },
  { to: "/artigos", label: "Artigos" },
  { to: "/perguntas-frequentes", label: "Perguntas Frequentes" },
  { to: "/dados-profissionais", label: "Dados Profissionais" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-lg text-primary">Dra. [Nome da Advogada]</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Advocacia
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-foreground/80">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="relative transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block py-2.5 text-sm text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}