import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB9OLK35EeLzrN3SBmyvLwBJ-vjCu9RDf4",
  authDomain: "ecomm-website-db.firebaseapp.com",
  projectId: "ecomm-website-db",
  storageBucket: "ecomm-website-db.appspot.com",
  messagingSenderId: "128379407992",
  appId: "1:128379407992:web:1f378cb6410a929431e78d",
  measurementId: "G-NM2JBSHPY5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
