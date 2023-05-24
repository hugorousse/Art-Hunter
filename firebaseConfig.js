import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDI9IvN1tPNpjLU4YkBX7UE9ELhh5aRqx0",
    authDomain: "art-hunter.firebaseapp.com",
    databaseURL: "https://art-hunter-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "art-hunter",
    storageBucket: "art-hunter.appspot.com",
    messagingSenderId: "1013204360524",
    appId: "1:1013204360524:web:7049351866930cf89583e9",
    measurementId: "G-T558L2E4Y9"
  };

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Exporter la référence à la base de données Firebase
export const database = firebase.database();
const dbRef = firebase.database().ref();

export const fetchArtworks = async () => {
  try {
    const snapshot = await dbRef.child('artworks').get();
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des œuvres d\'art :', error);
    return null;
  }
};