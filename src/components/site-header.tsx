import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { EMAIL, PHONE_DISPLAY } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-accent/25 bg-primary text-primary-foreground shadow-sm">

     
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 md:py-5">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-lg text-primary-foreground transition-colors group-hover:text-accent">
            Dra. Rafaella Borges
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
            Advocacia
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-primary-foreground/85">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-accent" }}
                  className="relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent hover:after:scale-x-100"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-accent/25 bg-primary lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-6">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-accent" }}
                  className="block py-3 text-sm text-primary-foreground/88 transition-colors hover:text-accent"
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
