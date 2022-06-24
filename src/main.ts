import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { createPinia } from "pinia";
// 重置浏览器样式
import "./styles/reset.scss";
// 重置element plus样式
import "./styles/element.scss";
import 'element-plus/es/components/message/style/css'
// 基础样式
import "./styles/base.scss";

import { IconifyIcon } from "./components/OwIcon/index";
import { SubMenu } from "./components/OwSubMenu/index";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component("IconifyIcon", IconifyIcon);
app.component("SubMenu", SubMenu);
app.mount("#app");
