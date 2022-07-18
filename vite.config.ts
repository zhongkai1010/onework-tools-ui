import { ConfigEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import visualizer from "rollup-plugin-visualizer";
import eslint from "vite-plugin-eslint";
import { viteMockServe } from "vite-plugin-mock";

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
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias
    },
    plugins: [
      vue(),
      /**
       * element plus 按需加载
       */
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            // 关键：自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
            importStyle: "sass"
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            // 关键：自动引入修改主题色添加这一行，使用预处理样式
            importStyle: "sass"
          })
        ]
      }),
      /**
       *  eslint
       */
      eslint(),
      visualizer(),
      viteMockServe({
        // default
        mockPath: "mock",
        localEnabled: command === "serve"
      })
    ],
    server: {
      watch: { usePolling: true }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/styles/index.scss" as *;'
        }
      }
    }
  };
};
