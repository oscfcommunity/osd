// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },
  server: {
    allowedHosts: [
      '.ngrok-free.app',   // allow all ngrok domains
    ]
  },


  integrations: [react()]
});