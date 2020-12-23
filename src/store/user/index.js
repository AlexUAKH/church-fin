export default {
  state: {
    user: null
  },
  mutations: {},
  actions: {},
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    }
  }
};
