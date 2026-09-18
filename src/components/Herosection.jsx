import React from 'react';

const Herosection = () => {
  return (
    <section className="relative bg-[#F4EAEC] px-6 md:px-16 py-12 md:py-16 rounded-b-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 min-h-[520px]">
      
      {/* Background Soft Wave / Blobs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#E8D0D4]/50 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Doodles */}
      <div className="absolute top-12 left-1/2 text-[#C49B9F] opacity-40 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      {/* Left Column: Text Details */}
      <div className="max-w-xl space-y-5 text-left z-10">
        <p className="text-[11px] font-bold tracking-[0.28em] text-[#9E6D74] uppercase">
          FRESH • DELICIOUS • HOMEMADE
        </p>

        <div className="space-y-1">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2D33] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sweet Moments
          </h1>

          <div className="flex items-center gap-2">
            <span 
              className="text-4xl md:text-5xl lg:text-6xl text-[#8C5D63] font-medium"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Make Life Sweeter
            </span>
            <span className="text-[#8C5D63] text-2xl font-light">♡</span>
          </div>
        </div>

        <p className="text-[#6D5257] text-sm md:text-base leading-relaxed max-w-md font-sans">
          From delicious cakes to beautiful cupcakes, we bring sweetness to your special moments.
        </p>

        <div className="pt-2">
          <button className="px-7 py-3 bg-[#9E6D74] hover:bg-[#88575E] text-white text-xs md:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <span>Explore Our Menu</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Right Column: Custom Asymmetric Organic Frame */}
      <div className="relative flex justify-center items-center z-10">
        <div 
          className="w-80 h-[380px] md:w-[390px] md:h-[430px] bg-white/90 backdrop-blur-sm p-3 shadow-md border border-white flex items-center justify-center transition-all duration-500"
          style={{ borderRadius: "52% 48% 63% 37% / 43% 53% 47% 57%" }}
        >
          <div 
            className="w-full h-full overflow-hidden bg-[#EAE0E2] flex items-center justify-center relative"
            style={{ borderRadius: "50% 50% 60% 40% / 40% 50% 50% 60%" }}
          >
            <img 
              src="https://buttercakefactory.com/cdn/shop/files/fcd34e17-d0f1-445b-9613-f8a81dc6ae60.jpg?v=1775725412" 
              alt="Floral Birthday Cake" 
              className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Herosection;