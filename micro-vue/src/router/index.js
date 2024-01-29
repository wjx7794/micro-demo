//import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Other from '../views/Other.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/other',
    name: 'Other',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Other,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: Home,

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),

    // component: () => import('@/views/About.vue'),
  },
];

// const router = createRouter({
//   history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? `/vue3/` : '/'),
//   routes,
// });

export { routes };

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

//export default router;
