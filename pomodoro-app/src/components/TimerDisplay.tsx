import React from 'react';

interface TimerDisplayProps {
  time: number; // Time in seconds
  mode : 'session' | 'break';
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, mode }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="component--timer-display flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow">
      <div className="text-lg font-semibold mb-3">{mode === 'session' ? 'Session' : 'Break'} Time</div>
      <span id="timer-display" className="text-2xl font-bold">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </span>
    </div>
  );
};
export default TimerDisplay;