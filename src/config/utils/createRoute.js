import { router } from '../../router/index'
import localCache from '../../utils/localCache'

const moduleA = import.meta.globEager(`../../view/main/page/*.vue`)
const moduleB = import.meta.globEager(`../../view/main/page/testimonials/*.vue`)
const moduleC = import.meta.globEager(`../../view/main/page/examine/*.vue`)
const moduleD = import.meta.globEager(`../../view/main/page/websetManger/*.vue`)
const moduleE = import.meta.globEager(`../../view/main/page/infoMenu/*.vue`)
// 动态路由modules[`../page${item.path}.vue`].default;

// 生成路由
/**
 *
 * @param {Object} param1
 */
export function createRoute({ navMenu }) {
  for (const item of navMenu) {
    let menuItem
    if (!item.children) {
      menuItem = {
        name: item.name,
        path: `${item.path}`,
        // component: () => import(`../../view${item.path}.vue`),
        component: moduleA[`../../view${item.path}.vue`].default,
      }
      router.addRoute('main', menuItem)
    } else {
      for (const subMenuItem of item.children) {
        menuItem = {
          name: subMenuItem.name,
          path: `${subMenuItem.path}`,
          // component: () => import(`../../view${subMenuItem.path}.vue`),
          component: thisModule(subMenuItem.path)[`../../view${subMenuItem.path}.vue`].default,
        }
        router.addRoute('main', menuItem)
      }
    }
  }
  router.push(navMenu[0].path)
}

export function createInfoRouter({ infoMenu }) {
  console.log(infoMenu)
  for (let infoItem of infoMenu) {
    let item = {
      name: infoItem.name,
      path: infoItem.path,
      component: moduleE[`../../view${infoItem.path}.vue`].default,
    }
    console.log(item)
    router.addRoute('main', item)
  }
}

/**
 * @param
 * @returns
 */
export function reload() {
  localCache.get('navMenu')?.length
    ? createRoute({ navMenu: localCache.get('navMenu') })
    : router.push('/login')
  localCache.get('infoMenu')?.length
    ? createInfoRouter({ infoMenu: localCache.get('infoMenu') })
    : router.push('/login')
}

/**
 *
 * @param {string} path
 * @returns ModuleB|ModuelC|ModuleD
 */
function thisModule(path) {
  for (let key in moduleB) {
    if (key.match(path)) return moduleB
  }
  for (let key in moduleC) {
    if (key.match(path)) return moduleC
  }
  for (let key in moduleD) {
    if (key.match(path)) return moduleD
  }
}
