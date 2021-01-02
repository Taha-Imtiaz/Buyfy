import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

//how firebase identify we are using wallet tracker app

var firebaseConfig = {
  apiKey: "AIzaSyAPLlaqMoY7q7T8U7RdI69B6kUGE4jbRqY",
  authDomain: "buyfy-8b8af.firebaseapp.com",
  databaseURL: "https://buyfy-8b8af.firebaseio.com",
  projectId: "buyfy-8b8af",
  storageBucket: "buyfy-8b8af.appspot.com",
  messagingSenderId: "1020361365908",
  appId: "1:1020361365908:web:dd15bba1c56f1f273bd781"
};

  firebase.initializeApp(firebaseConfig)

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider =new firebase.auth.GoogleAuthProvider();
//get server time on the spot.
export var serverTimestamp = ()=> firebase.firestore.FieldValue.serverTimestamp()
export default firebase;


