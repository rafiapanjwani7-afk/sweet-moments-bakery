import React from 'react';

const ContactHero = () => {
  return (
    <section className="text-center space-y-3 max-w-2xl mx-auto pt-6">
      <span className="text-xs font-bold tracking-[0.25em] text-[#8C5D63] uppercase">
        Get In Touch
      </span>
      <h1 
        className="text-4xl md:text-5xl font-bold text-[#4A2D33]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        We'd Love to Hear From You
      </h1>
      <p className="text-[#6D5257] text-sm md:text-base leading-relaxed">
        Have a question about custom cakes, orders, or special events? Send us a message or visit our bakery!
      </p>
    </section>
  );
};

export default ContactHero;