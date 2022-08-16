import ElementPlus from 'element-plus';
import { App } from 'vue';

const setupElementPlus = (app: App<Element>) => {
  app.use(ElementPlus);
};

export { setupElementPlus };
