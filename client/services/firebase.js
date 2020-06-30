import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/functions";

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.firebase);
}
