import React from "react";
import { Link } from "react-router-dom";


export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        {/* Logo */}
        <div className="flex items-center mb-10">
          <img src={Logo} alt="HomeServicesEtc Logo" className="h-12 mr-3" />
          <h1 className="text-xl font-bold">HomeServicesEtc</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/categories" className="hover:text-blue-400">Categories</Link>
          <Link to="/jobs" className="hover:text-blue-400">Jobs</Link>
          <Link to="/crm" className="hover:text-blue-400">CRM</Link>
          <Link to="/compliance" className="hover:text-blue-400">Compliance</Link>
          <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/admin" className="hover:text-blue-400">Admin</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
