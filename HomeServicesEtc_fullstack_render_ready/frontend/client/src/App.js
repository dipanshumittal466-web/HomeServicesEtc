import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import JobsPage from './pages/JobsPage';
import CRMPage from './pages/CRMPage';
import CompliancePage from './pages/CompliancePage';
import TradieDashboard from './pages/TradieDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/crm" element={<CRMPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/tradie" element={<TradieDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
