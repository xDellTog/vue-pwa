import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      manifest: {
        name: "Vue PWA",
        short_name: "Vue PWA",
        description: "Vue PWA",
        display: "standalone",
        id: "/",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#FFF",
        icons: [
          {
            "src": "/logo.svg",
            "sizes": "150x150",
            "type": "image/svg+xml"
          },
        ]
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
