import firebase from "firebase/app";
import "firebase/database";

export const signInOrUp = (email, password, action = "SIGN_UP") => {
  return new Promise((resolve, reject) => {
    if (action === "SIGN_UP") {
      firebase
        .auth()
        //.createUserWithEmailAndPassword(email, password)
        .createUserWithEmailAndPassword("sdfg@dfverg.yh", "aaaaaaa")
        .then(res => resolve(res.user))
        .catch(err => reject(err));
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => resolve(res.user))
        .catch(err => reject(err));
    }
  });
};

export const resetPassword = email => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => resolve())
      .catch(err => reject(err));
  });
};

export const saveUserData = (userData, userId) => {
  return firebase
    .database()
    .ref("users/" + userId)
    .set(userData);
};

export const logout = () => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve("You logged out"));
  });
};
