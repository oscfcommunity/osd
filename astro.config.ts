import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
