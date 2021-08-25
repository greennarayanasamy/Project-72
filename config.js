import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";

var  firebaseConfig = {
  apiKey: "AIzaSyDUmLtXdTSoeKbFzuB7t0VimuYiyRNGPj4",
  authDomain: "project-71-65e27.firebaseapp.com",
  projectId: "project-71-65e27",
  storageBucket: "project-71-65e27.appspot.com",
  messagingSenderId: "375332482011",
  appId: "1:375332482011:web:bd123e9dada5f8b78cd5fe"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

