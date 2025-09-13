// client/src/pages/JobsPage.jsx

import React, { useState } from 'react';
import api from '../services/api';
import { categories, subcategoriesMap } from '../data/categoriesData';

const JobsPage = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    location: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/jobs', form);
      alert('Job posted successfully');
      setForm({
        title: '',
        description: '',
        category: '',
        subcategory: '',
        location: ''
      });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to post job');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Subcategory</label>
          <select
            name="subcategory"
            value={form.subcategory}
            onChange={handleChange}
            disabled={!form.category}
            required
          >
            <option value="">Select a subcategory</option>
            {subcategoriesMap[form.category]?.map(sub => (
              <option key={sub.name} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default JobsPage;
