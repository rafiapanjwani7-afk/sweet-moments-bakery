import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundActions = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
      <Link 
        to="/" 
        className="w-full sm:w-auto px-7 py-3 bg-[#8C5D63] hover:bg-[#73474D] text-white text-xs font-semibold rounded-full shadow-md transition-all"
      >
        Back to Home Page
      </Link>
      
      <Link 
        to="/menu" 
        className="w-full sm:w-auto px-7 py-3 bg-[#FBF4F5] hover:bg-[#F4EAEC] text-[#4A2D33] text-xs font-semibold rounded-full border border-[#E8D0D4] transition-all"
      >
        View Our Menu
      </Link>
    </div>
  );
};

export default NotFoundActions;