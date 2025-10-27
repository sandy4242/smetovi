// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "bs",
    locales: ["bs", "en"],
    routing: {
      prefixDefaultLocale: false, // Bosnian URLs won't have /bs/ prefix
      redirectToDefaultLocale: true, // Redirect /bs/* to /*
    },
    fallback: {
      en: "bs", // If English content missing, fallback to Bosnian
    },
  },
  vite: {
    plugins: [tailwind()],
  },
});
