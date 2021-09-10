const state = {
  currentLanguage:
    localStorage.getItem("currentLanguage") ||
    process.env.VUE_APP_I18N_LOCALE ||
    "ukr",
  snack: {}
};
const mutations = {
  setSnack: (state, snack) => {
    state.snack = snack;
  }
};
const actions = {
  showMessage: ({ commit }, snack) => {
    console.log("from showMessage");
    commit("setSnack", snack);
  }
};
const getters = {
  isSnackVisible: state => {
    return !!Object.keys(state.snack).length;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
