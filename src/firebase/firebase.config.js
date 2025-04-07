// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSvMEk78d0ipgPuj_uyaH4qPm-HAnoPaQ",
  authDomain: "home-tutor-e5133.firebaseapp.com",
  projectId: "home-tutor-e5133",
  storageBucket: "home-tutor-e5133.firebasestorage.app",
  messagingSenderId: "796452288559",
  appId: "1:796452288559:web:0f5e693fe23d9d04d5aeda",
  measurementId: "G-LBX0QQDTH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)