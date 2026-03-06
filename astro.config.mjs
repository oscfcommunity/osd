// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

const REDIRECTS = {
  // call for volunteers
  "/volunteer": "https://forms.gle/TbPEKUg2eet3VWuF7",
  "/cfv": "/volunteer",
  // call for community partners
  "/cfcp": "https://forms.gle/pkZUerJzfvYYGJLs5",
  "/cfc": "/cfcp",
  "/cfp": "/cfcp",
  // call for speakers
  "/speak": "https://forms.gle/9NWA4PupC558Ery49",
  "/cfspk": "/speak",
  //call for sponsors
  "/sponsor": "https://forms.gle/5LkeXLPKezt3u3G78",
  "/cfs": "/sponsor",
  // call for evangelists
  "/evangelize": "https://forms.gle/3RCMnSiKfbq58o246",
  "/cfe": "/evangelize",
};

// https://astro.build/config
export default defineConfig({
  site: "https://osd.opensourceweekend.org",
  output: "static",
  redirects: REDIRECTS,
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["react-easy-crop", "tslib"],
    },
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
