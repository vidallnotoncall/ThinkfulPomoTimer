import React from "react";
import classNames from "../../utils/class-names/index"
function PlayPauseButton({isTimerRunning, onStart, onPause}) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="play-pause"
      title="Start or pause timer"
      onClick={() => {
        console.log("play button pressed");        
        console.log(isTimerRunning);
        if (!isTimerRunning){
          onStart();
        }
        if (isTimerRunning){
          onPause();
        }
      }}
    >
      <span
        className={classNames({
          oi: true,
          "oi-media-play": !isTimerRunning,
          "oi-media-pause": isTimerRunning,
        })}
      />
    </button>
  );
}

export default PlayPauseButton;
