import React, { useState } from "react";
import useInterval from "../../utils/useInterval";
import { secondsToDuration } from "../../utils/duration";
function SessionInfo({setSessionData, SessionData, isTimerRunning}) {
  const { focusDuration, breakDuration, isFocusing, isPaused } = SessionData;
  const [timeRemaining, setTimeRemaing] = useState(focusDuration);
  console.log(SessionData)


  let label = isFocusing ? "Focusing" : "On Break";
  let labelTime = isFocusing? focusDuration: breakDuration


  useInterval(
    () => {
      if (isPaused) {
        return;
      }
      if (timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        setSessionData({ ...SessionData, isFocusing: !isFocusing });
        isFocusing
          ? setTimeRemaing(focusDuration)
          : setTimeRemaing(breakDuration);

        return;
      }

      let newTime = timeRemaining - 1;
      setTimeRemaing(newTime);
    },
    isTimerRunning ? 1000 : null
  );

  if (!isTimerRunning){
    if (!isFocusing){
      setSessionData({...SessionData, isFocusing: true})
    }

    if (timeRemaining !== focusDuration){
      setTimeRemaing(focusDuration)
    }
  }

  let progress = 0;
  if (isFocusing) {
    progress = Math.round(
      ((focusDuration - timeRemaining) / focusDuration) * 100
    );
  } else {
    progress = Math.round(
      ((breakDuration - timeRemaining) / breakDuration) * 100
    );
  }

  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">{label} for {secondsToDuration(labelTime)} minutes</h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionInfo;
