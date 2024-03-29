import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPv6hDCS4nV8tvZWlkBK4UNlW0VHd0pOw",
  authDomain: "blogproject-1.firebaseapp.com",
  projectId: "blogproject-1",
  storageBucket: "blogproject-1.appspot.com",
  messagingSenderId: "679016317740",
  appId: "1:679016317740:web:630a9ad07624a7127ba289",
  measurementId: "G-Z8RN6KZ7Y6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
