import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBoDQBlvcOm2jZb1VBMPkdIgiBPUkC0ryQ",
    authDomain: "metacortexapp.firebaseapp.com",
    projectId: "metacortexapp",
    storageBucket: "metacortexapp.appspot.com",
    messagingSenderId: "510188547933",
    appId: "1:510188547933:web:bdbeddc33327314599c2b4"
  };

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase