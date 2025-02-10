import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sprinter
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#games">Games</NavLink>
              <NavLink href="#support">Support</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#about">About</NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#games">Games</MobileNavLink>
            <MobileNavLink href="#support">Support</MobileNavLink>
            <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);

export default Navbar;