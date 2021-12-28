const state = {
  a: 1,
};

const getters = {
  getNum(state) {
    return state.a;
  },
};

const mutations = {
  incre(state, payload) {
    state.a += payload;
  },
};

const actions = {
  increAsync({ commit, state }, payload) {
    commit('incre', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
