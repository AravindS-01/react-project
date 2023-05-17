// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUGwG_D4QndvuVY454M6g53l_regnQscg",
  authDomain: "react-redux-b9690.firebaseapp.com",
  databaseURL: "https://react-redux-b9690-default-rtdb.firebaseio.com",
  projectId: "react-redux-b9690",
  storageBucket: "react-redux-b9690.appspot.com",
  messagingSenderId: "91855703780",
  appId: "1:91855703780:web:b73fd0a7e9103c4f41e6f1",
  measurementId: "G-9YBK8DR79Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);