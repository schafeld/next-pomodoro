import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'danger' | 'default';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'default', 
  disabled = false 
}) => {
  // Basis-Styling für alle Buttons
  const baseStyles = "px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-all duration-200";
  
  // Variant-spezifisches Styling
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-300",
    default: "bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-300"
  };

  // Disabled-Styling
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;