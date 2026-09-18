// src/components/Features.jsx
import React from 'react';

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: 'Fast Delivery',
      desc: 'Freshly baked, right to your door',
      icon: 'fa-truck-fast'
    },
    {
      id: 2,
      title: 'Premium Ingredients',
      desc: 'Only the best for your sweet moments',
      icon: 'fa-wheat-awn'
    },
    {
      id: 3,
      title: 'Made with Love',
      desc: 'Because you deserve the best',
      icon: 'fa-heart'
    },
    {
      id: 4,
      title: 'Secure Payment',
      desc: '100% secure checkout',
      icon: 'fa-shield-halved'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
      <section className="bg-[#FDF8F5] py-8 px-6 rounded-3xl border border-[#EFE4E4] shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/70 border border-[#F0E2E2] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Font Awesome Icon Circle (Top) */}
              <div className="w-12 h-12 rounded-full bg-[#F4E8E8] flex items-center justify-center shrink-0 mb-3">
                <i className={`fa-solid ${item.icon} text-[#8C5D63] text-xl`}></i>
              </div>

              {/* Text Details (Below Icon) */}
              <div>
                <h4 className="text-sm font-bold text-[#5B393E]">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;