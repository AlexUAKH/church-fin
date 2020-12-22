export default {
  state: {
    currentLanguage:
      localStorage.getItem("currentLanguage") ||
      process.env.VUE_APP_I18N_LOCALE ||
      "eng"
  },
  mutations: {},
  actions: {},
  modules: {}
};
