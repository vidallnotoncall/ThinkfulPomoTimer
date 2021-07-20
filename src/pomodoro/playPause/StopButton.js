import React from 'react'

function StopButton({onStop, isTimerRunning}) {
  return (
    
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      disabled={!isTimerRunning}
      onClick = {onStop}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
}

export default StopButton
