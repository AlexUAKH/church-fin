export default {
  state: {
    user: "sfcs"
  },
  mutations: {},
  actions: {},
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    }
  }
};
