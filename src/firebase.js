import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA96gEaHaZkmLsyiPmdFVwli0y6UrgOgac",
  authDomain: "phone-auth-c1947.firebaseapp.com",
  projectId: "phone-auth-c1947",
  storageBucket: "phone-auth-c1947.appspot.com",
  messagingSenderId: "644215179264",
  appId: "1:644215179264:web:8ccf1b274ab4aed236b0e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
