import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { setupStore } from "./store/index";

import "animate.css";
// 重置浏览器样式
import "./styles/reset.scss";
// 组件
import setupComponents from "./components/index";
// vxe-table
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

const app = createApp(App);
/**
 * 路由
 */
app.use(router);
/**
 * state管理
 */
setupStore(app);
/**
 * 加载全局组件
 */
setupComponents(app);
/**
 *  入口
 */
app.use(VXETable);
app.mount("#app");
