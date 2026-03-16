import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Build trigger: 2026-03-16
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
