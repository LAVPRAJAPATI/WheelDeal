import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfUYxhiXyz-7RFUhGzusZUc-_KXlaxBA",
  authDomain: "wheel-deal-2b204.firebaseapp.com",
  databaseURL: "https://wheel-deal-2b204-default-rtdb.firebaseio.com",
  projectId: "wheel-deal-2b204",
  storageBucket: "wheel-deal-2b204.firebasestorage.app",
  messagingSenderId: "182400207139",
  appId: "1:182400207139:web:1ca261056f20e700b6e496"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };