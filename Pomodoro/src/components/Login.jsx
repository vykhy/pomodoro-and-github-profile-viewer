import React from "react";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

function Login({}) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider);

  return (
    <>
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
    </>
  );
}

export default Login;
