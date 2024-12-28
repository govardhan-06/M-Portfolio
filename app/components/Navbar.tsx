"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-md lg:px-16 px-3 py-2 mt-3">
      <div className="container mx-auto flex items-center justify-between text-slate-800">
        <a href="#" className="text-xl font-semibold text-slate-800">
          Govardhan A R
        </a>

        {/* Desktop Navbar Items */}
        <div className="hidden lg:flex space-x-8">
          <a href="#education" className="text-base text-dark-600 hover:text-slate-600">Education</a>
          <a href="#projects" className="text-base text-dark-600 hover:text-slate-600">Projects</a>
          <a href="#experiences" className="text-base text-dark-600 hover:text-slate-600">Experiences</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="space-y-4 text-center">
            <li>
              <a href="#about" className="block text-lg text-dark-600 hover:text-slate-600">Education</a>
            </li>
            <li>
              <a href="#projects" className="block text-lg text-dark-600 hover:text-slate-600">Projects</a>
            </li>
            <li>
              <a href="#experiences" className="block text-lg text-dark-600 hover:text-slate-600">Experiences</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
