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
      path: '/',
      name: 'login',
      meta: { title: '' },
      component: () => import('@/views/login/login.vue'),
      children: [],
    },
  ],
});
