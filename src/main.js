import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import i18n from "./i18n";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { firebaseConfig } from "./services/firebaseConfig";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");

// console.log("ppppp: ", this.$store.state.user.user);
// const user = checkAuth();
// if (user && user !== false) this.$store.state.user.user = user;
