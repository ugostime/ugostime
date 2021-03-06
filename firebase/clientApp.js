import { initializeApp } from "firebase/app";
import * as firebase  from "firebase/app";
import {getAuth} from "firebase/auth";

import { getFirestore } from 'firebase/firestore'
//import { getApps } from "firebase/app";
//import  "firebase/firestore";
//import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)  
  export const auth = getAuth(app);
  export default firebase;
  //export default firebase;
 /*
  if (!getApps().length) {
    firebase.initializeApp(firebaseConfig);
  }  
  //export const auth = getAuth();
  export default firebase;*/