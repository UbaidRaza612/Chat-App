// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0zBd1Td6wa_f-jcUmcyaNYYpnhb12Hbg",
  authDomain: "chat-app-de132.firebaseapp.com",
  projectId: "chat-app-de132",
  storageBucket: "chat-app-de132.firebasestorage.app",
  messagingSenderId: "456281892415",
  appId: "1:456281892415:web:fc88d39890dcd443c57a8a",
  measurementId: "G-GKZY8L9KF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);;