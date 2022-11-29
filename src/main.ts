import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router/index';
import { setupStore } from '/@/store/index';
import { setupECharts } from '/@/plugins/echarts/index';
import { setupElementPlus } from '/@/plugins/element-plus/index';
import { setupComponents } from './components/index';
import { setupI18n } from './locales';
import { setupVueCodemirror } from '/@/plugins/vue-codemirror/index';

// 动画
import 'animate.css';
// remixicon icon
import 'remixicon/fonts/remixicon.css';
// 重置浏览器样式
import './styles/reset.scss';
// element-plus
import 'element-plus/dist/index.css';
// tailwindcss
import './styles/tailwind.css';

async function bootstrap() {
  const app = createApp(App);

  /**
   * 国际化
   */
  await setupI18n(app);

  /**
   * 路由
   */
  // app.use(router);
  setupRouter(app);

  /**
   * element-plus
   */
  setupElementPlus(app);

  /**
   * 全局组件
   */
  setupComponents(app);

  /**
   * store
   */
  setupStore(app);

  /**
   * echarts
   */
  setupECharts(app);

  /**
   * vue-codemirror
   */
  setupVueCodemirror(app);

  /**
   *  入口
   */
  app.mount('#app');
}

bootstrap();
