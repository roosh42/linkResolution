// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-VuFoP3q3CjhCbQmUXbVVOMj4RFnPHh4",
    authDomain: "hellofirebase-67e09.firebaseapp.com",
    projectId: "hellofirebase-67e09",
    storageBucket: "hellofirebase-67e09.firebasestorage.app",
    messagingSenderId: "6932419486",
    appId: "1:6932419486:web:11ab784acffced8d7c3c8f",
    measurementId: "G-5J7351G55P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);