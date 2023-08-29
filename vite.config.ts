import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

const vitePwa = VitePWA({
  registerType: "autoUpdate",
  workbox: {
    cleanupOutdatedCaches: true,
    globDirectory: "dist/",
    swDest: "dist/sw.js",
    globPatterns: ["**/*.{css,woff2,png,svg,jpg,jpeg,js}"],
    runtimeCaching: [
      {
        handler: "NetworkOnly",
        urlPattern: /\/api\/.*\/*.json/,
        method: "POST",
        options: {
          backgroundSync: {
            name: "myQueueName",
            options: {
              maxRetentionTime: 24 * 60,
            },
          },
        },
      },
    ],
  },
  outDir: "build",
  manifest: {
    name: "ToDo Classic",
    short_name: "Classic",
    description: "A To Do app for perfectionists.",
    theme_color: "#191919",
    background_color: "#191919",
    icons: [
      {
        src: "assets/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

export default defineConfig({
  plugins: [react(), eslint(), vitePwa],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
