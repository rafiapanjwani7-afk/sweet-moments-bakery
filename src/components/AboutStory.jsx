import React from 'react';

const AboutStory = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-[#4A2D33]">
      {/* Asymmetric Organic Image Frame */}
      <div className="relative flex justify-center">
        <div 
          className="w-72 h-[360px] md:w-80 md:h-[400px] bg-[#F4EAEC] p-3 shadow-sm border border-white flex items-center justify-center overflow-hidden"
          style={{ borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" 
            alt="Baking Cake Process" 
            className="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
      </div>

      {/* Content Details */}
      <div className="space-y-6">
        <span 
          className="text-3xl text-[#8C5D63] block font-medium"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Sweetness in every bite ♡
        </span>
        <h2 
          className="text-2xl md:text-3xl font-bold leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Baking Fresh Everyday with Organic Ingredients
        </h2>
        <p className="text-xs md:text-sm text-[#6D5257] leading-relaxed">
          Every creation at Sweet Moments starts with high-quality, locally sourced ingredients. Whether it's a signature wedding cake, cupcakes, or daily delicacies, we bring artisan quality and organic beauty to your table.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-[#F5EAEC]/60 rounded-2xl border border-white/80">
            <h3 className="text-2xl font-bold text-[#8C5D63]">100%</h3>
            <p className="text-xs text-[#6D5257]">Fresh & Handmade</p>
          </div>
          <div className="p-4 bg-[#F5EAEC]/60 rounded-2xl border border-white/80">
            <h3 className="text-2xl font-bold text-[#8C5D63]">500+</h3>
            <p className="text-xs text-[#6D5257]">Happy Celebrations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;