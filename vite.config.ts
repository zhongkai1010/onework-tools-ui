import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import visualizer from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { viteMockServe } from 'vite-plugin-mock';
import topLevelAwait from 'vite-plugin-top-level-await';

// import { viteMockServe } from "vite-plugin-mock";

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default ({ _command }): UserConfigExport => {
  return {
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      vueI18n({
        runtimeOnly: true,
        include: path.resolve(__dirname, './**/locales/**'),
      }),
      VueSetupExtend(),
      /**
       * element plus 按需加载
       */
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue'],
        resolvers: [
          // ElementPlusResolver({
          //   // 关键：自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
          //   importStyle: "sass"
          // })
        ],
      }),
      Components({
        directoryAsNamespace: true,
      }),
      /**
       *  eslint
       */
      eslint(),
      visualizer(),
      viteMockServe({
        mockPath: './mock/', //mock文件地址
        localEnabled: false, // 开发打包开关
        prodEnabled: true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,
        logger: false, //是否在控制台显示请求日志
        supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
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
      watch: { usePolling: true },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/styles/index.scss" as *;',
        },
      },
    },
  };
};
