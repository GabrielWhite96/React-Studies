import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANcOcl0ElD0Vh7pQVmUB0OZ5dmtzA3IpA",
  authDomain: "edfic-307a6.firebaseapp.com",
  projectId: "edfic-307a6",
  storageBucket: "edfic-307a6.appspot.com",
  messagingSenderId: "910746012259",
  appId: "1:910746012259:web:6f9c8c9e5de337b9f0c656",
  measurementId: "G-3QPXN90669",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
