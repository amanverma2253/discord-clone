import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCxUheuH4dHJv7Xt6QL9tUEcXrc-SXl2Ms",
  authDomain: "discord-clone-8680f.firebaseapp.com",
  projectId: "discord-clone-8680f",
  storageBucket: "discord-clone-8680f.appspot.com",
  messagingSenderId: "693265483334",
  appId: "1:693265483334:web:8e6c4c2a66a8130a64ec47",
  measurementId: "G-7FWF85PLQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider ,db };
export default db;
