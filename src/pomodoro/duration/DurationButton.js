import React from 'react'
import { secondsToDuration } from '../../utils/duration';

function DurationButton({SessionData, controlName, adjustDuration, min, max, minutes, step}) {
  const minMax = (newMinutes) => {
    if (newMinutes >= max){
      return max
    }
    if (newMinutes <= min){
      return min;
    }
  }
  return (    
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            {controlName} Duration: {secondsToDuration(minutes)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => {
                console.log("decrease focus");
                console.log(minutes);
                const newMinutes = minMax(minutes - step)
                adjustDuration({...SessionData, focusDuration: newMinutes});
              }}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => {
                console.log("increase focus");
                const newMinutes = minMax(minutes + step);
                adjustDuration({ ...SessionData, focusDuration: newMinutes });
              }}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
  );
}

export default DurationButton
