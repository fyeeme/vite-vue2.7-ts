import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue2";

console.log(7, fileURLToPath(new URL("./src", import.meta.url)));
console.log(8, __dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
