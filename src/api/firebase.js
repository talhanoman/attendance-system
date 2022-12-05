// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRdDq_ahoG3eW5JwsG6aMphOKBN5bTuIY",
  authDomain: "attendance-ed24a.firebaseapp.com",
  databaseURL: "https://attendance-ed24a-default-rtdb.firebaseio.com",
  projectId: "attendance-ed24a",
  storageBucket: "attendance-ed24a.appspot.com",
  messagingSenderId: "347789307855",
  appId: "1:347789307855:web:0503b7201bd17b9662ecba",
  measurementId: "G-YQXV76ZJYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db }