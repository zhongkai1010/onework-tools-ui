import vue from '@vitejs/plugin-vue';
import { PluginOption } from 'vite';

import vueI18n from '@intlify/vite-plugin-vue-i18n';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslint from 'vite-plugin-eslint';
import topLevelAwait from 'vite-plugin-top-level-await';

import { configMockPlugin } from './mock';
import { configVisualizerConfig } from './visualizer';

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

    /**
     * element plus 按需加载
     */
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      dts: 'src/components.d.ts'
    }),

    eslint(),
    Icons({
      autoInstall: true
    }),
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
