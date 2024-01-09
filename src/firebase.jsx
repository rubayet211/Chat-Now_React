// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6pAcQyxypkCkqqiJxr5cJTKxwWrIFRg",
  authDomain: "chat-now-773c5.firebaseapp.com",
  projectId: "chat-now-773c5",
  storageBucket: "chat-now-773c5.appspot.com",
  messagingSenderId: "194988084292",
  appId: "1:194988084292:web:5b83f96c690783365b0011",
  measurementId: "G-S6J3HNH3T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth(app);
