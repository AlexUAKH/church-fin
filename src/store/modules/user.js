//import firebase from "firebase";

import { signInOrUp } from "../../services/firebaseAuthService";

const state = {
  user: localStorage.getItem("userId") || null,
  errorLogin: null
};
const mutations = {
  loginError: (state, error) => {
    state.errorLogin = error;
  },
  userLogged: (state, user) => {
    state.user = user;
  },
  userLogout: state => {
    state.user = null;
  }
};
const actions = {
  loginUser: ({ commit }, { email, password }) => {
    return new Promise((resolve, reject) => {
      signInOrUp(email, password, "SIGN_IN")
        .then(user => {
          commit("userLogged", user.uid);
          resolve(user);
        })
        .catch(e => {
          commit("loginError", e);
          reject();
        });
    });
  },
  logout: ({ commit }) => {
    commit("userLogout");
  }
};
const getters = {
  isLoggedIn: state => {
    return !!state.user;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
