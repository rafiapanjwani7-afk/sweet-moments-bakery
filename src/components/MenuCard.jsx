import React from 'react';

const MenuCard = ({ title, image, category, price, description, badge }) => {
  return (
    <div className="col">
      <div className="bg-[#FBF4F5] rounded-3xl p-4 border border-[#F0E2E4] shadow-sm hover:shadow-md transition-all duration-300 h-100 flex flex-col justify-between">
        
        {/* Image Box & Badge */}
        <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-[#EAE0E2]">
          <img 
            src={image} 
            alt={title || 'Bakery Item'} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <span className="absolute top-3 left-3 bg-[#8C5D63] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {badge}
            </span>
          )}
        </div>

        {/* Content Info */}
        <div className="space-y-1.5 px-1 py-3 flex-grow">
          <div className="flex justify-between items-start gap-2">
            <h3 
              className="text-base font-bold text-[#4A2D33]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h3>
            <span className="text-sm font-bold text-[#8C5D63] whitespace-nowrap">{price}</span>
          </div>
          <p className="text-xs text-[#6D5257] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full py-2.5 bg-white hover:bg-[#8C5D63] text-[#8C5D63] hover:text-white text-xs font-semibold rounded-xl border border-[#E8D0D4] transition-all duration-300 shadow-sm mt-2">
          Add to Order
        </button>

      </div>
    </div>
  );
};

export default MenuCard;