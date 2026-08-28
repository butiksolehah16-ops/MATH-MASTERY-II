import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg", "icon-180.png"],
      manifest: {
        name: "Math Mastery — KSSM Matematik",
        short_name: "Math Mastery",
        description: "Penguasaan Matematik KSSM Tingkatan 1-3 — bukan sekadar bank soalan.",
        lang: "ms",
        start_url: "/",
        display: "standalone",
        background_color: "#0e1420",
        theme_color: "#0e1420",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png}"],
      },
    }),
  ],
});
