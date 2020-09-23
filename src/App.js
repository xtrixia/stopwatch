import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialStopwatch = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [stopwatch, setStopwatch] = useState(initialStopwatch);

  const [isTicking, setIsTicking] = useState(false);

  const handleStart = () => {
    setIsTicking(true);
  };

  const handleReset = () => {
    setIsTicking(false);
    setStopwatch(initialStopwatch);
  };

  useEffect(() => {
    let interval = null;

    if (isTicking) {
      interval = setInterval(() => {
        let secs = stopwatch.seconds + 1;

        if (secs >= 60) {
          setStopwatch({
            ...stopwatch,
            seconds: 0,
            minutes: stopwatch.minutes + 1,
          });
        } else if (stopwatch.minutes >= 60) {
          setStopwatch({
            ...stopwatch,
            hours: stopwatch.hours + 1,
            minutes: 0,
          });
        } else {
          setStopwatch({
            ...stopwatch,
            seconds: secs,
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [stopwatch, isTicking]);

  return (
    <div className='App'>
      <div className='Paper'>
        <h1 className='Title'>
          told you it's <i style={{ color: "#f4f4" }}>just</i> a friggin'
          stopwatch
        </h1>
        <div className='Timer'>
          <h1 className='Time'>
            {stopwatch.hours}.{stopwatch.minutes}
          </h1>
          <h2 className='Counter'>{stopwatch.seconds}s</h2>
        </div>

        <div className='Actions'>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
