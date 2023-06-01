import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
  // Configurações do Firebase
  apiKey: "AIzaSyAvCZSx-mT3ikpyTew6rwnK1iNDE6tFaME",
  authDomain: "facebook-clone4543468.firebaseapp.com",
  projectId: "facebook-clone4543468",
  storageBucket: "facebook-clone4543468.appspot.com",
  messagingSenderId: "577876431120",
  appId: "1:577876431120:web:65f4b4bc4490a4333e1595"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const functions = firebaseApp.functions();

export { db, auth, storage, functions };
