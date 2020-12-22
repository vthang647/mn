
import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAeYzLePn68Jlcv8Fe0bALW1G-CnzLoVBo",
    authDomain: "fir-pizza-planet.firebaseapp.com",
    databaseURL: "https://fir-pizza-planet.firebaseio.com",
    projectId: "fir-pizza-planet",
    storageBucket: "",
    messagingSenderId: "111112005882"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref("menu")
  export const dbOrdersRef = db.ref("orders")