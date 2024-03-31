import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg26xSkiOpAZUgkv6saGtyRvFiIMagmeI",
  authDomain: "dogbreeddetection-f3e9e.firebaseapp.com",
  projectId: "dogbreeddetection-f3e9e",
  storageBucket: "dogbreeddetection-f3e9e.appspot.com",
  messagingSenderId: "418192037269",
  appId: "1:418192037269:web:8f9ef751b1136ab555d29c",
  measurementId: "G-CDH9V1T6GL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
