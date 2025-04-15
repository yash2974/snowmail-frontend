// frontend/src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// Your Firebase configuration object (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAUolx22RNHHS9irnWIDjhTg4HGQiI8Oug",
  authDomain: "lead-generator-b7ec1.firebaseapp.com",
  projectId: "lead-generator-b7ec1",
  storageBucket: "lead-generator-b7ec1.firebasestorage.app",
  messagingSenderId: "352052635711",
  appId: "1:352052635711:web:da5e88110d92132088f08a",
  measurementId: "G-1FF6NX2HYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const storage = getStorage(app);
// Initialize Google Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Apple Provider
const appleProvider = new OAuthProvider('apple.com'); // For Apple Sign-In

export { auth, googleProvider, appleProvider, storage };