import { UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import visualizer from "rollup-plugin-visualizer";
import eslint from "vite-plugin-eslint";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { viteMockServe } from "vite-plugin-mock";

// import { viteMockServe } from "vite-plugin-mock";

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default ({ command }): UserConfigExport => {
  return {
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js"
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/"
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        }
      ]
    },
    plugins: [
      vue({
        reactivityTransform: true
      }),
      vueI18n({
        runtimeOnly: true,
        include: path.resolve(__dirname, "./**/locales/**")
      }),
      VueSetupExtend(),
      /**
       * element plus 按需加载
       */
      AutoImport({
        dts: "src/auto-imports.d.ts",
        imports: ["vue"],
        resolvers: [
          // ElementPlusResolver({
          //   // 关键：自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
          //   importStyle: "sass"
          // })
        ]
      }),
      Components({
        resolvers: [
          // ElementPlusResolver({
          //   // 关键：自动引入修改主题色添加这一行，使用预处理样式
          //   importStyle: "sass"
          // })
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
        supportTs: true,
        localEnabled: command === "serve",
        watchFiles: true
      })
    ],
    server: {
      hmr: true,
      proxy: {
        // "/api": {
        //   target: "http://yapi.one-work.net/mock/17/api",
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, "")
        // }
      },
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
