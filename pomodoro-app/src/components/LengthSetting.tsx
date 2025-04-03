/*
 * NextJS TS Pomodoro Timer Length Setting Component
 *
 * This component displays the time length setting for the Pomodoro timer.
 * 
 * Structure:
 * - Left: pi-minus-circle icon
 * - Center: Time length in minutes
 * - Right: pi-plus-circle icon
 * 
 * Styling:
 * - Flexbox layout to center the elements
 * - Gap between elements
 * - Padding: Applied to the entire component
 * - Background color: light gray
 * - Text color: very dark gray
 * - Border: light gray
 * - Rounded corners
 * - Shadow: applied to the entire component
 * 
 * Props:
 * - label: string - The label for the time length setting (e.g., "Pomodoro", "Short Break", "Long Break").
 * - length: number - The current time length in minutes.
 * - onIncrement: () => void - Function to call when the increment button is clicked.
 * - onDecrement: () => void - Function to call when the decrement button is clicked.
 * - minLength: number - The minimum time length in minutes.
 * - maxLength: number - The maximum time length in minutes.
 */

import React from 'react';
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

interface LengthSettingProps {
  label: string;
  length: number;
  onIncrement: () => void;
  onDecrement: () => void;
  isDisabled?: boolean;
  minLength: number;
  maxLength: number;
}
const LengthSetting: React.FC<LengthSettingProps> = ({
  label,
  length,
  onIncrement,
  onDecrement,
  minLength,
  maxLength,
}) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow">
      <div className="text-lg font-semibold text-center mb-3">{label}</div>
      <div className="flex items-center justify-between w-full">
        <Tooltip 
          target=".decrement" 
          content="Decrease length" 
          position="bottom"
          className="p-2 bg-gray-300 text-gray-800" 
        />
        <Button
          icon={PrimeIcons.MINUS}
          className="decrement p-4"
          onClick={onDecrement}
          disabled={length <= minLength}
        />

        <span id="timer-display" className="text-lg font-semibold">{`${length} min`}</span>
        
        <Tooltip 
          target=".increment" 
          content="Increase length" 
          position="bottom"
          className="p-2 bg-gray-300 text-gray-800"
        />
        <Button
          icon={PrimeIcons.PLUS}
          className="increment p-4"
          onClick={onIncrement}
          disabled={length >= maxLength}
        />
      </div>
    </div>
  );
}
export default LengthSetting;
// Usage example
// <LengthSetting
//   label="Pomodoro"
//   length={25}
//   onIncrement={() => console.log('Incremented')}
//   onDecrement={() => console.log('Decremented')}
//   minLength={1}
//   maxLength={60}
// />