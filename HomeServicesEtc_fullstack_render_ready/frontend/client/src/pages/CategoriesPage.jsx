import { categories } from '../data/categoriesData';

import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';



const importCategoryIcon = (iconName) =>
  require(`../assets/icons/categories/${iconName}.svg`).default;

const CategoriesPage = () => (
  <div className="categories-page">
    <h2>All Service Categories</h2>
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
  </div>
);

export default CategoriesPage;
