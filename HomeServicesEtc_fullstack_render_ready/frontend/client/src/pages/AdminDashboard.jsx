import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, orders: 0, jobs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/admin/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch admin stats:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="admin-dashboard__loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="admin-dashboard__title">Admin Dashboard</h1>
      <div className="admin-dashboard__stats">
        <div className="stat-card">
          <h2 className="stat-card__label">Users</h2>
          <p className="stat-card__value">{stats.users}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-card__label">Orders</h2>
          <p className="stat-card__value">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-card__label">Jobs</h2>
          <p className="stat-card__value">{stats.jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
