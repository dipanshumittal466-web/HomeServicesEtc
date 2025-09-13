import handymanImg from "../assets/handyman-general-repairs.png"; 
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categoriesData';
import './ServiceCategories.css';

// dynamically require the right SVG by its filename (icon key)
const importCategoryIcon = iconName =>
  require(`../assets/icons/categories/${iconName}.png`).default;

const ServiceCategories = () => (
  <section className="categories">
    <h3>Popular Categories</h3>
    <div className="category-grid">
      {categories.map(cat => (
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
