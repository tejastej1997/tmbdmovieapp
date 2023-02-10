// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIKc5IHRoQM7NBF-mV4HjWo1toZc8adAY",
  authDomain: "movie-application-69bc3.firebaseapp.com",
  projectId: "movie-application-69bc3",
  storageBucket: "movie-application-69bc3.appspot.com",
  messagingSenderId: "266096496502",
  appId: "1:266096496502:web:ae9d1a6ba563a2573bb457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);