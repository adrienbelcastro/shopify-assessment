import React from "react";
import "./buttons.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function StopWatchButton({
  label,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
