import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCweZvZ9ow6f4anKPnoYghrph1u2yESJJg",
    authDomain: "twitter-clone-15bf1.firebaseapp.com",
    projectId: "twitter-clone-15bf1",
    storageBucket: "twitter-clone-15bf1.appspot.com",
    messagingSenderId: "950855897781",
    appId: "1:950855897781:web:9e268392a8c23403f1e4fc",
    measurementId: "${config.measurementId}"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db;