import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    currentConversation: {}
  },
  mutations: {
    storeUser: (state, user) => {
      state.user = user;
    },
    setCurrentConversation: (state, contact) => {
      state.currentConversation = contact;
    }
  },
  actions: {
    storeUser: ({ commit }, payload) => {
      commit("storeUser", payload);
    },
    setCurrentConversation: ({ commit }, payload) => {
      commit("setCurrentConversation", payload);
    }
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    currentConversation(state) {
      return state.currentConversation;
    }
  }
});
