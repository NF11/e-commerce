import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZGrLNqDfJk0ulzaWPGRwxxUZ1tEMiuPA",
  authDomain: "e-comerce-db-57459.firebaseapp.com",
  databaseURL: "https://e-comerce-db-57459.firebaseio.com",
  projectId: "e-comerce-db-57459",
  storageBucket: "e-comerce-db-57459.appspot.com",
  messagingSenderId: "375412474722",
  appId: "1:375412474722:web:c237ca1f42c4ef7b25e23b",
  measurementId: "G-44V7JWQTMR",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
