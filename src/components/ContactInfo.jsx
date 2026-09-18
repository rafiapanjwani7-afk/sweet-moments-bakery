import React from 'react';

const ContactInfo = () => {
  const details = [
    { title: "Visit Us", desc: "123 Sweet Street, Bakery Avenue", icon: "📍" },
    { title: "Call Us", desc: "+92 300 1234567", icon: "📞" },
    { title: "Email Us", desc: "hello@sweetmoments.com", icon: "✉️" },
    { title: "Opening Hours", desc: "Mon - Sun: 10:00 AM - 10:00 PM", icon: "⏰" }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span 
          className="text-2xl text-[#8C5D63] block font-medium"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Let's Connect ♡
        </span>
        <h2 
          className="text-2xl md:text-3xl font-bold text-[#4A2D33]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Visit Our Bakery
        </h2>
        <p className="text-xs md:text-sm text-[#6D5257] leading-relaxed">
          Stop by to taste our freshly baked goods or discuss your custom order in person.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {details.map((item, idx) => (
          <div key={idx} className="p-4 bg-[#FBF4F5] rounded-2xl border border-white space-y-1">
            <span className="text-xl">{item.icon}</span>
            <h3 className="text-sm font-bold text-[#4A2D33]">{item.title}</h3>
            <p className="text-xs text-[#6D5257]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;