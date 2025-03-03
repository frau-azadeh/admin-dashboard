import React from 'react'

interface ButtonProps{

  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button:React.FC<ButtonProps> = ({label, disabled, onClick}) => {
  return (
    <button 
      type='submit'
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg transition test-white ${
        disabled
        ? "bg-blue-300 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-900"
      }`}
    >
      {label}
    </button>
  )
}

export default Button;