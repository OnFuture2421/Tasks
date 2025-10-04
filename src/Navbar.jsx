import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 transition-colors">
      {/* Left: Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          to="/home"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Tasks
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          About me
        </Link>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded border border-cyan-400 font-bold dark:border-yellow-400 dark:bg-black dark:text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Right: Title */}
      <h1 className="font-bold text-lg dark:text-white">Tasks</h1>
    </nav>
  );
}
