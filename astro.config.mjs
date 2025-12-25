import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tuodominio.it", // <-- IMPORTANTISSIMO per canonical+sitemap
  integrations: [sitemap()],
});
