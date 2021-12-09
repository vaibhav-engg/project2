import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState("");
  const [Start, setStart] = useState(false);
  const [Pause, setPause] = useState(false);

  const handleStart = () => {   //start coundown
    setStart(true);
    setPause(false);
  };

  const handlePause = () => {   //Pause countdown
    setPause(!Pause);
  };

  const DisplayTime = () => {     // for Dispalying the Timer
    const Seconds = `0${time}`;
    return ` ${Seconds}`;
  };

  useEffect(() => {        //Operations
    let interval = null;
    let count = time;

    if (Start && !Pause) {
      interval = setInterval(() => {
        if (count > 0) {
          count = count - 1;
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(interval);

          setTimeout(() => {
            setStart(false);
          }, 1000);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [Start, Pause]);

  return (
    <div>
      <h1>CountDown Begins</h1>
      {!Start && (
        <input
          type="number"
          value={time}
          onChange={(a) => setTime(a.target.value)}
        ></input>
      )}

      <button onClick={handleStart}>Begin</button>
      <button onClick={handlePause}>Pause</button>

      {Start && <h1>LEft Time : {DisplayTime()}</h1>}
      {time == 0 && Start && alert("countdown ended")}
    </div>
  );
};

export default CountdownTimer;
