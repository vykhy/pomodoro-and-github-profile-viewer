import React from "react";
import { getAuth, signOut } from "firebase/auth";

function SignOut() {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then((data) => console.log(data));
  };

  return (
    <button className="logoutBtn" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOut;
