import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-[#F4EAEC]/70 rounded-3xl border border-white space-y-4 shadow-sm">
      <h3 
        className="text-xl font-bold text-[#4A2D33]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Send Us a Message
      </h3>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-[#6D5257]">Your Name</label>
        <input 
          type="text" 
          required 
          placeholder="Enter your name" 
          className="w-full px-4 py-2.5 rounded-xl bg-white text-xs border border-[#E8D0D4] focus:outline-none focus:ring-2 focus:ring-[#8C5D63]"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-[#6D5257]">Email Address</label>
        <input 
          type="email" 
          required 
          placeholder="Enter your email" 
          className="w-full px-4 py-2.5 rounded-xl bg-white text-xs border border-[#E8D0D4] focus:outline-none focus:ring-2 focus:ring-[#8C5D63]"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-[#6D5257]">Message</label>
        <textarea 
          rows="4" 
          required 
          placeholder="Tell us about your order or inquiry..." 
          className="w-full px-4 py-2.5 rounded-xl bg-white text-xs border border-[#E8D0D4] focus:outline-none focus:ring-2 focus:ring-[#8C5D63] resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full py-3 bg-[#8C5D63] hover:bg-[#73474D] text-white text-xs font-semibold rounded-full shadow-md transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;