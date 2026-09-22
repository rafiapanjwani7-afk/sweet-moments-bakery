# 🥐 Sweet Moments — Artisanal Bakery Web App

A beautifully designed, fully responsive bakery web application built with **React**, **Tailwind CSS**, and **React Router DOM**. **Sweet Moments** offers customers a seamless interactive experience to explore freshly baked treats, filter dynamic menus, learn about our heritage, and get in touch.

---

## ✨ Key Features

- **Dynamic Category Filtering**: Seamlessly filter baked goods across *Cakes*, *Cupcakes*, *Pastries*, and *Drinks*.
- **Component-Driven Architecture**: Modular setups across distinct views including dedicated Hero banners (`Herosection.jsx`, `MenuHero.jsx`, `AboutHero.jsx`, `ContactHero.jsx`), dynamic forms, and product grids.
- **Responsive Grid Layout**: Custom grid system optimized for mobile, tablet, and desktop viewports using Tailwind CSS.
- **Client-Side Routing**: Smooth page navigation powered by `react-router-dom` with custom 404 error handling (`NotFound.jsx`).
- **Aesthetic UI & Typography**: Curated warm bakery color palette with elegant serif headings ('Playfair Display').

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Assets**: Unsplash API image integration

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── AboutHero.jsx
│   ├── AboutStory.jsx
│   ├── AboutValues.jsx
│   ├── ContactForm.jsx
│   ├── ContactHero.jsx
│   ├── ContactInfo.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Herosection.jsx
│   ├── MenuCard.jsx
│   ├── MenuFilter.jsx
│   ├── MenuGrid.jsx
│   ├── MenuHero.jsx
│   ├── Navbar.jsx
│   ├── NotFoundActions.jsx
│   └── NotFoundContent.jsx
├── pages/               # Application page views
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Menu.jsx
│   └── NotFound.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
