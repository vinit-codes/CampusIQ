
import React from "react";
import Input from "./Input";

interface HeaderProps {
  StudentName?: string;
}

const Header: React.FC<HeaderProps> = ({ StudentName = "- Yui Hoshizora" }) => {
  return (
    <nav className="bg-[#EAE4D5] fixed top-0 left-0 w-full shadow-md z-50 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center justify-evenly">
        <img
          src="./src/assets/Icons/logoNew.jpg"
          alt="Logo"
          className="h-15 w-15 rounded-full object-cover"
        />
        <h1 className="font-poppins text-3xl font-bold text-[30px] p-[5px] text-[#000000]">CampusOS</h1>
      </div>

      {/* Search Box */}
      <Input id="search" title="🔍" placeHolder="Type here to Search" Type="text" />

      {/* User Profile */}
      <div className="flex items-center space-x-3">
        <img
          src="./src/assets/Images/studentImg.png"
          alt="Student Profile"
          className="h-15 w-15 rounded-full object-cover bg-gray-200 cursor-pointer"
        />
        <h4 className="text-black-500 font-Sans text-lg font-semibold">
          {StudentName}
        </h4>
      </div>
    </nav>
  );
};

export default Header;
