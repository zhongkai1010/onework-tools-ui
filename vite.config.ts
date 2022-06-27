import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import visualizer from "rollup-plugin-visualizer";
import eslint from "vite-plugin-eslint";

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// 设置别名
const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "@build": pathResolve("build")
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [
    vue(),
    /**
     * element plus 按需加载
     */
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    /**
     *  eslint
     */
    eslint(),
    visualizer()
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
});
