import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAu_cyID70rbfzt8Kkj-PDngyH9n5o5FdA",
  authDomain: "booksbeyondwords-dev-48483.firebaseapp.com",
  databaseURL: "https://booksbeyondwords-dev-48483-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "booksbeyondwords-dev-48483",
  storageBucket: "booksbeyondwords-dev-48483.appspot.com",
  messagingSenderId: "134110197289",
  appId: "1:134110197289:web:d4c6878c45ce4e1826ce38",
};

firebase.initializeApp(config);

export default firebase.firestore();
