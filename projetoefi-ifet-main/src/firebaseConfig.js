import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqC2UNDbPjFsPXOf8r2D0RNDuPv4iNG5A",
  authDomain: "projetoefi-ifet.firebaseapp.com",
  projectId: "projetoefi-ifet",
  storageBucket: "projetoefi-ifet.appspot.com",
  messagingSenderId: "982546641301",
  appId: "1:982546641301:web:15a419201da9c8fe0e069c",
  measurementId: "G-TC23PJKK8J"
};

const app = initializeApp(firebaseConfig);

//Para usar o Firetore
const db = getFirestore(app);

//para fazer autenticacao
const auth = getAuth(app);

export { db, auth };
