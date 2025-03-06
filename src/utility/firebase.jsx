import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgoDbcGLOvLHo6MJLE5z89PrVu9VECvw",
  authDomain: "fir-e9d6c.firebaseapp.com",
  projectId: "fir-e9d6c",
  storageBucket: "fir-e9d6c.firebasestorage.app",
  messagingSenderId: "108625881826",
  appId: "1:108625881826:web:c192eb0ee5ae3b14790cbb",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();