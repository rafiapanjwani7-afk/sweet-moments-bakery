import React from 'react';

const categories = ["All", "Cakes", "Cupcakes", "Pastries", "Drinks"];

const MenuFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeCategory === category
              ? "bg-[#8C5D63] text-white shadow-md scale-105"
              : "bg-white text-[#6D5257] border border-[#E8D0D4] hover:bg-[#FBF4F5] hover:text-[#4A2D33]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;