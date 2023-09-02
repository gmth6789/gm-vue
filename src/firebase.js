// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Btcs3XFMNsXvEeWo95B2KolBtUhOahE",
  authDomain: "gm-auth-86ffa.firebaseapp.com",
  projectId: "gm-auth-86ffa",
  storageBucket: "gm-auth-86ffa.appspot.com",
  messagingSenderId: "219119742173",
  appId: "1:219119742173:web:3af74880b295c23e0b7f34",
  measurementId: "G-LF39FCZW22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};