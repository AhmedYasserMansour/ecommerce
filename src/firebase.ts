import { initializeApp } from "firebase/app";
import { getDatabase, ref, query, orderByChild, equalTo, get , set, remove, push} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
  sendEmailVerification, fetchSignInMethodsForEmail } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyBtClSNx1i1oj7upvF-ufux5jUCeIXjHEc",
  authDomain: "e-commerce-59eb9.firebaseapp.com",
  databaseURL: "https://e-commerce-59eb9-default-rtdb.firebaseio.com",
  projectId: "e-commerce-59eb9",
  storageBucket: "e-commerce-59eb9.firebasestorage.app",
  messagingSenderId: "1093948521700",
  appId: "1:1093948521700:web:5c5875bb8f9c1381f300f1",
  measurementId: "G-J71EYQK2TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);
export { database, ref, query, orderByChild, equalTo, get, auth, createUserWithEmailAndPassword, getDatabase,
   signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, fetchSignInMethodsForEmail, set,
   remove, push};





