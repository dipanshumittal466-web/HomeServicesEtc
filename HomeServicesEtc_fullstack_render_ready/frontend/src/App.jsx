import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Compliance from './pages/Compliance';
import CRM from './pages/CRM';
import Jobs from './pages/Jobs';
import Categories from './pages/Categories';

export default function App(){
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/compliance' element={<Compliance />} />
          <Route path='/crm' element={<CRM />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Layout>
    </Router>
  )
}