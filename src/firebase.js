import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAFDYDOMswdFvFvMvFjBwr6IkerwKkOvXQ",
  authDomain: "foodorder-5fdfd.firebaseapp.com",
  databaseURL: "https://cityapp-beb19-default-rtdb.firebaseio.com",
  projectId: "foodorder-5fdfd",
  storageBucket: "foodorder-5fdfd.appspot.com",
  messagingSenderId: "754865992677",
  appId: "1:754865992677:web:81941c0e2707e1d48f750c",
  measurementId: "G-9ZCR3FLZQM"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
