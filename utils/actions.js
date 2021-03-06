import { firebaseApp } from "./firebase";
import * as firebase from "firebase";
import "firebase/firestore";
const database = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
  let isLogged = false;
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      isLogged = false;
    } else {
      isLogged = true;
    }
  });
  return isLogged;
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};
