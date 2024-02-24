// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxwzyuKyV7kKVo_y4rbM_r74IbKRrQ9o",
  authDomain: "agnithon.firebaseapp.com",
  databaseURL: "https://agnithon-default-rtdb.firebaseio.com",
  projectId: "agnithon",
  storageBucket: "agnithon.appspot.com",
  messagingSenderId: "297705281529",
  appId: "1:297705281529:web:45e99b2e5717c0fbef4f28",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
