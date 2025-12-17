import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig> {
  routes: (_routes) => {
    return [
      ..._routes,
      {
        name: 'home',
        path: '/home',
        component: () => import('~/pages/index.vue')
      },{
        name: 'myRedit',
        path: '/redirect',
        redirect: '/role/detail'
      }
    ]
  }
}
