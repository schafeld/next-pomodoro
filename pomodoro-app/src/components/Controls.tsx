/** 
  * NextJS TS Component to control the Pomodoro timer
  *
  * Displays two buttons:
  * - Start/Stop button
  * - Reset button
  *
  * The Start/Stop button (primary style) toggles between starting and stopping the timer.
  * The Reset button (danger style) resets the timer to its initial state.
  *
  * Props:
  * isRunning: boolean - Indicates whether the timer is currently running.
  * onStartStop: () => void - Function to call when the Start/Stop button is clicked.
  * onReset: () => void - Function to call when the Reset button is clicked.
  *
  * Styling:
  * - Flexbox layout to center the buttons
  * - Gap between buttons
  * - uses button component
  */


import React from 'react';
import Button from './Button';

interface ControlsProps {
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
}
const Controls: React.FC<ControlsProps> = ({ isRunning, onStartStop, onReset }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button onClick={onStartStop} variant="primary">
        {isRunning ? 'Stop' : 'Start'}
      </Button>
      <Button onClick={onReset} variant="danger">
        Reset
      </Button>
    </div>
  );
}
export default Controls;