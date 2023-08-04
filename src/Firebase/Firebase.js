// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo7X2GZjAv3nh9jP6KWtBP1atpW8O0Vhs",
  authDomain: "fir-project-d59e1.firebaseapp.com",
  databaseURL: "https://fir-project-d59e1-default-rtdb.firebaseio.com",
  projectId: "fir-project-d59e1",
  storageBucket: "fir-project-d59e1.appspot.com",
  messagingSenderId: "1003942157250",
  appId: "1:1003942157250:web:47509c7d03a9dd2916545b",
  measurementId: "G-JSP4R5BRNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)