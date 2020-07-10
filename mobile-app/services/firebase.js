import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBls1Eas49-KbR-FHBM1HekklG_YfXsYbg",
  authDomain: "tiny-task-1c1a2.firebaseapp.com",
  databaseURL: "https://tiny-task-1c1a2.firebaseio.com",
  projectId: "tiny-task-1c1a2",
  storageBucket: "tiny-task-1c1a2.appspot.com",
  messagingSenderId: "499226770163",
  appId: "1:499226770163:web:276549de37c8f28dff5586",
  measurementId: "G-R0D6CKNWH8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
