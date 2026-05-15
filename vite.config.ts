import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages configuration
// The base path should match your repository name if it's a user/org pages site
// For user/org pages (https://username.github.io/), use "/" 
// For project pages (https://username.github.io/law-ethos-space/), use "/law-ethos-space/"
export default defineConfig({
  base: "/law-ethos-space/",
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    ssr: {
      external: ["@tanstack/start"],
    },
  },
});
