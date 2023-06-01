// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDANonqMFKpSYKrEefLNAigMHYUvKb0sv4",
  authDomain: "danish-gcp.firebaseapp.com",
  projectId: "danish-gcp",
  storageBucket: "danish-gcp.appspot.com",
  messagingSenderId: "254971206162",
  appId: "1:254971206162:web:2a79294d5625033a0116cb",
  measurementId: "G-TGG9GWPBNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)