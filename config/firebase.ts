// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjnclpr3eEWPg5sI5VJ-tkdvcJr4SOzcg",
  authDomain: "vocsblog.firebaseapp.com",
  projectId: "vocsblog",
  storageBucket: "vocsblog.appspot.com",
  messagingSenderId: "726491324151",
  appId: "1:726491324151:web:dec05993212781d7ccfdf2",
  measurementId: "G-CSKBGPB433",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
