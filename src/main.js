import { createApp } from 'vue'
import setupRouter from './router/index'
import setupStore from './store/index'
import setupIcon from './icons/index'
import App from './App.vue'

function bootStrap() {
  const app = createApp(App)

  setupStore(app)

  setupIcon(app)

  setupRouter(app)

  app.mount('#app')
}

bootStrap()
