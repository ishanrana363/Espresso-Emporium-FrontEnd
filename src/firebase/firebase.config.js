// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxmTX4gegj8vjjJxLBjYUYp3AKeE2KyY",
  authDomain: "espresso-emporium-a84bf.firebaseapp.com",
  projectId: "espresso-emporium-a84bf",
  storageBucket: "espresso-emporium-a84bf.firebasestorage.app",
  messagingSenderId: "458595304708",
  appId: "1:458595304708:web:74c0d478ed25324e6c7c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;