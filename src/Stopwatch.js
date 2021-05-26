import React, { useEffect, useState, useRef } from "react";

import "./App.css";

function Stopwatch() {
  const timerRef = useRef();
  const [seconds, setSeconds] = useState(0);

  const [isTicking, setIsTicking] = useState(false);

  const handleReset = () => {
    setIsTicking(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (isTicking) {
      // start interval
      timerRef.current = setInterval(
        () => setSeconds((seconds) => seconds + 1),
        1000
      );
    } else {
      clearInterval(timerRef.current);
    }
  }, [isTicking]);

  useEffect(() => {
    // clear the interval on before unmount
    return () => clearInterval(timerRef.current);
  }, []);

  let [h, m, s] = secondToTime(seconds);

  return (
    <div className="App">
      <div className="Paper">
        <h1 className="Title">
          told you it's <i style={{ color: "#f4f4" }}>just</i> a friggin'
          stopwatch
        </h1>

        <div className="Timer">
          <h1 className="Time">{`${h}.${m}`}</h1>
          <h2 className="Counter">{`${s}s`}</h2>
        </div>

        <div className="Actions">
          <button onClick={() => setIsTicking(!isTicking)}>
            {isTicking ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;

const secondToTime = (seconds) => {
  let h = Math.floor(seconds / 3600);
  let modH = seconds % 3600;
  let m = Math.floor(modH / 60);
  let s = modH % 60;

  return [h, m, s];
};
