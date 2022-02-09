import type { RouteRecordRaw } from 'vue-router'

const pages = import.meta.glob('../views/*/*.vue')

const routes = Object.keys(pages).map(pathToRoute).filter(notEmpty)

export default routes

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function pathToRoute(path: string): RouteRecordRaw | null {
  const names = path.match(/\.\.\/views\/(.*)\/(.*)\.vue$/)
  if (names && names.length > 1) {
    const name = names[1].toLocaleLowerCase()
    return {
      path: `/${name}`,
      name: name,
      component: pages[path],
    }
  }
  return null
}
