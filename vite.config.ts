import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"

function normalizeBasePath(basePath: string) {
  if (basePath === "/") return "/"

  const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`
}

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const githubPagesBase = normalizeBasePath(process.env.VITE_BASE_PATH ?? repositoryName ?? "siteRafa")

export default defineConfig(({ command }) => ({
  base: command === "build" ? githubPagesBase : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    target: "esnext",
  },
  server: {
    port: 5173,
  },
}))
