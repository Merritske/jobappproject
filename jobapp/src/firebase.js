/* eslint-disable import/no-anonymous-default-export */
 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
  
  
//createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {// Signed in const user = userCredential.user;// ...}).catch((error) => {const errorCode = error.code;const errorMessage = error.message;// ..});
 

const firebaseConfig = {
    apiKey: "AIzaSyDpgQBOhnu9IyeZ4Nt5aWOEFNKCAsbTXUQ",
    authDomain: "jobproject-95283.firebaseapp.com",
    projectId: "jobproject-95283",
    storageBucket: "jobproject-95283.appspot.com",
    messagingSenderId: "160927726816",
    appId: "1:160927726816:web:501c9b7a0113ebbeede485"
  };

//This special line of code here connects everything
 
   


// const auth =firebase.auth();
// export {auth};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
export default firebase;