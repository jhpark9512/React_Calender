// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0WZIDrLbcoTlF0dOvYYZFtj1hmDnIbik",
  authDomain: "test-200ac.firebaseapp.com",
  projectId: "test-200ac",
  storageBucket: "test-200ac.appspot.com",
  messagingSenderId: "799985829962",
  appId: "1:799985829962:web:87faa8f781b67fbba97eb3",
  measurementId: "G-0W83PHMXVY"
};
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
export const db =getFirestore(app)
