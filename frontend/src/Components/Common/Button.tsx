import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  clickFun: string;
  nameButton: string;
}

const Button: React.FC<ButtonProps> = ({ clickFun, nameButton }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(clickFun);
      }}
      className="bg-[#0046FF] text-[#E9E9E9] border-none px-4 py-2 rounded cursor-pointer transition duration-200 hover:scale-105 hover:animate-bounce"
    >
      {nameButton}
    </button>
  );
};

export default Button;