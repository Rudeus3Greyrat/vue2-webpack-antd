import Vue from 'vue';
import Vuex from 'vuex';

import MyStoreModule from './modules/my';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MyStoreModule,
  },
});
