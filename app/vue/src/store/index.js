import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    accessToken: null,
    isLoading: false,
  },
  getters: {
    accessToken: (state) => state.accessToken,
    isLoading: (state) => state.isLoading,
  },
  actions: {
    setAccessToken({ commit }, { accessToken }) {
      commit('setAccessToken', { accessToken });
    },
    setLoadingStatus({ commit }, { isLoading }) {
      commit('setLoadingStatus', { isLoading });
    },
  },
  mutations: {
    setAccessToken(state, { accessToken }) {
      state.accessToken = accessToken;
    },
    setLoadingStatus(state, { isLoading }) {
      state.isLoading = isLoading;
    },
  },
  modules: {

  },
});
