import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu5ox0mCf6nMEQ-JOrHRJKgwVy9609iwA",
  authDomain: "globant-cv-builder.firebaseapp.com",
  projectId: "globant-cv-builder",
  storageBucket: "globant-cv-builder.appspot.com",
  messagingSenderId: "130852010137",
  appId: "1:130852010137:web:73756ece5584531f022008",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider, auth, signInWithRedirect, getRedirectResult };

export default db;
