import React, { useState } from 'react';
import MenuCard from './MenuCard';
import MenuFilter from './MenuFilter';

const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuData = [
  {
    id: 1,
    title: "Floral Cream Cake",
    category: "Cakes",
    price: "$28.00",
    badge: "Best Seller",
    description: "Vanilla sponge layered with fresh organic cream and handcrafted edible floral decorations.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Velvet Chocolate Cupcakes",
    category: "Cupcakes",
    price: "$12.00",
    badge: "Popular",
    description: "Rich dark cocoa cupcakes topped with smooth butter frosting and chocolate curls.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Strawberry Croissant",
    category: "Pastries",
    price: "$8.50",
    badge: "Fresh",
    description: "Flaky butter croissant filled with homemade strawberry compote and whipped vanilla cream.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Berry Sparkler",
    category: "Drinks",
    price: "$5.00",
    badge: "New",
    description: "Refreshing chilled beverage infused with organic wild berries and mint.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Caramel Cheesecake",
    category: "Cakes",
    price: "$24.00",
    badge: "Chef Special",
    description: "Classic baked cheesecake topped with rich salted caramel drizzle and pecan nuts.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Matcha Green Tea Tart",
    category: "Pastries",
    price: "$9.00",
    badge: null,
    description: "Crispy tart shell filled with premium Japanese matcha ganache and white chocolate.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    title: "Blueberry Glazed Macarons",
    category: "Pastries",
    price: "$15.00",
    badge: "New",
    description: "Delicate French almond macarons filled with fresh blueberry buttercream.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    title: "Iced Caramel Macchiato",
    category: "Drinks",
    price: "$6.50",
    badge: "Popular",
    description: "Rich espresso combined with milk, ice, and smooth caramel syrup drizzle.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 9,
    title: "Red Velvet Bliss Cake",
    category: "Cakes",
    price: "$30.00",
    badge: "Best Seller",
    description: "Classic red velvet layers with rich cream cheese frosting and cocoa sprinkle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2C8SpLo-rrkC7MElTIsPgk2ruI-MOJnIs_qKjDqKow&s=10"
  },
  {
    id: 10,
    title: "Vanilla Swirl Cupcakes",
    category: "Cupcakes",
    price: "$10.00",
    badge: null,
    description: "Moist Madagascar vanilla cupcakes with fluffy swirl frosting and gold pearls.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 11,
    title: "Lemon Raspberry Cooler",
    category: "Drinks",
    price: "$5.50",
    badge: "Fresh",
    description: "Zesty lemon beverage blended with fresh crushed raspberries and sparkling soda.",
    image: "https://bakewithshivesh.com/wp-content/uploads/2017/09/128.jpg"
  },
  {
    id: 12,
    title: "Chocolat Au Pain",
    category: "Pastries",
    price: "$7.00",
    badge: null,
    description: "Traditional French buttery pastry filled with double dark chocolate bars.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600"
  }
];

  // Category Filter Logic
  const filteredItems = activeCategory === "All"
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      {/* Category Filter Component */}
      <MenuFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Grid Display */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredItems.map((menuItem) => (
            <MenuCard 
              key={menuItem.id}
              title={menuItem.title} 
              image={menuItem.image} 
              category={menuItem.category} 
              price={menuItem.price} 
              description={menuItem.description}
              badge={menuItem.badge}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#6D5257] py-10">No items available in this category.</p>
      )}
    </div>
  );
};

export default MenuGrid;