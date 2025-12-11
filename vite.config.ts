import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envHosts = (process.env.ALLOWED_HOSTS || "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);
  return {
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      "app-fator-essencial-pg-app-fator.hwx2ti.easypanel.host",
      "fator5ps.shop",
      ...envHosts,
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
