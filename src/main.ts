import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { createPinia } from "pinia";
// 引入重置浏览器样式
import "./style/reset.scss";
// 重置element plus样式
import "./style/element.scss";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
