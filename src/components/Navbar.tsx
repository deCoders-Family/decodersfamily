import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Decoders Family
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#services" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#portfolio" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Portfolio</a>
              <a href="#process" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Process</a>
              <a href="#team" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Team</a>
              <a href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-purple-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#services" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
            <a href="#portfolio" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Portfolio</a>
            <a href="#process" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Process</a>
            <a href="#team" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Team</a>
            <a href="#contact" className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;