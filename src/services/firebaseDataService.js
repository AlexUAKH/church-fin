//import firebase from "firebase/app";
import "firebase/database";
import axios from "../plugins/axios";

const BASE_URL =
  "https://church-fin-default-rtdb.europe-west1.firebasedatabase.app/";
const DATA_URL = BASE_URL + "data";

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    //setTimeout(() => resolve(mokeData), 4000);
    axios
      .get(DATA_URL)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};

export const saveData = data => {
  return new Promise((resolve, reject) => {
    const url = `${DATA_URL}.json`;
    axios
      .post(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};

export const deleteData = id => {
  console.log("deleteData: ", id);
};

// const mokeData = [
//   {
//     date: "1.02.21",
//     title: "Church offering",
//     act: "add",
//     uah: 12000,
//     usd: "",
//     eur: 240
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     act: "dec",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   },
//   {
//     date: "5.02.21",
//     title: "Rent",
//     uah: 19000,
//     usd: 100,
//     eur: ""
//   }
// ];
