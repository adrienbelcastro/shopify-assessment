import React from "react";
import "./stopwatch.css";

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
  console.log(onClick);
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
