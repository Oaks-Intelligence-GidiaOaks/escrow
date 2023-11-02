import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7kf-C1zYDV8_Os1B65xN4NJv5RwKsB5w",
  authDomain: "contactform-850d8.firebaseapp.com",
  projectId: "contactform-850d8",
  storageBucket: "contactform-850d8.appspot.com",
  messagingSenderId: "149920434942",
  appId: "1:149920434942:web:fbd9f398764db3451af3af",
  measurementId: "G-83YDTHBHDZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
