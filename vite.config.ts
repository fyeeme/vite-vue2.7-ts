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
  server: {
    https: false,
    port: 8079,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
          proxy.on("proxyReq", (proxyReq, req, res, options) => {
            console.log(39, req.headers);
            proxyReq.setHeader("domain", req.headers.host);
          });
        },
      },
    },
  },
});
