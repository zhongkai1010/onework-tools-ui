import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { createPinia } from "pinia";
// 重置浏览器样式
import "./styles/reset.scss";
// 重置element plus样式
import "./styles/element.scss";
// 基础样式
import "./styles/base.scss";


const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
