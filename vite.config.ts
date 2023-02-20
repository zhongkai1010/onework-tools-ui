import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import pkg from './package.json';
import dayjs from 'dayjs';

import { wrapperEnv } from './build/utils';
import { createProxy } from './build/vite/proxy';
import { OUTPUT_DIR } from './build/constant';
import { createVitePlugins } from './build/vite/plugin';

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
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
    server: {
      https: true,
      hmr: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
      watch: { usePolling: true }
    },
    esbuild: {
      drop: VITE_DROP_CONSOLE ? ['console', 'debugger'] : []
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: OUTPUT_DIR,
      // minify: 'terser',
      /**
       * 当 minify=“minify:'terser'” 解开注释
       * Uncomment when minify="minify:'terser'"
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // Turning off brotliSize display can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000
    },
    plugins: createVitePlugins(viteEnv, isBuild),

    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
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
