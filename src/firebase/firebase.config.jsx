// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

/*  apiKey: "AIzaSyC-eamMN5aMMvyyyXw57H2cbC48UTK6bjw",
  authDomain: "fastoffice-624ca.firebaseapp.com",
  projectId: "fastoffice-624ca",
  storageBucket: "fastoffice-624ca.firebasestorage.app",
  messagingSenderId: "168482588175",
  appId: "1:168482588175:web:f67b9bcc14d772a60a857a"*/
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;