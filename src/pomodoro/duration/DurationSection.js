import React from "react";
import { secondsToDuration } from "../../utils/duration";
import SessionInfo from "../SessionInfo/SessionInfo";
function DurationSection({ adjustSession, SessionData }) {
  const { focusDuration, breakDuration } = SessionData;



  const minMaxFocus = (newMinutes) => {
    if (newMinutes >= (60 * 60)) {
      return (60 * 60);
    }
    if (newMinutes <= (5 * 60)) {
      return 5 * 60;
    }
    return newMinutes
  };
  const minMaxBreak = (newMinutes) => {
    if (newMinutes >= (15 *60)) {
      return (15 * 60);
    }
    if (newMinutes <= (1 * 60)) {
      return (1 * 60);
    }
    return newMinutes
  };


  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {secondsToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => {
                const newMinutes = minMaxFocus(focusDuration - (5 * 60));
                adjustSession({ ...SessionData, focusDuration: newMinutes });
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
                const newMinutes = minMaxFocus(focusDuration + (5 * 60));
                adjustSession({ ...SessionData, focusDuration: newMinutes });
              }}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="float-right">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Break Duration: {secondsToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => {
                  const newMinutes = minMaxBreak(breakDuration - 60 );
                  adjustSession({ ...SessionData, breakDuration: newMinutes });
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
                  const newMinutes = minMaxBreak(breakDuration + 60);
                  adjustSession({ ...SessionData, breakDuration: newMinutes });
                  console.log(SessionInfo)
                }}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DurationSection;
