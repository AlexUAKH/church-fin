import Vue from "vue";
import axios from "axios";

const instance = axios.create({
  //baseURL: [YOUR BASE URL],
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

const token = localStorage.getItem("userId");

if (token) {
  instance.defaults.headers.common["Authorization"] = token;
}

instance.interceptors.response.use(undefined, function(err) {
  return new Promise(function() {
    if (err.response.status === 403 || err.response.status === 401) {
      localStorage.removeItem("userId");
      // alert('error');
      window.location.href = "/";
    }
    throw err;
  });
});

Vue.prototype.$axios = instance;

export default instance;
