/* eslint-disable import/no-anonymous-default-export */
 
 
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
 
 

const firebaseConfig = {
    apiKey: "AIzaSyDpgQBOhnu9IyeZ4Nt5aWOEFNKCAsbTXUQ",
    authDomain: "jobproject-95283.firebaseapp.com",
    projectId: "jobproject-95283",
    storageBucket: "jobproject-95283.appspot.com",
    messagingSenderId: "160927726816",
    appId: "1:160927726816:web:501c9b7a0113ebbeede485"
  };

//This special line of code here connects everything
 
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  //gets the firestore database
  // const db = app.firestore();
   
  var db= firebase.firestore()
  //  database = firebase.database();
  const analytics = getAnalytics(app);


  //we want firebase authntication

const auth=firebase.auth()
  export default {db,auth}



