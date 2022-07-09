import { createStore } from "vuex";

export default createStore({
  state: {
    user: false,
    userInfo: {},
    properties: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    userDetail(state, payload) {
      state.userInfo = payload;
    },
    properties(state, payload) {
      state.properties = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
    },
    userDetail({ commit }, payload) {
      commit("userDetail", payload);
    },
    setProperties({ commit }, payload) {
      commit("properties", payload);
    },
  },
});
