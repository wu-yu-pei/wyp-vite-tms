import { router } from '../../router/index'
import localCache from '../../utils/localCache'
// const moduleA = import.meta.globEager(`../../view/main/page/*.vue`)
// const moduleB = import.meta.globEager(`../../view/main/page/testimonials/*.vue`)
// console.log(moduleA, moduleB)
// 动态路由modules[`../page${item.path}.vue`].default;
export function createRoute({ navMenu }) {
  for (const item of navMenu) {
    let menuItem
    if (!item.children) {
      menuItem = {
        name: item.name,
        path: `${item.path}`,
        component: () => import(`../../view${item.path}.vue`),
        // component: moduleA[`../../view${item.path}.vue`].default,
      }
      console.log(menuItem);
      router.addRoute('main', menuItem)
    } else {
      for (const subMenuItem of item.children) {
        menuItem = {
          name: subMenuItem.name,
          path: `${subMenuItem.path}`,
          component: () => import(`../../view${subMenuItem.path}.vue`),
          // component: moduleB[`../../view${subMenuItem.path}.vue`].default,
        }
        console.log(menuItem);
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
}
