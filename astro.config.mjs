import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog2-ci6.pages.dev", // <-- IMPORTANTISSIMO per canonical+sitemap
  integrations: [sitemap()],
});
