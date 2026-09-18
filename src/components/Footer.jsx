// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#9A6B71] text-white pt-12 pb-8 px-8 mt-12 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/20 pb-8">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">Sweet Moments</h3>
            <p className="text-[10px] text-white/80 tracking-widest uppercase font-semibold">
              Sweetness In Every Bite
            </p>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-white/90">
          <Link to="/" className="hover:text-amber-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-amber-200 transition-colors">About</Link>
          <Link to="/menu" className="hover:text-amber-200 transition-colors">Menu</Link>

          <Link to="/contact" className="hover:text-amber-200 transition-colors">Contact</Link>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-3">
          {['facebook-f', 'instagram', 'pinterest-p', 'tiktok'].map((icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white hover:text-[#9A6B71] transition-all flex items-center justify-center text-xs"
            >
              <i className={`fa-brands fa-${icon}`}></i>
            </a>
          ))}
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-white/70 font-sans">
        &copy; {new Date().getFullYear()} Sweet Moments Bake Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;