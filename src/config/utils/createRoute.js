import { router } from '../../router/index'
import localCache from '../../utils/localCache'
// 动态路由
export function createRoute({ navMenu }) {
  for (const item of navMenu) {
    let menuItem
    if (!item.children) {
      menuItem = {
        name: item.name,
        path: `${item.path}`,
        component: () => import(`../../view/${item.path}.vue`),
      }
      router.addRoute('main', menuItem)
    } else {
      for (const subMenuItem of item.children) {
        menuItem = {
          name: subMenuItem.name,
          path: `${subMenuItem.path}`,
          component: () => import(`../../view/${subMenuItem.path}.vue`),
        }
        router.addRoute('main', menuItem)
      }
    }
  }
  router.push(navMenu[0].path)
}

export function reload() {
  localCache.get('navMenu')?.length
    ? createRoute({ navMenu: localCache.get('navMenu') })
    : router.push('/login')
  console.log(2)
}
