# Metacortex TCC App - React Native

- npm install
- npm start (you can open iOS, Android, or web from here, or run them directly with the commands below.)
- npm run android
- npm run ios (requires an iOS device or macOS for access to an iOS simulator)
- npm run web



- AUTH

Create a Firebase.js file inside components and add the following

```
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_APP.firebaseapp.com,
    projectId: YOUR_APP,
    storageBucket: YOUR_APP.appspot.com,
    messagingSenderId: YOUR_SENDER_ID",
    appId: YOUR_APP_ID
  };

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
```




