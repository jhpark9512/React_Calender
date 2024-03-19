// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx7DeklJM1Hd7NkUOaIsQtPyFmGKjtlgs",
  authDomain: "myapp-3ed68.firebaseapp.com",
  databaseURL: "https://myapp-3ed68-default-rtdb.firebaseio.com",
  projectId: "myapp-3ed68",
  storageBucket: "myapp-3ed68.appspot.com",
  messagingSenderId: "94875183966",
  appId: "1:94875183966:web:d82be98639e8a09580fdcf",
  measurementId: "G-WLGDFK0SJL"
};
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
export const db =getFirestore(app)
