import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// VITE_BASE controls the public base path:
//   "/"        -> user site (repo named YOUR_USERNAME.github.io)
//   "/repo/"   -> project site (any other repo name)
// The GitHub Actions workflow sets this automatically.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        notFound: resolve(import.meta.dirname, "404.html"),
      },
    },
  },
});
