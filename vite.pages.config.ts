import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/iki-medya-sculpture-atelier/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname),
    },
  },
  define: {
    "process.env.NEXT_PUBLIC_API_BASE_URL": JSON.stringify(""),
    "process.env.NEXT_PUBLIC_WHATSAPP_NUMBER": JSON.stringify("905079458321"),
  },
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "pages/index.html"),
    },
  },
});
