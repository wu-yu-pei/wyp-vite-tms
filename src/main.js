import { createApp } from 'vue'
import setupRouter from './router/index'
import setupStore from './store/index'
import setupIcon from './icons/index'
import setupDirective from './directive/index'
import setupGlobalProp from './global/index'
import App from './App.vue'

function bootStrap() {
  const app = createApp(App)

  // 初始化Store
  setupStore(app)

  // 初始化图标
  setupIcon(app)

  // 初始化Router
  setupRouter(app)

  // 初始化自定义指令
  setupDirective(app)

  // 初始化全局属性(过滤器)
  setupGlobalProp(app)

  // 挂载app
  app.mount('#app')
}

// 启动项目
bootStrap()
