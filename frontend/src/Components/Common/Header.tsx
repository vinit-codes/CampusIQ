import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import TypingText from "./TypingText";
import Input from "./Input";
import logo from "../../assets/Icons/logoNew.jpg";
import studentImg from "../../assets/Images/studentImg.png";

interface HeaderProps {
  StudentName?: string;
}

const pageNamesMap: Record<string, string> = {
  "": "CampusOS",
  "/": "CampusOS",
  "/dashboard": "Dashboard",
  "/notifications": "Inbox",
  "/academics": "Academics",
  "/studentsprofile": "Repository",
  "/hostel": "Hostel",
  "/library": "Library",
  "/results": "Results",
};

const Header: React.FC<HeaderProps> = ({ StudentName = "- Yui Hoshizora" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // normalize path for matching (lowercase, no trailing slash)
  const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, "");
  const pageName = pageNamesMap[normalizedPath] ?? "CampusOS";

  const handleLogoClick = () => navigate("/dashboard");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this to your search service / global state
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input[name="header-search"]') as HTMLInputElement | null;
    if (input) {
      console.log("Search query:", input.value);
      navigate(`/search?q=${encodeURIComponent(input.value)}`)
    }
  };
  const [isLoggedIn , setIsLoggedIn] = useState(true);

  return (
    <nav
      role="navigation"
      aria-label="Main header"
      className="fixed top-0 left-0 w-full h-18 bg-[#F8FAFC] border-b border-[#E6EEF9] shadow-sm z-50 px-4 lg:px-6 py-3 flex items-center justify-between animate-fadeIn"
    >
      {/* Logo & title */}
      <div
        onClick={handleLogoClick}
        className="flex items-center gap-3 cursor-pointer select-none hover:scale-105 transition-transform duration-200"
        aria-hidden
      >
        <img src={logo} alt="CampusOS Logo" className="h-12 w-12 rounded-full object-cover" />
        <h1 className="font-inter text-4xl font-bold text-[#1E293B] select-none whitespace-nowrap w-80"> <TypingText text={pageName} /> </h1>
      </div>

      {/* Search (center) - collapses on small screens */}
      <div className="flex-1 mx-4 hidden md:flex justify-center">
        <form onSubmit={handleSearchSubmit} className="w-full max-w-xl">
          <Input
            id="header-search"
            title=""
            placeHolder="Type here to search"
            Type="text"
          />
        </form>
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-4">
        <Link to="/profile" className="flex items-center gap-3">
          <img
            src={studentImg}
            alt="Student profile"
            className="h-12 w-12 rounded-full object-cover bg-[#F8FAFC] "
          />
          <span className="font-sans text-sm lg:text-lg font-semibold text-[#1E293B] select-none hidden sm:inline">
            {StudentName}
          </span>
        </Link>

        {/* Login/logout button */}
        {isLoggedIn ? <button onClick={() => {setIsLoggedIn(false);
          navigate("/")}
        } className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm md:text-base">
          Logout
        </button> : <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm md:text-base">
          Login
        </button>}

        {/* Mobile: simple menu button (expand later) */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-lg hover:bg-[#F1F7FF] transition-colors"
          onClick={() => navigate("/dashboard")}
        >
          
        </button>
      </div>
    </nav>
  );
};

export default Header;