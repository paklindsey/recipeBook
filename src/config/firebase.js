// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4ppExI9UsbrveyWfz2N3F05ZpLTIhNA",
  authDomain: "recipe-book-1c7ea.firebaseapp.com",
  projectId: "recipe-book-1c7ea",
  storageBucket: "recipe-book-1c7ea.appspot.com",
  messagingSenderId: "1015080945410",
  appId: "1:1015080945410:web:834d914c25331be6fc641b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();