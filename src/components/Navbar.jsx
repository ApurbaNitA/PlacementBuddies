import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import logo from "../assets/img.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-blue-500">
            Placement Buddies
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
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
          {["/", "/courses", "/contact"].map((path, idx) => {
            const names = ["Home", "Courses", "Contact"];
            const isActive = location.pathname === path;

            return (
              <Link
                key={idx}
                to={path}
                className={`text-lg font-medium ${
                  isActive ? "text-blue-500 underline" : "text-gray-600"
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
            <span className="text-gray-600 font-medium">
              Hello, {user.displayName || user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {["/", "/courses", "/contact"].map((path, idx) => {
            const names = ["Home", "Courses", "Contact"];
            const isActive = location.pathname === path;

            return (
              <Link
                key={idx}
                to={path}
                className={`block text-lg font-medium ${
                  isActive ? "text-blue-500 underline" : "text-gray-600"
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
              <p className="text-gray-600 font-medium">
                Hello, {user.displayName || user.email}
              </p>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="mt-2 w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
