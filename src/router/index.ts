import { createRouter, createWebHashHistory } from 'vue-router';
/* 页面中没有挂载路由 */
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/modules/main/Main.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '' },
      component: () => import('@/views/login/login.vue'),
      children: [],
    },
    {
      path: '/target-line',
      name: 'target-line',
      meta: { title: '' },
      component: () => import('@/views/modules/target-line/TargetLine.vue'),
      children: [],
    },
  ],
});
