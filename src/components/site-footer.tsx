import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-lg text-primary">Dra. [Nome da Advogada]</p>
            <p className="mt-1 text-sm text-muted-foreground">OAB/[UF] nº XXXXX</p>
            <p className="mt-1 text-sm text-muted-foreground">[Cidade] / [UF]</p>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">
              As informações disponibilizadas neste site possuem caráter exclusivamente
              informativo, não constituem promessa de resultado e não substituem a análise
              jurídica individualizada por profissional habilitado.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Áreas de atuação
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>Direito de Família</li>
              <li>Direito Previdenciário</li>
              <li>Direito Cível</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Institucional
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>
                <Link to="/sobre" className="hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/informacoes-juridicas" className="hover:text-primary">
                  Informações Jurídicas
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="hover:text-primary">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Dra. [Nome da Advogada]. Todos os direitos reservados.</p>
          <p>OAB/[UF] nº XXXXX</p>
        </div>
      </div>
    </footer>
  );
}