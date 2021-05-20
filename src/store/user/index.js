import { login, logout } from "../../services/authService";

export default {
  state: {
    user: null,
    errorLogin: null
  },
  mutations: {
    loginError(state, error) {
      state.errorLogin = error;
    },
    userLogged(state, user) {
      state.user = user;
    },
    userLoggedOut(state) {
      state.user = null;
    }
  },
  actions: {
    async loginUser({ commit }, { email, password, staySignedIn }) {
      try {
        const user = await login(email, password);
        console.log("user: ", user);
        commit("userLogged", user.user.uid);
        // commit("showMessage", {
        //   type: "success",
        //   message: "You logged in successfully"
        // });
        if (staySignedIn) localStorage.setItem("userId", user.user.uid);
        return "success";
      } catch (e) {
        commit("loginError", e);
        console.log("usererr: ", e);
        return "error";
      }
    },
    logOutUser({ commit }) {
      logout().then(mes => {
        //commit("showMessage", {
        //   type: "success",
        //   message: mes
        // });
        console.log("logoutMeess: ", mes);
        commit("userLoggedOut");
      });
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    }
  }
};
