import firebase from "firebase/app";

export const checkAuth = () => {
  //return await firebase.auth().onAuthStateChanged(user => user);
  let userExist = null;
  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     return user;
  //   }
  //   return null
  // });

  firebase.auth().onAuthStateChanged(user => {
    if (user) userExist = user;
  });

  if (userExist) return userExist;
  else return null;

  // return userExist;
};

export const login = async (email, password) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve("You logged out"));
  });
};
