import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import elementPlus from "./plugins/element-plus";

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(elementPlus).mount("#app");
