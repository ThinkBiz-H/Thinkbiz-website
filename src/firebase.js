// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANvxjs0pG6XgUJb4GsKPly_wrhyWwqK5U",
  authDomain: "thinkbiz-project-688e9.firebaseapp.com",
  databaseURL: "https://thinkbiz-project-688e9-default-rtdb.firebaseio.com",
  projectId: "thinkbiz-project-688e9",
  storageBucket: "thinkbiz-project-688e9.appspot.com",
  messagingSenderId: "629620648316",
  appId: "1:629620648316:web:d9c0e9a5c31f63d7451cf9",
  measurementId: "G-Q9SFGP02XJ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
