import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // si vous utilisez Cloud Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDI9IvN1tPNpjLU4YkBX7UE9ELhh5aRqx0",
  authDomain: "art-hunter.firebaseapp.com",
  projectId: "art-hunter",
  storageBucket: "art-hunter.appspot.com",
  messagingSenderId: "1013204360524",
  appId: "1:1013204360524:web:7049351866930cf89583e9",
  measurementId: "G-T558L2E4Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Vous pouvez maintenant utiliser 'db' et 'storage' pour interagir avec Firestore et Firebase Storage

firebase.initializeApp(firebaseConfig);

export default db;