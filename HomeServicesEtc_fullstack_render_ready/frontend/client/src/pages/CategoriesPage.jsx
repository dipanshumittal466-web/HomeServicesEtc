import { categories } from '../data/categoriesData';

import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';

//const categories = [
  { name: 'Plumbing', icon: 'plumbing' },
  { name: 'Electrical', icon: 'electrical' },
  { name: 'Cleaning', icon: 'cleaning' },
  { name: 'Painting', icon: 'painting' },
  { name: 'Gardening', icon: 'gardening' },
  { name: 'Pest Control', icon: 'pest-control' },
  { name: 'Handyman', icon: 'handyman' },
  { name: 'Renovation', icon: 'renovation' },
];

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
