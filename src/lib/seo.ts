export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://raullsantos.github.io/siteRafa"
).replace(/\/$/, "");

export const SITE_NAME = "Dra. Rafaella Borges Advocacia";
export const SITE_TITLE = "Dra. Rafaella Borges | Advocacia em Cascavel/PR";
export const SITE_DESCRIPTION =
  "Advocacia trabalhista, previdenciária e cível em Cascavel/PR, com atendimento individualizado, orientação preventiva e atuação técnica em litígios.";
export const SITE_IMAGE = `${SITE_URL}/imagens/rafaella-borges.jpg`;

export function canonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = canonicalUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Dra. Rafaella Borges" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
