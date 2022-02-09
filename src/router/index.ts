import { createRouter, createWebHashHistory } from 'vue-router'
// import routes from './router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import routes from 'virtual:generated-pages'
console.log(routes)

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
