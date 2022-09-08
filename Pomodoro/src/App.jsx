import React from "react";
import { initializeApp } from "firebase/app";
import { useUserContext } from "./contexts/userContext";
import Timer from "./components/Timer";
import Welcome from "./components/Welcome";
import {
  getRedirectResult,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyAW79VD4ntRV9l-CR_hTlnt_-pp6FT1DpM",
  authDomain: "portfolio-apps-cd8c0.firebaseapp.com",
  projectId: "portfolio-apps-cd8c0",
  storageBucket: "portfolio-apps-cd8c0.appspot.com",
  messagingSenderId: "877871904916",
  appId: "1:877871904916:web:e2879dd918825c364bdc81",
  measurementId: "G-8PK59VH9V6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

const App = () => {
  const { user, setNewUser } = useUserContext();
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setNewUser(user);
    } else {
      setNewUser(null);
    }
  });
  console.log(user);
  return <>{user ? <Timer user={user} /> : <Welcome />}</>;
};

export default App;
