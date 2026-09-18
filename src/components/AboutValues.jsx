import React from 'react';

const AboutValues = () => {
  const values = [
    { title: "Quality Ingredients", desc: "Pure butter, organic cocoa, and farm-fresh dairy for standard flavors." },
    { title: "Customized Designs", desc: "Tailored cake designs suited for your theme, color scheme, and preferences." },
    { title: "Baked Daily", desc: "Never stored frozen. Made fresh upon order to ensure maximum softness." }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
      {values.map((val, idx) => (
        <div key={idx} className="p-6 bg-[#FBF4F5] rounded-3xl border border-white text-center space-y-2">
          <h3 
            className="text-lg font-bold text-[#4A2D33]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {val.title}
          </h3>
          <p className="text-xs text-[#6D5257] leading-relaxed">
            {val.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutValues;