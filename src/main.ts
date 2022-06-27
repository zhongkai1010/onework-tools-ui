import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { createPinia } from 'pinia'
// 重置浏览器样式
import './styles/reset.scss'
// 重置element plus样式
import './styles/element.scss'
import 'element-plus/es/components/message/style/css'
// 基础样式
import './styles/base.scss'
// 组件
import { IconifyIcon } from './components/OwIcon/index'
import { SubMenu } from './components/OwSubMenu/index'

const app = createApp(App)
/**
 * 路由
 */
app.use(router)
/**
 * state管理
 */
app.use(createPinia())
/**
 * 加载全局组件
 */
app.component('IconifyIcon', IconifyIcon)
app.component('SubMenu', SubMenu)
/**
 *  入口
 */
app.mount('#app')
