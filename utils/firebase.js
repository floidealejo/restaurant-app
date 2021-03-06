import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEPDldKe4VSacSLgX8NhfKdI8WeAD7BO8",
  authDomain: "restaurants-5a04d.firebaseapp.com",
  projectId: "restaurants-5a04d",
  storageBucket: "restaurants-5a04d.appspot.com",
  messagingSenderId: "441975374041",
  appId: "1:441975374041:web:bb4d734875314cbfdffec8",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
