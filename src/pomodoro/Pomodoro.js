import React, { useState } from "react";
import DurationSection from "./duration/DurationSection";
import PlayPauseSection from "./playPause/PlayPauseSection";
import SessionInfo from "./SessionInfo/SessionInfo";
// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */


/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */


function Pomodoro() {
  const initialState = {
    display: 'none',
    isPaused: false,
    focusDuration: 25 * 60,
    breakDuration: 5 * 60,
    isFocusing: false
  };  
  
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [SessionData, setSessionData] = useState({...initialState});




  



  return (
    <div className="pomodoro">
      <DurationSection
        adjustSession={setSessionData}
        SessionData = {SessionData}
      />

      <PlayPauseSection
        SessionData={SessionData}
        isTimerRunning={isTimerRunning}
        onStart={() => {
          setSessionData({ ...SessionData, isPaused: false, display: "block", isFocusing: true});
          setIsTimerRunning(true);
        }}
        onStop={() => {
          setIsTimerRunning(false);
          setSessionData({...initialState})
        }}
        onPause={() => {
          setIsTimerRunning(false)
          setSessionData({ ...SessionData, isPaused: true});
        }}
      />
    <div style = {{display: `${SessionData.display}`}}>
      <SessionInfo 
      setSessionData={setSessionData}
      SessionData={SessionData} 
      isTimerRunning={isTimerRunning} 
      />
      </div>
    </div>
  );
}

export default Pomodoro;
