// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPsL-E9p7rXDop7ocBP1geaOqlO4iQJHc",
  authDomain: "first-auth-1856c.firebaseapp.com",
  projectId: "first-auth-1856c",
  storageBucket: "first-auth-1856c.appspot.com",
  messagingSenderId: "852642818793",
  appId: "1:852642818793:web:a9f1c9cc22750e005e1e78",
  measurementId: "G-FSPCY4QQHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let auth = getAuth(app)
let provider = new GoogleAuthProvider()

export {auth,provider}