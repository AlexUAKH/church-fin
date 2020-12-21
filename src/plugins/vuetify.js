import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const th = localStorage.getItem("theme");

export default new Vuetify({
  theme: { dark: th === "dark" ? true : false },
  options: {
    themeCache: {
      get: key => localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, value)
    }
  }
});
