import { useState, useEffect } from "react";
import SignOut from "./SignOut";

function Timer({ user }) {
  const minuteStart = 25;
  const secondsStart = 0;
  const [minutes, setMinutes] = useState(minuteStart);
  const [seconds, setSeconds] = useState(secondsStart);
  const [isPaused, setIsPaused] = useState(true);
  const [isBreak, setIsBreak] = useState(false);

  const handlePause = () => {
    setIsPaused((prev) => !prev);
    // even if its paused, play function will handle it internally
    play();
  };
  const handleReset = () => {
    setIsPaused(true);
    setMinutes(minuteStart);
    // putting this in a setTimeOut so that it resets
    // after the last interval call on second update has run
    setTimeout(() => {
      setSeconds(secondsStart);
    }, 1000);

    setIsBreak(false);
  };

  function play() {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (isPaused) return;
      if (seconds === 0) {
        setSeconds(59);
        if (minutes !== 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(isBreak ? 25 : 4);
          setIsBreak((prev) => !prev);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }
  useEffect(() => {
    play();
  }, [seconds, play]);

  return (
    <>
      <div className="head">
        <div className="name">{user?.displayName}</div>
        <SignOut />
      </div>

      <div className="container">
        <div className="inner-container">
          {isBreak && (
            <h1 className="break-heading">
              Take a break champ! Break remaining:
            </h1>
          )}
          <br />
          <div className="time">
            {minutes > 9 ? `${minutes}` : `0${minutes}`}:
            {seconds > 9 ? `${seconds}` : `0${seconds}`}
          </div>
          <br />
          <br />
          <div className="buttons">
            <button className="pauseBtn" onClick={handlePause}>
              {isPaused
                ? minutes === minuteStart
                  ? "Start"
                  : "Resume"
                : "Pause"}
            </button>
            <button className="resetBtn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
