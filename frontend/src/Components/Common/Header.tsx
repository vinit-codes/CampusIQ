import React from "react";
import { useLocation } from "react-router-dom";
import TypingText from "./TypingText";
import Input from "./Input";

interface HeaderProps {
  StudentName?: string;
}

const pageNamesMap: Record<string, string> = {
  "/": "CampusOS",
  "/dashboard": "Dashboard",
  "/notifications": "Inbox",
  "/academics": "Academics",
  "/studentsprofile": "Repository",
  "/hostel": "Hostel",
  "/library": "Library",
};

const Header: React.FC<HeaderProps> = ({ StudentName = "- Yui Hoshizora" }) => {
  const location = useLocation();

  const pageName = pageNamesMap[location.pathname.toLowerCase()] ?? "CampusOS";

  const handleLogoClick = () => {
    window.location.href = "/dashboard";
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-18 bg-white border-b border-gray-300 shadow-sm z-50 px-6 py-3 flex items-center justify-between animate-fadeIn">
      <div
        onClick={handleLogoClick}
        className="flex items-center gap-3 cursor-pointer select-none hover:scale-105 transition-transform duration-300"
      >
        <img
          src="./src/assets/Icons/logoNew.jpg"
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <h1 className="font-LibertinusSans text-4xl font-bold text-blue-500 select-none whitespace-nowrap w-80">
          <TypingText text={pageName} />
        </h1>
      </div>

      <div className="w-80 mx-8 flex-shrink-0 ">
        <Input
          id="search"
          title=""
          placeHolder="Type here to Search"
          Type="text"
        />
      </div>

      <div className="flex items-center gap-4 cursor-pointer select-none">
        <img
          src="./src/assets/Images/studentImg.png"
          alt="Student Profile"
          className="h-12 w-12 rounded-full object-cover bg-gray-100 border border-gray-300"
        />
        <h4 className="font-sans text-lg font-semibold text-gray-800 select-none">
          {StudentName}
        </h4>
      </div>
    </nav>
  );
};

export default Header;