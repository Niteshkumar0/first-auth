import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAaEtXBBvAmqC_PYL45wOUcTo1P2or5Eeg",
  authDomain: "first-auth-project-20a4d.firebaseapp.com",
  projectId: "first-auth-project-20a4d",
  storageBucket: "first-auth-project-20a4d.appspot.com",
  messagingSenderId: "407730592479",
  appId: "1:407730592479:web:a522d38603b348f302a76a",
  measurementId: "G-JLWG7SGVYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export let auth = getAuth(app)