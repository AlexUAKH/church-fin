export default {
  state: {
    currentLanguage:
      localStorage.getItem("currentLanguage") ||
      process.env.VUE_APP_I18N_LOCALE ||
      "eng",
    snack: {}
  },
  mutations: {
    setSnack(state, snack) {
      state.snack = snack;
    }
  },
  actions: {
    showMessage({ commit }, snack) {
      commit("setSnack", snack);
    }
  },
  getters: {
    isSnackVisible(state) {
      return !!Object.keys(state.snack).length;
    }
  }
};
