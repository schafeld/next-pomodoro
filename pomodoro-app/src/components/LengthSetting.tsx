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
    <div className="flex items-center justify-between p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow">
      <Tooltip target=".decrement" content="Decrease length" />
      <Button
        icon={PrimeIcons.MINUS}
        className="decrement"
        onClick={onDecrement}
        disabled={length <= minLength}
      />
      <span className="text-lg font-semibold">{`${label}: ${length} min`}</span>
      <Tooltip target=".increment" content="Increase length" />
      <Button
        icon={PrimeIcons.PLUS}
        className="increment"
        onClick={onIncrement}
        disabled={length >= maxLength}
      />
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