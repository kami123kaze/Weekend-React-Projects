import React from 'react'

interface ButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;  
}


function Button({ label, onClick, className }: ButtonProps) {

  return (
    <button
        onClick={onClick}
        className={`rounded px-4 py-2 ${className && className}`}
      >
        button
        {label}
      </button>
    )
}

export default Button