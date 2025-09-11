import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/CategoriesPage'
import Admin from './pages/AdminApp'
import Investors from './pages/Investors'
import LegalFull from './pages/LegalFull'
import Login from './pages/Login'
import Register from './pages/Register'
import LegalShort from './pages/LegalShort'
import ProfileCompliance from './pages/ProfileCompliance'
import AdminCompliance from './pages/AdminCompliance'
import CompliancePopup from './components/CompliancePopup'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="p-4">
      <CompliancePopup />
      <header className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">HomeServicesEtc</Link></h1>
        <nav className="space-x-3">
          <Link to="/investors">Investors</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/legal/full' element={<LegalFull/>} />
        <Route path='/legal/short' element={<LegalShort/>} />
        <Route path='/profile/compliance' element={<ProfileCompliance/>} />
        <Route path='/admin/compliance' element={<AdminCompliance/>} />

        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/investors" element={<Investors/>} />
      </Routes>
    </div>
  </BrowserRouter>
)
