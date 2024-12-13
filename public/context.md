Setup for firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBctSyIvIddgwtRZnIGzCfvyI4gthGF2zw",
  authDomain: "prm-with-ai-tools.firebaseapp.com",
  projectId: "prm-with-ai-tools",
  storageBucket: "prm-with-ai-tools.firebasestorage.app",
  messagingSenderId: "128217008785",
  appId: "1:128217008785:web:231b63005cd6f31747cd30",
  measurementId: "G-NW762EYVL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

