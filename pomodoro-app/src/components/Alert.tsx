/*
 * NextJS TS Alert Component
 *
 * This component displays an alert message at the top of the screen.
 * 
 * Structure:
 * - Left: pi-info-circle icon
 * - Center: Alert message
 * - Right: Close button pi-plus-circle icon, rotated 45 degrees so it looks like an X
 * 
 * Styling:
 * Positioned at the top of the screen
 * Width: Full width
 * Padding: Applied to the entire component
 * Background color: light pink
 * Top border: dark red
 * Text color: very dark red
 */

import React from 'react';

// import 'primeicons/primeicons.css';
        

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 bg-pink-100 border-t-4 border-red-700 text-red-900 flex items-center justify-between">
      <div className="flex items-center">
        <i className="text-xl mr-2 pi pi-info-circle" />
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="text-xl transform">
        <i className="pi pi-plus-circle rotate-45" />
      </button>
    </div>
  );
};

export default Alert;