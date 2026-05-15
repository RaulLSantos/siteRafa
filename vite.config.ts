import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// GitHub Pages configuration
// The base path should match your repository name if it's a user/org pages site
// For user/org pages (https://username.github.io/), use "/" 
// For project pages (https://username.github.io/law-ethos-space/), use "/law-ethos-space/"
export default defineConfig({
  base: "/siteRafa/",
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    ssr: {
      external: ["@tanstack/start"],
    },
  },
});
