import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "CodeBrew Cafe",
        short_name: "CodeBrew",
        description: "MERN Stack",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/Coffee1.jpeg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/Coffee2.jpeg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/Coffee2.jpeg",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});