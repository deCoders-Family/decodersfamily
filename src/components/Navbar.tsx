import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Helper function to handle navigation for hash links on home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      // If we're on home page, let the hash navigation work
      setIsOpen(false);
    } else {
      // If we're on another page, prevent default and navigate to home with hash
      e.preventDefault();
      window.location.href = `/${hash}`;
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              Decoders Family
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {location.pathname === '/' ? (
                <>
                  <a href="#home" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</a>
                  <a href="#services" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Services</a>
                  <a href="#portfolio" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Portfolio</a>
                  <a href="#process" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Process</a>
                  <a href="#team" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Team</a>
                </>
              ) : (
                <>
                  <Link to="/" className="hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</Link>
                  <a 
                    href="/#services" 
                    onClick={(e) => handleNavClick(e, '#services')} 
                    className="hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  >
                    Services
                  </a>
                  <a 
                    href="/#portfolio" 
                    onClick={(e) => handleNavClick(e, '#portfolio')} 
                    className="hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  >
                    Portfolio
                  </a>
                  <a 
                    href="/#process" 
                    onClick={(e) => handleNavClick(e, '#process')} 
                    className="hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  >
                    Process
                  </a>
                  <a 
                    href="/#team" 
                    onClick={(e) => handleNavClick(e, '#team')} 
                    className="hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  >
                    Team
                  </a>
                </>
              )}
              <a 
                href={location.pathname === '/' ? '#contact' : '/#contact'}
                onClick={(e) => location.pathname !== '/' && handleNavClick(e, '#contact')}
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
              >
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
            {location.pathname === '/' ? (
              <>
                <a href="#home" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
                <a href="#services" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
                <a href="#portfolio" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Portfolio</a>
                <a href="#process" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Process</a>
                <a href="#team" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Team</a>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</Link>
                <a 
                  href="/#services" 
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-purple-600 block px-3 py-2 text-base font-medium"
                >
                  Services
                </a>
                <a 
                  href="/#portfolio" 
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="hover:text-purple-600 block px-3 py-2 text-base font-medium"
                >
                  Portfolio
                </a>
                <a 
                  href="/#process" 
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-purple-600 block px-3 py-2 text-base font-medium"
                >
                  Process
                </a>
                <a 
                  href="/#team" 
                  onClick={(e) => handleNavClick(e, '#team')}
                  className="hover:text-purple-600 block px-3 py-2 text-base font-medium"
                >
                  Team
                </a>
              </>
            )}
            <a 
              href={location.pathname === '/' ? '#contact' : '/#contact'}
              onClick={(e) => location.pathname !== '/' && handleNavClick(e, '#contact')}
              className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;