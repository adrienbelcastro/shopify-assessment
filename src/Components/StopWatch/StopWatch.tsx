import React, { useRef, useState } from "react";
import StopWatchButton from "../StopWatchButtons/StopWatchButton";
import "./stopwatch.css";

interface Lap {
  number: number;
  duration: number;
}

export default function StopWatch() {
  //State used to keep track of current time
  const [time, setTime] = useState<number>(0);

  //State used to keep track of if the timer is currently on or not
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const [lapTimes, setLaptimes] = useState<Lap[]>([]);

  //Used to keep track of the intervalID from setInterval
  const intervalRef = useRef<NodeJS.Timeout | null>();

  //Used to keep track of the lap number
  const lapNumberRef = useRef<number>(1);

  //Function used to start the timer
  const startTimer = () => {
    console.log("Starting timer...");
    if (!timerOn) {
      intervalRef.current = setInterval(() => {
        console.log("Updating time...");
        setTime((time) => time + 50);
        console.log(time);
      }, 50);

      setTimerOn(true);
    }
    return time;
  };

  //Function used to stop the timer
  const stopTimer = () => {
    setTimerOn(false);
    clearInterval(intervalRef.current);
  };

  //Function used to reset the timer back to 0
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  //Function is called to use lap functionality
  const lapTimer = () => {
    console.log("Lap button clicked!");
    const lapDuration =
      time - (lapTimes.length > 0 ? lapTimes[lapTimes.length - 1].duration : 0);

    const lap: Lap = {
      number: lapNumberRef.current,
      duration: lapDuration,
    };
    setLaptimes((prevLapTimes) => [...prevLapTimes, lap]);
    lapNumberRef.current += 1;
  };

  //Function calls the start or stop timer function based on the timerOn/Off state
  const handleButtonClick = () => {
    if (timerOn) {
      stopTimer();
    } else {
      startTimer();
    }
  };
  const formatTime = (milliseconds: number): string => {
    // Seconds calculation
    const seconds = Math.floor(time / 1000);

    // Minutes calculation
    const minutes = Math.floor(seconds / 60);

    // Hours calculation
    const hours = Math.floor(minutes / 60);
    //Function to format the time to look like a timer
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}.${(
      milliseconds % 1000
    )
      .toString()
      .padStart(3, "0")}`;
    return formattedTime;
  };

  return (
    <div>
      <div className="stopwatch-container">
        <span className="stopwatch-time">{formatTime(time)}</span>
      </div>
      <div className="buttons-container">
        <StopWatchButton
          label={timerOn ? "Stop" : "Start"}
          onClick={handleButtonClick}
          className={timerOn ? "buttons-stop" : "buttons-start"}
        />
        <StopWatchButton
          label="Reset"
          onClick={resetTimer}
          className="button-reset"
        />
        <StopWatchButton
          label="Lap"
          onClick={lapTimer}
          className="button-lap"
        />
      </div>
      <h3 className="lap-title">Lap Times</h3>
      <div className="lap-container">
        <ol>
          {lapTimes.map((lap) => (
            <li className="lap-font" key={lap.number}>
              Lap {lap.number}: {formatTime(lap.duration)}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
