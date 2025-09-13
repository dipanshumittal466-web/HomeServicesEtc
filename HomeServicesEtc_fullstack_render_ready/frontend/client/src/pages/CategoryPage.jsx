import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { subcategoriesMap } from '../data/categoriesData';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedSub, setSelectedSub] = useState(null);
  const [jobs, setJobs] = useState([]);

  const subs = subcategoriesMap[category] || [];

  useEffect(() => {
    if (!selectedSub) {
      setJobs([]);
      return;
    }
    api
      .get('/jobs', { params: { category, subcategory: selectedSub.name } })
      .then((res) => setJobs(res.data))
      .catch(() => setJobs([]));
  }, [category, selectedSub]);

  return (
    <div className="category-page">
      <h2>{category}</h2>

      <div className="subcat-grid">
        {subs.map((sub) => (
          <button
            key={sub.name}
            className={
              sub.name === selectedSub?.name ? 'subcat-btn active' : 'subcat-btn'
            }
            onClick={() => setSelectedSub(sub)}
          >
            <span>{sub.name}</span>
          </button>
        ))}
      </div>

      {selectedSub?.name && (
        <div className="jobs-listing">
          {jobs.length ? (
            jobs.map((job) => (
              <div key={job._id} className="job-card">
                <h4>{job.title}</h4>
                <p>{job.description}</p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
              </div>
            ))
          ) : (
            <p>No jobs found in this subcategory.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
