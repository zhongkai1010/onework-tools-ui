import { App } from 'vue';
import { basicSetup } from 'codemirror';
import VueCodemirror from 'vue-codemirror';

const setupVueCodemirror = (app: App<Element>) => {
  app.use(VueCodemirror, {
    // optional default global options
    autofocus: false,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: 'Code goes here...',
    extensions: [basicSetup],
    // ...
  });
};

export { setupVueCodemirror };
