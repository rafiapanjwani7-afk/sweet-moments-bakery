import React from 'react';

const NotFoundContent = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto text-center">
      {/* Aesthetic 404 Display */}
      <div className="relative inline-block">
        <h1 
          className="text-8xl md:text-9xl font-extrabold text-[#E8D0D4] tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>
        <span 
          className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl text-[#8C5D63] font-medium pt-2"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Oops! Slice Not Found ♡
        </span>
      </div>

      <h2 
        className="text-2xl font-bold text-[#4A2D33]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Looks Like This Recipe Is Missing
      </h2>
      
      <p className="text-xs md:text-sm text-[#6D5257] leading-relaxed">
        The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let's get you back to something sweet!
      </p>
    </div>
  );
};

export default NotFoundContent;