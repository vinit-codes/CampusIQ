
import React from 'react';

interface InputProps {
  id: string;
  title: string;
  placeHolder: string;
  Type: string;
}

const Input: React.FC<InputProps> = ({ id, title, placeHolder, Type }) => {
  return (
    <div className="flex-1 max-w-md m-5">
      <label htmlFor={id} className="text-gray-700">
        {title}
      </label>
      <input
        id={id}
        type={Type}
        placeholder={placeHolder}
        className="w-full px-4 py-2 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent m-[5px]"
      />
    </div>
  );
};

export default Input;
