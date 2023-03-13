// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsNNnSA12CpZ7hHDeYpren54zlR_nEItU",
    authDomain: "blog-13b9c.firebaseapp.com",
    projectId: "blog-13b9c",
    storageBucket: "blog-13b9c.appspot.com",
    messagingSenderId: "861373761567",
    appId: "1:861373761567:web:6ac517013e102f8ec1ed2a",
    measurementId: "G-DQ24D0QJYJ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);