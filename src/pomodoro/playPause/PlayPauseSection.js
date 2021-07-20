import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import StopButton from "./StopButton";
function PlayPauseSection({SessionData, isTimerRunning, onStart, onStop, onPause}) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <PlayPauseButton 
            SessionData = {SessionData}
            onStart = {onStart}
            onPause = {onPause}
            isTimerRunning = {isTimerRunning}
          />
          <StopButton 
            onStop = {onStop}
            isTimerRunning = {isTimerRunning}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayPauseSection;
