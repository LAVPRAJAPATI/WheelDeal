import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



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
export const auth = getAuth(app);
export const db = getFirestore(app);




