import { fetchData, saveData } from "@/services/firebaseDataService";

const state = {
  records: []
};

const mutations = {
  setRecords: (state, records) => {
    state.records = [...records];
  }
};
const actions = {
  getRecords: ({ commit }) => {
    return new Promise((resolve, reject) => {
      fetchData()
        .then(res => {
          console.log("fetched data: ", res);
          if (res.status === 200) {
            const records = [];
            const rec = res.data;
            Object.keys(rec).forEach(recordId => {
              rec[recordId].id = recordId;
              records.push(rec[recordId]);
            });
            console.log("ftch: ", records);
            commit("setRecords", records);
            resolve();
          }
        })
        .catch(() => {
          reject();
        });
    });
  },
  saveRecords: () => {
    saveData();
  }
};

const getters = {
  isSnackVisible: state => {
    return state.records[0];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
