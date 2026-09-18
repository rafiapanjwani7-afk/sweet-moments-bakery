import React from 'react';

const MenuHero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="text-center space-y-4 max-w-2xl mx-auto pt-6">
      <span className="text-xs font-bold tracking-[0.25em] text-[#8C5D63] uppercase">
        Freshly Baked Daily
      </span>
      <h1 
        className="text-4xl md:text-5xl font-bold text-[#4A2D33]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Explore Our Sweet Menu
      </h1>
      <p className="text-[#6D5257] text-sm md:text-base leading-relaxed">
        Indulge in our collection of artisanal cakes, freshly baked cupcakes, and delicious treats.
      </p>
      {/* <div className="pt-2 max-w-md mx-auto">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for cakes, pastries, cupcakes..." 
          className="w-full px-5 py-2.5 rounded-full bg-[#FBF4F5] text-xs text-[#4A2D33] border border-[#E8D0D4] focus:outline-none focus:ring-2 focus:ring-[#8C5D63] shadow-sm"
        />
      </div> */}
    </section>
  );
};

export default MenuHero;