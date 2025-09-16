// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://osd.opensourceweekend.org",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: [
      ".ngrok-free.app", // allow all ngrok domains
    ],
  },
  integrations: [
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
