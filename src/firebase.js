import firebase from 'firebase/app';

import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDV1EBgP3vibuIvpyuroKNJ1l2wqKL-F98",
  authDomain: "rosa-cherto.firebaseapp.com",
  databaseURL: "https://rosa-cherto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rosa-cherto",
  storageBucket: "rosa-cherto.appspot.com",
  messagingSenderId: "100705665838",
  appId: "1:100705665838:web:2ef402dc183b426c6e30bf"
};
 const fb = firebase.initializeApp(firebaseConfig);


export const db = fb.database();