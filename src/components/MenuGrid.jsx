import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = () => {
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
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Tailwind Grid: Mobile par 1, tablet par 2, desktop par 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData.map((menuItem) => (
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
    </div>
  );
};

export default MenuGrid;