// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxFyPyxpldYt0q7zZoeUjB9DyQaiYZ-WY",
  authDomain: "netflix-gtp-2026.firebaseapp.com",
  projectId: "netflix-gtp-2026",
  storageBucket: "netflix-gtp-2026.firebasestorage.app",
  messagingSenderId: "43513086169",
  appId: "1:43513086169:web:4cc29f666b9f5e8463fec8",
  measurementId: "G-FX1PPH43XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app, analytics };