import { firebaseApp } from "./firebase";
import * as firebase from "firebase";
import "firebase/firestore";
const database = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
  let isLogged = false;
  firebase.auth.onAuthStateChanged((user) => {
    if (user !== null) {
      return (isLogged = false);
    } else {
      return (isLogged = true);
    }
  });
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
