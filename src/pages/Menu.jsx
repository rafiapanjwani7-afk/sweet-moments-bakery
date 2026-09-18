import React, { useState } from 'react';
import MenuHero from '../components/MenuHero';

import MenuGrid from '../components/MenuGrid';


   
 


const Menu = () => {


  return (
    <div className="space-y-8 py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <MenuHero />
      
     <MenuGrid />
    </div>
  );
};

export default Menu;