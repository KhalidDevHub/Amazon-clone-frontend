import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChvA03xv8HAd9zies0AU1WPP78Q98OO1o",
  authDomain: "clone-c9bf9.firebaseapp.com",
  projectId: "clone-c9bf9",
  storageBucket: "clone-c9bf9.firebasestorage.app",
  messagingSenderId: "1034734019141",
  appId: "1:1034734019141:web:2631ba1598861b7f09f92c"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();