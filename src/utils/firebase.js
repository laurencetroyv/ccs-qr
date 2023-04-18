// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTJrPC01-T9BVpKXMZCfBidXvB2I5FlxU",
  authDomain: "msu-ec.firebaseapp.com",
  projectId: "msu-ec",
  storageBucket: "msu-ec.appspot.com",
  messagingSenderId: "235493787272",
  appId: "1:235493787272:web:f1a57b8b6e34a78668c13d",
  measurementId: "G-M9H77T8WLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);