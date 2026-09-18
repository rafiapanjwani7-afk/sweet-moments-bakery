import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative text-center space-y-4 max-w-3xl mx-auto pt-6">
      <span className="text-xs font-bold tracking-[0.25em] text-[#8C5D63] uppercase">
        Crafted With Heart
      </span>
      <h1 
        className="text-4xl md:text-6xl font-bold tracking-tight text-[#4A2D33]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Sweet Story
      </h1>
      <p className="text-[#6D5257] text-sm md:text-base leading-relaxed">
        From a small passion kitchen to crafting memorable treats, we create artisanal pastries and customized cakes designed to make every single moment extra special.
      </p>
    </section>
  );
};

export default AboutHero;