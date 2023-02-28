import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyAnyaWkg6ip16rOdtc6X5PkUDLZaLs6Km4",
  authDomain: "tpw-development.firebaseapp.com",
  databaseURL: "https://tpw-development-default-rtdb.firebaseio.com/",
  projectId: "tpw-development",
  storageBucket: "tpw-development.appspot.com",
  messagingSenderId: "7529943881",
  appId: "1:7529943881:web:6805655368e5b167554098",
  measurementId: "G-5T5NMWMN04",
};

// Initialize firebase app
const app = initializeApp(firebaseConfig)

// Initialize firebase data store
const db = getFirestore(app)

export default db