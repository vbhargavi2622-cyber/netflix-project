// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7xmoagl7XpJvKt7-zorRLibhod9moCi8",
  authDomain: "netfilxgpt-51ad5.firebaseapp.com",
  projectId: "netfilxgpt-51ad5",
  storageBucket: "netfilxgpt-51ad5.firebasestorage.app",
  messagingSenderId: "474995616183",
  appId: "1:474995616183:web:c91080c964022368e16032",
  measurementId: "G-YNC00HX4MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
