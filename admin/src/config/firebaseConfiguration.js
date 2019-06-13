import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAJ2bCJdXcWhhWFqAezXo7hCwlU1IeyTA",
    authDomain: "blockchain-timberscm-cps.firebaseapp.com",
    databaseURL: "https://blockchain-timberscm-cps.firebaseio.com",
    projectId: "blockchain-timberscm-cps",
    storageBucket: "blockchain-timberscm-cps.appspot.com",
    messagingSenderId: "21763576512"
  };
  firebase.initializeApp(config);

  export const db = firebase.database();
  export const auth = firebase.auth();
