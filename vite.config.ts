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
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    plugins: [
      vue({
        reactivityTransform: true
      }),
      vueI18n({
        runtimeOnly: true,
        include: path.resolve(__dirname, './**/locales/**')
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
        ]
      }),
      Components({
        directoryAsNamespace: true
      }),
      /**
       *  eslint
       */
      eslint(),
      visualizer(),
      viteMockServe({
        mockPath: 'mock',
        supportTs: true,
        localEnabled: true,
        watchFiles: true
        // // 设置存储模拟 .ts 文件的文件夹
        // mockPath: './mock/',
        // // 打开后可以读取ts文件模块。请注意，您将无法在打开后监控 .js 文件。
        // supportTs: true,
        // // 自动读取模拟 .ts 文件时，忽略指定格式的文件
        // ignore: undefined,
        // // 设置是否监听 mock .ts 文件的变化
        // watchFiles: true,
        // // 设置是否开启本地mock .ts文件，不要在生产环境打开
        // localEnabled: false,
        // // 设置是否开启打包的mock功能
        // prodEnabled: true,
        // // 如果在生产环境中启用了mock功能，即prodEnabled=true，则代码会被注入到injectFile对应的文件底部。默认是 main.{ts,js}
        // // 这样做的好处是可以动态控制生产环境中是否启用mock，不启用时mock.js不会被打包。
        // // 如果代码直接写在main.ts中，不管是否开启，最终的包都会包含mock.js
        // injectCode: `
        //   import { setupProdMockServer } from './mockProdServer';
        //   setupProdMockServer();
        // `
        // // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
        // // injectFile: resolve('src/main.{ts,js}')
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`
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
