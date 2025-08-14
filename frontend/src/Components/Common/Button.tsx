import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  clickFun: string;
  nameButton: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ clickFun, nameButton ,type}) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      onClick={() => navigate(clickFun)}
      aria-label={nameButton}
      className="bg-[#2563EB] hover:bg-[#0EA5E9] text-white px-4 py-2 rounded-lg border-none cursor-pointer transition-transform duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${className}"
    >
      {nameButton}
    </button>
  );
};

export default Button;
