import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue2";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    legacy({
      targets: ["ie >= 11"],
    }),
    Unocss(),
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
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
          proxy.on("proxyReq", (proxyReq, req, res, options) => {
            const hostname: any = req.headers.host?.split(":")[0] || "";
            proxyReq.setHeader("domain", hostname);
          });
        },
      },
    },
  },
});
