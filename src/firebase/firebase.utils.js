import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHdMUT4pobYDbQ8HbxC8BuF1c31CbBe80",
    authDomain: "ztm-crwn-b60f0.firebaseapp.com",
    projectId: "ztm-crwn-b60f0",
    storageBucket: "ztm-crwn-b60f0.appspot.com",
    messagingSenderId: "926376284206",
    appId: "1:926376284206:web:cfe2cc66d65ef70b5dcfbf",
    measurementId: "G-92JTBQ2NM8"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

