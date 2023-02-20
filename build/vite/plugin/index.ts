import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import eslint from 'vite-plugin-eslint';
import topLevelAwait from 'vite-plugin-top-level-await';

import { configVisualizerConfig } from './visualizer';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean): any[] {
  const { VITE_USE_MOCK } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue({
      reactivityTransform: true
    }),

    vueI18n({
      runtimeOnly: true,
      include: path.resolve(__dirname, './**/locales/**')
    }),
    // support name
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
    eslint(),

    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    })
  ];

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));
  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());
  return vitePlugins;
}
