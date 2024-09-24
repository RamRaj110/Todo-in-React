import React from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav
      className={`transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl ">iTask</span>
          <button
            onClick={toggleDarkMode}
            className="text-2xl cursor-pointer focus:outline-none"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <LuSun /> : <LuMoonStar />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
