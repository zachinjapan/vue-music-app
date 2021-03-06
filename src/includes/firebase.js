import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwp5ZIuhP4udLUok7koMLzNDaFMpD-Nvk",
  authDomain: "vue-music-app-47093.firebaseapp.com",
  projectId: "vue-music-app-47093",
  storageBucket: "vue-music-app-47093.appspot.com",
  messagingSenderId: "1065917926293",
  appId: "1:1065917926293:web:329c96c9a3cae55c4b049c",
  measurementId: "G-DPNR6YD5JV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// firebase keep the data locally
db.enablePersistence().catch((err) => {
  console.log("firebase persistence error", err);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
  commentsCollection,
};
