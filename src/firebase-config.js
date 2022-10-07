import { initializeApp } from "firebase/app";
import  { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAF-ghRv1Zd4jIA7-zkHuaI3nbhnLqw8mk",
    authDomain: "fir-tutorial-f0fbb.firebaseapp.com",
    projectId: "fir-tutorial-f0fbb",
    storageBucket: "fir-tutorial-f0fbb.appspot.com",
    messagingSenderId: "991974376593",
    appId: "1:991974376593:web:0edf2cec25d9cc208bab30",
    measurementId: "G-9HL37YW33H"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);