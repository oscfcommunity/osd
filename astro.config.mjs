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
      '94cf578a9552.ngrok-free.app', // your current ngrok host
      '*.ngrok-free.app',            // allow all ngrok subdomains (recommended)
    ],
  },


  integrations: [react()]
});