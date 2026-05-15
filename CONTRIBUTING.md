# Contributing

Obrigado por contribuir com o repositório `siteRafa`.
Este documento descreve padrões e práticas que ajudam a manter a base de código consistente e revisões eficientes.

## Diretrizes gerais

- Abra uma issue para discutir mudanças significativas antes de implementá-las.
- Crie branches a partir de `main` com nomes descritivos: `feature/qualquer-coisa`, `fix/descricao-bug`, `chore/dependencias`.
- Faça commits pequenos e focados.

## Convenção de commits

Use Conventional Commits (ex.: `feat:`, `fix:`, `chore:`, `docs:`).
Exemplo: `feat(contato): adicionar link tel no telefone profissional`

## Pull Requests

- Base branch: `main`.
- Descreva a mudança e por que é necessária.
- Reference a issue se existir.
- Marque reviewers apropriados.
- Inclua screenshots ou passos para testar, quando aplicável.

## Estilo de código

- .editorconfig no repositório define regras básicas (indentação com 2 espaços, UTF-8, LF).
- Use TypeScript/TSX com tipagem explícita quando possível.
- Prefira funções puras, componentes com `JSX.Element` como tipo de retorno.
- Evite placeholders não utilizados em commits finais (ex.: imagens apontando para recursos inexistentes).

## Ferramentas

Sugerimos usar as seguintes ferramentas localmente:

- ESLint para linting (regras do projeto)
- Prettier para formatação automática
- Husky + lint-staged para checagens pré-commit

## Testes e validação

- Rode `npm test` ou `pnpm test` quando houver testes.
- Adicione testes unitários para lógica não trivial.

## Revisão de Código

- Verificações: estilo, build passing, testes automatizados.
- Comentários objetivos e sugerindo alternativas quando necessário.

## Padrões de acessibilidade

- Forneça `alt` para imagens significativas.
- Use elementos semânticos (`address`, `figure`, `figcaption`, `nav`, etc.).
- Garanta foco visível e navegação por teclado.

## Trabalho Recomendado antes de abrir PR

- `npm run lint` / `npm run format`
- `npm run build` para validar que a aplicação compila

Obrigado por ajudar a manter o projeto limpo e consistente!