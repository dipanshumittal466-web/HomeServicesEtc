import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categoriesData';
import iconMap from '../utils/iconLoader';
import './ServiceCategories.css';

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
            src={iconMap[cat.icon]}   // ✅ pulls correct .png from folder
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
