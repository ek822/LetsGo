import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database

var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://letsgotravel-53eab.firebaseio.com"
});
(function() {
   // Web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyCmD_M4GQnrw6_2WyZelaj6FGleQ7c59uw",
    authDomain: "letsgotravel-53eab.firebaseapp.com",
    databaseURL: "https://letsgotravel-53eab.firebaseio.com",
    projectId: "letsgotravel-53eab",
    storageBucket: "letsgotravel-53eab.appspot.com",
    messagingSenderId: "499719168190",
    appId: "1:499719168190:web:c1992bb4197e0fd8487eef",
    measurementId: "G-74Y2R1CDKF"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
  //Add Signup Event
  btnSignUp.addEventListener('click', e => {
      // Get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //Sign In
      const promise = auth.SignInWithEmailAndPassword(email, pass);
      promise
      //.then(user => console.log(user))
      .catch(e => console.log(e.message));
  });
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log('not logged in');
      }
}());