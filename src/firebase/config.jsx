import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqa3XfHOtFwTYvuE86AkGdhnvOro-iWw4",
  authDomain: "neetflix-ac65a.firebaseapp.com",
  projectId: "neetflix-ac65a",
  storageBucket: "neetflix-ac65a.firebasestorage.app",
  messagingSenderId: "506929394669",
  appId: "1:506929394669:web:009d7030e3bdcc3689ede4"
};

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)
export const db = getFirestore(app);