import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border bg-secondary/45">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 md:py-12">
        <div className="grid gap-9 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-2">
            <p className="font-serif text-lg text-primary">Dra. Rafaella Borges</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">OAB/[UF] nº XXXXX</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Cascavel / PR</p>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-xs leading-6 text-muted-foreground">
              As informações disponibilizadas neste site possuem caráter exclusivamente
              informativo, não constituem promessa de resultado e não substituem a análise
              jurídica individualizada por profissional habilitado.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Áreas de atuação
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/85">
              <li>Direito do Trabalho</li>
              <li>Direito Previdenciário</li>
              <li>Direito Civil</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Institucional
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/85">
              <li>
                <Link to="/sobre" className="transition-colors hover:text-accent">Sobre</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="transition-colors hover:text-accent">Áreas de Atuação</Link>
              </li>
              <li>
                <Link to="/contato" className="transition-colors hover:text-accent">Contato</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="transition-colors hover:text-accent">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-accent">Aviso Legal</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-xs leading-6 text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Dra. Rafaella Borges. Todos os direitos reservados.</p>
          <p>OAB/[UF] nº XXXXX</p>
        </div>
      </div>
    </footer>
  );
}
