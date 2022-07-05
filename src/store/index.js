import { createStore } from "vuex";

export default createStore({
  state: {
    user: false,
    userInfo: {},
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    userDetail(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
    },
    userDetail({ commit }, payload) {
      commit("userDetail", payload);
    },
  },
});
