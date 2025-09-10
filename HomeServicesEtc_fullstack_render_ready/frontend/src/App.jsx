import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Compliance from "./pages/Compliance";
import CRM from "./pages/CRM";
import Jobs from "./pages/Jobs";
import Categories from "./pages/Categories";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "Categories" },
    { path: "/jobs", label: "Jobs" },
    { path: "/crm", label: "CRM" },
    { path: "/compliance", label: "Compliance" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/admindashboard", label: "Admin" },
    { path: "/auth", label: "Login" },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            HomeServicesEtc
          </Link>
          <button
            className="md:hidden px-2 py-1 border rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-blue-700 text-white p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Page Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
