import { defineConfig } from "astro/config";

import AstroPWA from "@vite-pwa/astro";
// https://astro.build/config
export default defineConfig({
  integrations: [
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",

      registerType: "autoUpdate",

      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
});
