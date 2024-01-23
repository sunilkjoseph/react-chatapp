import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyCoGIgqcv1JIeInezP49-D0Vhnd54k_n24",
//   authDomain: "e-blah.firebaseapp.com",
//   projectId: "e-blah",
//   storageBucket: "e-blah.appspot.com",
//   messagingSenderId: "104684165785",
//   appId: "1:104684165785:web:cd42ff3217c5b892dc7608",
//   measurementId: "G-DSD8CSKZ1M"
// };

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