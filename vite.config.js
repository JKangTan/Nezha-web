import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from "postcss-pxtorem";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/common.scss";@import "@/style/_reset.scss";`,
      },
    },
    postcss: {
      plugins: [
        // postCssPxToRem({
        //   rootValue: 122, // 1rem 等于多少 px  一般是设计稿的 1 / 10
        //   propList: ["*"],
        // }),
      ],
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 10 * 1024,
    target: "modules",
    assetsDir: "assets",
    minify: "esbuild", // 混淆器，terser构建后文件体积更小
    chunkSizeWarningLimit: 50 * 1024,
  },
  server: {
    host: "0.0.0.0",
    port: "5173",
    proxy: {
    },
    origin: "http://127.0.0.1:5173",
  },
  optimizeDeps: {
    include: ["axios"],
  },
})
