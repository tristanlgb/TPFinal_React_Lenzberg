// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAolfH6K_fq_WH5pkmr-EpW8hQdKVGKo08",
  authDomain: "tpfinal-react-c6c4d.firebaseapp.com",
  projectId: "tpfinal-react-c6c4d",
  storageBucket: "tpfinal-react-c6c4d.appspot.com",
  messagingSenderId: "184961640325",
  appId: "1:184961640325:web:e122b611251afe2aaec6ec",
  measurementId: "G-8CP71FT4RY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
