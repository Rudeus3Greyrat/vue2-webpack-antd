export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: 'index' */ '@/view/index.vue'),
  },
];
