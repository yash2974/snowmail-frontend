// frontend/src/components/Navbar.jsx

import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/usercontext';
import { AuthModeContext } from '../contexts/authmodecontext'; // Import AuthModeContext
import { FaUserCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import LogoutButton from './logout'; // Import the LogoutButton component
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Access user from context
  const { user } = useContext(UserContext);

  // Access toggleAuthMode from AuthModeContext
  const { setSignup,setLogin } = useContext(AuthModeContext);

  // Initialize navigate for programmatic navigation
  const navigate = useNavigate();

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Function to handle Sign Up click
  const handleSignUpClick = () => {
    //setSignup();
    setSignup()
    navigate('/login'); // Navigate to the Login (authentication) page
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // Function to handle Login click (optional: ensure it's in Login mode)
  const handleLoginClick = () => {
    // Optionally, you can reset to Login mode if necessary
    // For example, if your AuthModeContext has a method to set isSignUpMode to false
    // setIsSignUpMode(false);
    setLogin();
    navigate('/login'); // Navigate to the Login (authentication) page
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              SnowMail
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Authentication Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                {/* Login Button */}
                <button
                  onClick={handleLoginClick}
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FaSignInAlt className="mr-1" /> Login
                </button>
                {/* Sign Up Button */}
                <button
                  onClick={handleSignUpClick}
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FaUserPlus className="mr-1" /> Sign Up
                </button>
              </>
            ) : (
              <>
                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FaUserCircle className="h-5 w-5 mr-1" /> Profile
                </Link>
                {/* Logout Button */}
                <LogoutButton /> {/* Include the LogoutButton */}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Authentication Icons (Mobile) */}
            <div className="flex items-center space-x-2 mr-2">
              {!user ? (
                <>
                  {/* Login Icon */}
                  <button
                    onClick={handleLoginClick}
                    className="hover:bg-gray-700 p-2 rounded-md text-sm font-medium transition"
                  >
                    <FaSignInAlt />
                  </button>
                  {/* Sign Up Icon */}
                  <button
                    onClick={handleSignUpClick}
                    className="hover:bg-gray-700 p-2 rounded-md text-sm font-medium transition"
                  >
                    <FaUserPlus />
                  </button>
                </>
              ) : (
                <>
                  {/* Profile Icon */}
                  <Link
                    to="/profile"
                    className="hover:bg-gray-700 p-2 rounded-md text-sm font-medium transition"
                  >
                    <FaUserCircle className="h-5 w-5" />
                  </Link>
                  {/* Logout Button */}
                  <LogoutButton /> {/* Include the LogoutButton */}
                </>
              )}
            </div>

            {/* Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for Menu Open and Close */}
              {isMobileMenuOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              About
            </Link>
            <Link
              to="/services"
              className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
            {/* Authentication Links (Mobile) */}
            {!user ? (
              <>
                {/* Login Link */}
                <button
                  onClick={handleLoginClick}
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition w-full text-left"
                >
                  <FaSignInAlt className="mr-2" /> Login
                </button>
                {/* Sign Up Link */}
                <button
                  onClick={handleSignUpClick}
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition w-full text-left"
                >
                  <FaUserPlus className="mr-2" /> Sign Up
                </button>
              </>
            ) : (
              <>
                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  <FaUserCircle className="h-5 w-5 mr-2" /> Profile
                </Link>
                {/* Logout Button */}
                <LogoutButton /> {/* Include the LogoutButton */}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;