// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCllFlovH5sat54b-mQoRjiDtCG-MZFOG4",
  authDomain: "my-portfolio-website-5d152.firebaseapp.com",
  projectId: "my-portfolio-website-5d152",
  storageBucket: "my-portfolio-website-5d152.appspot.com",
  messagingSenderId: "342073003540",
  appId: "1:342073003540:web:ae98e1985e28a22c092101",
  measurementId: "G-QHSSKZWELJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);