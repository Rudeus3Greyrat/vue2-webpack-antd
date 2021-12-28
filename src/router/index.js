import Vue from 'vue';
import VueRouter from 'vue-router';
import TabRoutes from './modules/tab';

Vue.use(VueRouter);

export default new VueRouter({
  mode: '',
  routes: TabRoutes,
});
