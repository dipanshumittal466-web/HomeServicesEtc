import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categoriesData';
import './ServiceCategories.css';

// Preload all .png files in the folder
const icons = require.context(
  '../assets/icons/categories', // folder path (relative to this file)
  false,                        // don't search subfolders
  /\.png$/                      // only .png files
);

const importCategoryIcon = (iconName) => {
  try {
    return icons(`./${iconName}.png`);
  } catch (err) {
    console.error(`❌ Missing icon: ${iconName}.png`);
    return null; // or provide a fallback image
  }
};

const ServiceCategories = () => (
  <section className="categories">
    <h3>Popular Categories</h3>
    <div className="category-grid">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/categories/${encodeURIComponent(cat.name)}`}
          className="category-card"
        >
          <img
            src={importCategoryIcon(cat.icon)}
            alt={cat.name}
            className="category-icon"
          />
          <span>{cat.name}</span>
        </Link>
      ))}
    </div>
  </section>
);

export default ServiceCategories;
