  // Your web app's Firebase configuration
  
  import * as firebase from "firebase/app";

// Add the Firebase products that you want to use

import "firebase/database";
  
  var firebaseConfig = {
    apiKey: "AIzaSyAleKiCrsUIEje8edZPy_XB25LnltLQU_w",
    authDomain: "budgetapp-af71d.firebaseapp.com",
    databaseURL: "https://budgetapp-af71d.firebaseio.com",
    projectId: "budgetapp-af71d",
    storageBucket: "",
    messagingSenderId: "531989662340",
    appId: "1:531989662340:web:c5a8f591509a1e816a90d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database= firebase.database();
export default database;