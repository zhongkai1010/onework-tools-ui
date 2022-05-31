import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { viteMockServe } from "vite-plugin-mock";
import { UserConfigExport, ConfigEnv } from "vite";

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// 设置别名
const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "@build": pathResolve("build"),
};

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      eslintPlugin({}),
      viteMockServe({
        mockPath: "mock",
        prodEnabled: command !== "serve",
        logger: true,
      }),
    ],
    resolve: {
      alias,
    },
    server: {
      port: 3002,
      host: "0.0.0.0",
      watch: {
        usePolling: true,
      },
    },
  };
};
