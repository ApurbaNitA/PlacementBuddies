import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import logo from "../assets/img.png";

const Navbar = ({toggleTheme, theme}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-blue-500 dark:text-white">
            Placement Buddies
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-600 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["/", "/courses", "/materials"].map((path, idx) => {
            const names = ["Home", "Courses", "Interview Materials"];
            const isActive = location.pathname === path;

            return (
              <Link
                key={idx}
                to={path}
                className={`text-lg font-medium ${
                  isActive ? "text-blue-500 underline dark:text-gray-400" : "text-gray-600 dark:text-white"
                } hover:text-blue-500 hover:underline`}
              >
                {names[idx]}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user && (
            <span className="text-gray-600 dark:text-white font-medium">
              Hello, {user.displayName || user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition
            dark:border-white dark:text-white dark:hover:bg-gray-500"
          >
            Logout
          </button>
          <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-500 text-blue-500 rounded hover:bg-gray-600 hover:text-white transition"
          >
            {theme==="light"?"🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {["/", "/courses", "/materials"].map((path, idx) => {
            const names = ["Home", "Courses", "Interview Materials"];
            const isActive = location.pathname === path;

            return (
              <Link
                key={idx}
                to={path}
                className={`block text-lg font-medium ${
                  isActive ? "text-blue-500 underline dark:text-gray-400" : "text-gray-600 dark:text-white"
                } hover:text-blue-500 hover:underline`}
                onClick={toggleMenu}
              >
                {names[idx]}
              </Link>
            );
          })}
          {/* User Name and Logout */}
          {user && (
            <div className="mt-4">
              <p className="text-gray-600 font-medium dark:text-white">
                Hello, {user.displayName || user.email}
              </p>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="mt-2 w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition
                dark:border-white dark:text-white dark:hover:bg-gray-500"
              >
                Logout
              </button>
              <button
                // onClick={toggleTheme}
                onClick={() => {
                  toggleTheme();
                  toggleMenu();
                }}
                className="mt-2 w-full px-4 py-2 bg-gray-500 text-blue-500 rounded hover:bg-gray-600 hover:text-white transition"
              >
                 {theme==="light"?"🌙" : "☀️"}
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
