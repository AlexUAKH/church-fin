import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import i18n from "./i18n";
import "@/plugins/axios";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");

firebase.initializeApp(firebaseConfig);
