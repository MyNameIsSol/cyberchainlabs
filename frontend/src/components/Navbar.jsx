import React, { useState } from "react";
import { Menu, X, Shield } from "lucide-react"; // Shield for logo icon
import { Link, useNavigate } from "react-router-dom";

//Pages

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#0d1b2a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="text-pink-400" size={28} />
            <span className="font-bold text-xl">CyberChainLabs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search - visible only from md and up */}
            <input
              type="text"
              placeholder="Search scams..."
              className="hidden lg:flex px-3 py-1 rounded-lg text-white outline outline-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:shadow-md focus:shadow-pink-400"
            />

            {/* Links */}
            <Link to="/" className="hover:text-pink-400 transition">Home</Link>
            <Link to="/reportScam" className="hover:text-pink-400 transition">Report a Scam</Link>
            <Link to="/scamReports" className="hover:text-pink-400 transition">View Reports</Link>

            {/* Auth Buttons */}
            <button onClick={() => navigate("/login")}  className="px-3 py-1 border border-pink-400 rounded-lg hover:bg-gradient-to-r from-pink-500 to-fuchsia-500 transition">
              Sign In
            </button>
            <button onClick={() => navigate("/signUp") } className="px-3 py-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg hover:scale-105 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] md:hidden bg-slate-800 px-4 py-4 space-y-3 w-full">
          <input
            type="text"
            placeholder="Search scams..."
            className="w-full px-3 py-1 rounded-lg text-gray-400 outline outline-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

           <Link to="/" className="block hover:text-pink-400 transition">Home</Link>
          <Link to="/reportScam" className="block hover:text-pink-400 transition">Report Scam</Link>
          <Link to="/scamReports" className="block hover:text-pink-400 transition">Safety Center</Link>

          <button onClick={() => navigate("/login")} className="w-full px-3 py-1 border border-pink-400 rounded-lg hover:bg-gradient-to-r from-pink-500 to-fuchsia-500 transition">
            Sign In
          </button>
          <button onClick={() => navigate("/signUp") } className="w-full px-3 py-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg hover:scale-105 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
