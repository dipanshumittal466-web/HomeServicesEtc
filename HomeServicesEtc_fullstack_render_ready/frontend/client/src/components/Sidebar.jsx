import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/crm', label: 'CRM' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/tradie', label: 'Tradie' },
  { to: '/admin', label: 'Admin' },
  { to: '/login', label: 'Login' }
];

const Sidebar = () => (
  <nav className="sidebar">
    <h2>HomeServicesEtc</h2>
    {links.map(l => (
      <NavLink key={l.to} to={l.to} className="nav-link">
        {l.label}
      </NavLink>
    ))}
  </nav>
);

export default Sidebar;
