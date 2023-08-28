// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxR9HqEJZVpor9vRv64Ahw1IFt5yn5yLQ",
  authDomain: "react-auth-new-133bb.firebaseapp.com",
  projectId: "react-auth-new-133bb",
  storageBucket: "react-auth-new-133bb.appspot.com",
  messagingSenderId: "329014927223",
  appId: "1:329014927223:web:9704c3df2c9ecfc5430b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);