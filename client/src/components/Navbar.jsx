import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // State to track user login and avatar hover state
  const [userLoggedIn, setUserLoggedIn] = useState(true);  // Simulating user login state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample user info (replace this with actual data from your backend or auth service)
  const userAvatar = 'path-to-user-avatar.png'; // User's avatar image URL

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    // Handle user logout logic here
    console.log('User logged out');
    setUserLoggedIn(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="path-to-logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold text-blue-800">Prescripto</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
            HOME
          </Link>
          <Link to="/all-doctors" className="text-gray-700 hover:text-blue-500 font-medium">
            ALL DOCTORS
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 font-medium">
            ABOUT
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
            CONTACT
          </Link>
        </div>

        {/* Admin Panel & User Section */}
        <div className="flex items-center space-x-4">
          {!userLoggedIn ? (
            <>
              <button className="border border-gray-400 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100">
                Admin Panel
              </button>
              <button 
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </>
          ) : (
            // User is logged in, show avatar with dropdown
            <div className="relative">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <Link
                    to="/appointments"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Appointments
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
