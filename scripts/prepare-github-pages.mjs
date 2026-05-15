import { copyFile, writeFile } from "node:fs/promises"
import { join } from "node:path"

const distDir = join(process.cwd(), "dist")
const routes = [
  "/",
  "/sobre",
  "/areas-de-atuacao",
  "/contato",
  "/politica-de-privacidade",
  "/aviso-legal",
]

function getSiteUrl() {
  const explicitUrl = process.env.VITE_SITE_URL ?? process.env.SITE_URL

  if (explicitUrl) {
    return explicitUrl.replace(/\/$/, "")
  }

  const repository = process.env.GITHUB_REPOSITORY
  if (repository) {
    const [owner, repo] = repository.split("/")
    return `https://${owner.toLowerCase()}.github.io/${repo}`
  }

  return "https://raullsantos.github.io/siteRafa"
}

const siteUrl = getSiteUrl()
const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${siteUrl}${route === "/" ? "/" : route}`
    const priority = route === "/" ? "1.0" : route === "/contato" ? "0.8" : "0.7"

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join("\n")}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

await copyFile(join(distDir, "index.html"), join(distDir, "404.html"))
await writeFile(join(distDir, ".nojekyll"), "")
await writeFile(join(distDir, "sitemap.xml"), sitemap)
await writeFile(join(distDir, "robots.txt"), robots)
