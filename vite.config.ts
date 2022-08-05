import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    polyfillModulePreload: false,
    // target: 'esnext',
    // sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        main2: resolve(__dirname, "app2.html"),
        all: resolve(__dirname, "all.html"),
        lib: resolve(__dirname, "/src/lib.js"),
      },
      output: {
        assetFileNames: "assets/[name][extname]", // default: "assets/[name]-[hash][extname]"
        chunkFileNames: "chunk-[name].js", // Default: "[name]-[hash].js"
        entryFileNames: "[name].js",
      },
    },
  },
});
