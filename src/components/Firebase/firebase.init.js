// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FeazO2x7g-ar540a8RAM7Sd-GHMgoPQ",
  authDomain: "film-fusion-6367d.firebaseapp.com",
  projectId: "film-fusion-6367d",
  storageBucket: "film-fusion-6367d.firebasestorage.app",
  messagingSenderId: "204858199911",
  appId: "1:204858199911:web:9f09ab2e0331e609b529c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export {auth}