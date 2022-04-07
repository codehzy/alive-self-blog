import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login/index.vue'),
    meta: {
      title: '登录页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
