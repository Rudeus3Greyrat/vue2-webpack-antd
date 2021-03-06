import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import 'ant-design-vue/dist/antd.less';
// import './style/theme.less';

import './element/index';

import './style/reset.css';
import './style/index.scss';
import './style/index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
