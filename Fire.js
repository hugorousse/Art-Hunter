import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, addDoc, query, orderBy, onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  // Placez ici vos identifiants Firebase (SDK) - Cf. diapos 14 et 15
  apiKey: "AIzaSyDI9IvN1tPNpjLU4YkBX7UE9ELhh5aRqx0",
  authDomain: "art-hunter.firebaseapp.com",
  databaseURL: "https://art-hunter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "art-hunter",
  storageBucket: "art-hunter.appspot.com",
  messagingSenderId: "1013204360524",
  appId: "1:1013204360524:web:7049351866930cf89583e9",
  measurementId: "G-T558L2E4Y9"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getArtworks = callback => {
  const q = query(collection(db, 'artworks'), orderBy('title', 'asc'))
  onSnapshot(q, snapshot => {
    let artworks = []
    snapshot.forEach(doc => {
      artworks.push({ id: doc.id, ...doc.data() })
    })
    callback(artworks)
  })
}

export const addArtwork = artwork => {
  addDoc(collection(db, 'artworks'), artwork)
}

export const updateArtwork = artwork => {
  updateDoc(doc(db, 'artworks', artwork.id), artwork)
}

export const deleteArtwork = artwork => {
  deleteDoc(doc(db, 'artworks', artwork.id))
}


