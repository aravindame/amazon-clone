import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDlyFJr5rkXwZTidQBpI8eKgyZKDIx7D6M",
    authDomain: "clone-f63c5.firebaseapp.com",
    databaseURL: "https://clone-f63c5.firebaseio.com",
    projectId: "clone-f63c5",
    storageBucket: "clone-f63c5.appspot.com",
    messagingSenderId: "914634055505",
    appId: "1:914634055505:web:eefded3d0901a529007d70",
    measurementId: "G-GHSSK0DJZP"
  });

  const auth = firebase.auth();
 
  export {auth}