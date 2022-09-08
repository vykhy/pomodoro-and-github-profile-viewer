import React, { useState } from "react";
import Login from "./Login";

function Welcome() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="inner-container">
        <div className="welcome">
          {" "}
          Pomodoro Timer <br />
          <br />
          Welcome. Please sign in to continue.
        </div>
        <br />
        {show ? (
          <Login />
        ) : (
          <div className="buttons">
            <button className="logoutBtn" onClick={() => setShow(true)}>
              Log in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
