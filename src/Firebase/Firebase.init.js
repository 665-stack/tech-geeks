// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYymsLmGpkyard3EtJlHO7ICmb8-Xin_A",
    authDomain: "tech-geeks-42bf0.firebaseapp.com",
    projectId: "tech-geeks-42bf0",
    storageBucket: "tech-geeks-42bf0.appspot.com",
    messagingSenderId: "86787570155",
    appId: "1:86787570155:web:2262dc8f3dffcf4dd0c1ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;