// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5EAEC]/90 backdrop-blur-md border-b border-white/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#8C5D63] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <i className="fa-solid fa-heart text-sm"></i>
          </div>
          <div className="text-left">
            <span 
              className="text-xl md:text-2xl font-bold text-[#4A2D33] tracking-wide block leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sweet Moments
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#8C5D63] uppercase block mt-1">
              Sweetness in every bite
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center">
          <Link className="m-3 text-sm font-medium text-[#6D5257] hover:text-[#8C5D63] transition-colors" to="/">Home</Link>
          <Link className="m-3 text-sm font-medium text-[#6D5257] hover:text-[#8C5D63] transition-colors" to="/about">About Us</Link>
          <Link className="m-3 text-sm font-medium text-[#6D5257] hover:text-[#8C5D63] transition-colors" to="/menu">Menu</Link>
          <Link className="m-3 text-sm font-medium text-[#6D5257] hover:text-[#8C5D63] transition-colors" to="/contact">Contact Us</Link>
        </nav>

        {/* Right Actions: Search, Cart Badge & Order CTA */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-[#6D5257] hover:text-[#8C5D63] text-sm transition-colors p-1.5">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button className="relative text-[#6D5257] hover:text-[#8C5D63] text-base transition-colors p-1.5">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="absolute -top-1 -right-1.5 bg-[#8C5D63] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
              0
            </span>
          </button>

          <button className="px-5 py-2 bg-[#8C5D63] hover:bg-[#73474D] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4A2D33] text-xl focus:outline-none p-2"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#F5EAEC] border-b border-[#E8D0D4] px-6 py-4 space-y-2">
          <Link className="block text-sm font-medium text-[#4A2D33] hover:text-[#8C5D63] py-1" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="block text-sm font-medium text-[#4A2D33] hover:text-[#8C5D63] py-1" to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link className="block text-sm font-medium text-[#4A2D33] hover:text-[#8C5D63] py-1" to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link className="block text-sm font-medium text-[#4A2D33] hover:text-[#8C5D63] py-1" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          <div className="pt-2 border-t border-[#E8D0D4] flex items-center justify-between">
            <div className="flex items-center gap-4 text-[#6D5257]">
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="relative">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="absolute -top-1.5 -right-2 bg-[#8C5D63] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-[#8C5D63] text-white text-xs font-semibold rounded-full">
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;