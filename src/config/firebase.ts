import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use

// import {...} from 'firebase/database';

// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjlmmETz92pMB9IMN-kpVucvm-HCxQcKs",
  authDomain: "smart-e-commerce-app-9c9a6.firebaseapp.com",
  projectId: "smart-e-commerce-app-9c9a6",
  storageBucket: "smart-e-commerce-app-9c9a6.firebasestorage.app",
  messagingSenderId: "356180449903",
  appId: "1:356180449903:web:7b9b405f5ea82447c54b9a"
};

const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
const db = getFirestore(app)
export {auth,db}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
