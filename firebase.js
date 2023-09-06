
import {getAuth} from "firebase/auth";
import {getApp, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmvsMjUnaon3bBSyEIYvR80Xt7QAkDWa4",
  authDomain: "booking-project-a57d3.firebaseapp.com",
  projectId: "booking-project-a57d3",
  storageBucket: "booking-project-a57d3.appspot.com",
  messagingSenderId: "774796134745",
  appId: "1:774796134745:web:2c056131c4dff0e313a448"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};