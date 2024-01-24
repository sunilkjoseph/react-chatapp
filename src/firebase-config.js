import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBsE9rr0_19OMsS6aoxl9_v-m-R-M4o06s",
  authDomain: "chatapp-43c25.firebaseapp.com",
  projectId: "chatapp-43c25",
  storageBucket: "chatapp-43c25.appspot.com",
  messagingSenderId: "484928906094",
  appId: "1:484928906094:web:ab7f16c48e51498df1177f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);