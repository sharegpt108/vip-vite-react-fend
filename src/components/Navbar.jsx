import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/career-guidance', label: 'Career Guidance' },
    { to: '/market-research', label: 'Market Research' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/partners', label: 'Partners' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="h-15  bg-gradient-to-r from-gray-900/95 via-indigo-950/95 to-purple-950/95 text-gray-200 py-3 px-4 shadow-[0_4px_30px_rgba(168,85,247,0.4)] sticky top-0 z-50 backdrop-blur-lg border-b border-indigo-900/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center relative group">
          <NavLink to="/" className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500 ease-out whitespace-nowrap">
            Lakshya Path
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:w-full transition-all duration-500 ease-out" />
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-gray-300 hover:text-pink-400 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-800/50" aria-label="Toggle menu">
            <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center absolute md:static top-12 left-0 w-full md:w-auto py-4 md:py-0 shadow-xl md:shadow-none transition-all duration-500 ease-in-out backdrop-blur-lg md:backdrop-blur-none ${isOpen ? 'block opacity-100 translate-y-0' : 'hidden md:block opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0'}`}>
          <div className="flex flex-col md:flex-row md:space-x-4 text-center whitespace-nowrap">
            {navLinks.map((link, index) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `relative block md:inline-block px-3 py-1 text-sm font-medium text-gray-300 transition-all duration-300 group ${isActive ? 'text-pink-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-pink-400 after:rounded-full md:after:h-0.5 md:after:w-full' : 'hover:text-pink-400'} ${isOpen ? `animate-slideIn delay-${index * 100}` : ''}`}>
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 md:hidden" />
              </NavLink>
            ))}
            <NavLink to="/career-guidance" className="relative inline-block mt-2 md:mt-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-1 rounded-full font-semibold text-sm transition-all duration-300 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] border border-indigo-400/50 hover:scale-105 group overflow-hidden hidden md:block">
              <span className="relative z-10 drop-shadow-md">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </NavLink>
          </div>
        </div>
      </div>
      <style jsx>{`.drop-shadow-md { filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5)); } @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } } .animate_slideIn { animation: slideIn 0.3s ease-out forwards; } .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; } .delay-400 { animation-delay: 400ms; } .delay-500 { animation-delay: 500ms; } .delay-600 { animation-delay: 600ms; } .delay-700 { animation-delay: 700ms; }`}</style>
    </nav>
  );
}

export default Navbar;