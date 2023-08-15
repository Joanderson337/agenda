import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAL0DJ5_RM0ym0Yt6Sc-TGRDjvoPSkfbnQ",
  authDomain: "teste-eb979.firebaseapp.com",
  projectId: "teste-eb979",
  storageBucket: "teste-eb979.appspot.com",
  messagingSenderId: "256175347618",
  appId: "1:256175347618:web:0c5e4e6d729d4e474504fb"
};

export const firebase = initializeApp(firebaseConfig);