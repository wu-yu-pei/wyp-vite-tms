import { createRouter, createWebHashHistory } from 'vue-router'
import { reload } from '../config/utils/createRoute'
import localCache from '../utils/localCache'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/login/index.vue'),
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('../view/main/index.vue'),
  },
  // 404界面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFont.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login' && localCache.get('passwd') !== undefined) {
    next(from.path)
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  // next()
})

function setupRouter(app) {
  app.use(router)

  reload()
}

export { router }
export default setupRouter
