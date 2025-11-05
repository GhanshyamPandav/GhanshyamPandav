import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server"; // 👈 only used in dev mode

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({ // 👈 your GitHub repo name (important for Pages)
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa", // 👈 output folder for production build
  },
  plugins: [
    react(),
    expressPlugin(), // 👈 only runs during local development
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// 👇 Express plugin for Vite dev server (won’t affect production build)
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during dev
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
