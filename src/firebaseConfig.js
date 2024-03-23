// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Pae8ozv-fUZXE543Xg0hAzxJ3VGROTU",
    authDomain: "tinta-virtual.firebaseapp.com",
    projectId: "tinta-virtual",
    storageBucket: "tinta-virtual.appspot.com",
    messagingSenderId: "132371513191",
    appId: "1:132371513191:web:26cabfaccd1a6c709a79c2",
    measurementId: "G-ZEV3FDTTEX"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )