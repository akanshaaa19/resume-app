import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzjum7JCEl7J1kTgJyHmCxZNM1XxLb7DI",
  authDomain: "resume-app-b0926.firebaseapp.com",
  projectId: "resume-app-b0926",
  storageBucket: "resume-app-b0926.appspot.com",
  messagingSenderId: "33797928546",
  appId: "1:33797928546:web:23ef02c7575eae2e72c33b",
  measurementId: "G-XYS9NQKHM2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db };
