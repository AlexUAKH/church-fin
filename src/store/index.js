// Vue
import Vue from "vue";
import Vuex from "vuex";
// Modules
import * as modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  plugins: []
});

store.subscribe(() => {
  //if (!mutation.type.startsWith("user/")) return;
  //store.dispatch("user/update", mutation);
});

// store.dispatch("app/init");
// store.dispatch("user/checkAuth");

export default store;
