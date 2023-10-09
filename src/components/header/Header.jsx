import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side logo */}
        <div className="flex items-center">
          <div className="text-black text-4xl font-bold">PORTO</div>
        </div>

        {/* Center navigation links (responsive) */}
        <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-800 ${
                location.pathname === "/" ? "underline" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-gray-600 hover:text-gray-800 ${
                location.pathname === "/about" ? "underline" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/itservice"
              className={`text-gray-600 hover:text-gray-800 ${
                location.pathname === "/itservice" ? "underline" : ""
              }`}
            >
              IT Service
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={`text-gray-600 hover:text-gray-800 ${
                location.pathname === "/resources" ? "underline" : ""
              }`}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-800 ${
                location.pathname === "/contact" ? "underline" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side support and sales */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex flex-col items-center">
            <span className="font-semibold text-gray-500 text-sm">SUPPORT</span>
            <a href="tel:+1234567890" className="font-semibold text-blue-500 text-lg">800-123-4567</a>
          </li>
          <li className="flex flex-col items-center">
            <span className="font-semibold text-gray-500 text-sm">SALES</span>
            <a href="tel:+1234567890" className="font-semibold text-blue-500 text-lg">800-123-4567</a>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-600 hover:text-gray-800"
          aria-label="Open navigation menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
