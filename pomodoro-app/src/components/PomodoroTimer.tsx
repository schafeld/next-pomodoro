/** This is the main component for the Pomodoro Timer application.
  * It includes the timer display, controls for starting/stopping the timer,
  * It uses the useState, useEffect, useRef, and useCallback hooks to manage the timer state and functionality.
  * It imports TimerDisplay, Controls, LengthSetting, and Alert components from the respective files.
  * The state variables include sessionLength, breakLength, currentMode, prevModeRef, currentTime, isRunning, showAlert, and timerId.
  * The timer is set to 25 minutes for work sessions and 5 minutes for break sessions by default.
  * The timer counts down from the set time and switches between work and break sessions.
  * The timer can be started, stopped, and reset, and it switches between work and break sessions.
  * The component also includes a sound notification when the timer ends.
  * The timer length can be set for both work and break sessions.
  * The component uses the PrimeReact library for UI components.
  * The component is designed to be responsive and works well on both desktop and mobile devices.
  * The component is styled using Tailwind CSS for a modern and clean look.
  */

"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { PrimeReactProvider } from 'primereact/api';
import "primeicons/primeicons.css";
import Alert from "@/components/Alert";
import Controls from "@/components/Controls";
import LengthSetting from "@/components/LengthSetting";
import TimerDisplay from '@/components/TimerDisplay';


const PomodoroTimer = () => {
  const [sessionLength, setSessionLength] = useState(25); // in minutes
  const [breakLength, setBreakLength] = useState(5); // in minutes
  const [currentMode, setCurrentMode] = useState<'session' | 'break'>('session');
  const prevModeRef = useRef<'session' | 'break'>('session');
  const [currentTime, setCurrentTime] = useState(sessionLength * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  // Function to handle the end of the timer
  const handleTimerEnd = useCallback(() => {
    setShowAlert(true);
    setCurrentMode((prev) => (prev === 'session' ? 'break' : 'session'));
    prevModeRef.current = currentMode;
    setCurrentTime(currentMode === 'session' ? breakLength * 60 : sessionLength * 60);
  }, [currentMode, breakLength, sessionLength]);
  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
    timerId.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerId.current!);
          handleTimerEnd();
          return currentMode === 'session' ? sessionLength * 60 : breakLength * 60;
        }
        return prev - 1;
      });
    }, 1000);
  };
  // Function to stop the timer
  const stopTimer = useCallback(() => {
    setIsRunning(false);
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  }, []);
  // Function to reset the timer
  const resetTimer = useCallback(() => {
    stopTimer();
    setCurrentMode('session');
    setCurrentTime(sessionLength * 60);
    setShowAlert(false);
  }, [stopTimer, sessionLength]);
  // Function to increment the session length
  const incrementSessionLength = () => {
    if (sessionLength < 60) {
      setSessionLength((prev) => prev + 1);
      if (currentMode === 'session') {
        setCurrentTime((prev) => prev + 60);
      }
    }
  };
  // Function to decrement the session length
  const decrementSessionLength = () => {
    if (sessionLength > 1) {
      setSessionLength((prev) => prev - 1);
      if (currentMode === 'session') {
        setCurrentTime((prev) => prev - 60);
      }
    }
  };
  // Function to increment the break length
  const incrementBreakLength = () => {
    if (breakLength < 60) {
      setBreakLength((prev) => prev + 1);
      if (currentMode === 'break') {
        setCurrentTime((prev) => prev + 60);
      }
    }
  };
  // Function to decrement the break length
  const decrementBreakLength = () => {
    if (breakLength > 1) {
      setBreakLength((prev) => prev - 1);
      if (currentMode === 'break') {
        setCurrentTime((prev) => prev - 60);
      }
    }
  };
  // Function to toggle the timer
  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };
  // Function to close the alert
  const closeAlert = () => {
    setShowAlert(false);
  };
  // useEffect to handle the timer end
  useEffect(() => {
    if (currentTime <= 0) {
      handleTimerEnd();
    }
  }, [currentTime, handleTimerEnd]);
  // useEffect to clear the timer on component unmount
  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);
  // useEffect to update the current time when the session length changes
  useEffect(() => {
    setCurrentTime(sessionLength * 60);
  }, [sessionLength]);
  // useEffect to update the current time when the break length changes
  useEffect(() => {
    if (currentMode === 'break') {
      setCurrentTime(breakLength * 60);
    }
  }, [breakLength, currentMode]);
  // useEffect to update the current time when the current mode changes
  useEffect(() => {
    if (currentMode === 'session') {
      setCurrentTime(sessionLength * 60);
    } else {
      setCurrentTime(breakLength * 60);
    }
  }, [currentMode, sessionLength, breakLength]);
  // useEffect to update the current time when the timer is running
  useEffect(() => {
    if (isRunning) {
      setCurrentTime((prev) => prev);
    }
  }, [isRunning]);
  // useEffect to update the current time when the timer is stopped
  useEffect(() => {
    if (!isRunning) {
      setCurrentTime((prev) => prev);
    }
  }, [isRunning]);
  // useEffect to update the current time when the timer is reset
  useEffect(() => {
    setCurrentTime(sessionLength * 60);
  }, [resetTimer, sessionLength, breakLength, currentMode]);
  
  return (
    <PrimeReactProvider>
      <div className="component--pomodoro-timer flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow">
        {showAlert && (
          <Alert
            message={`Time's up! Switch to ${prevModeRef.current === 'session' ? 'Break' : 'Session'}`}
            onClose={closeAlert}
          />
        )}
        <LengthSetting
          label="Session Length"
          length={sessionLength}
          onIncrement={incrementSessionLength}
          onDecrement={decrementSessionLength}
          minLength={1}
          maxLength={60}
        />
        <LengthSetting
          label="Break Length"
          length={breakLength}
          onIncrement={incrementBreakLength}
          onDecrement={decrementBreakLength}
          minLength={1}
          maxLength={60}
        />
        <TimerDisplay time={currentTime} mode={currentMode} />
        <Controls
          isRunning={isRunning}
          onStartStop={toggleTimer}
          onReset={resetTimer}
        />
        <p className="text-xs my-4">
          Current Mode: {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)}.
          Time Remaining: {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}. <br />
          Session Length: {sessionLength} minutes. Break Length: {breakLength} minutes. <br />
          Timer is {isRunning ? 'Running' : 'Stopped'}
        </p>
      </div>
    </PrimeReactProvider>
  );
}
export default PomodoroTimer;
// Usage example
// <PomodoroTimer />