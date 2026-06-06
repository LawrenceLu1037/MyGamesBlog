import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://lawrencelu.games",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://lawrencelu.games/admin/",
    }),
    {
      name: "local-admin-only",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          await rm(fileURLToPath(new URL("admin", dir)), {
            recursive: true,
            force: true,
          });
        },
      },
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
