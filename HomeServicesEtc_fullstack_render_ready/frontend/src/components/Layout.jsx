import React from "react";
import logo from "../assets/logos/logo.png"; // ✅ logo import

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 bg-gray-100 shadow">
        <img src={logo} alt="HomeServicesEtc Logo" className="h-12 mr-6" />
        <nav className="flex gap-4 text-blue-600 font-medium">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/jobs">Jobs</a>
          <a href="/crm">CRM</a>
          <a href="/compliance">Compliance</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">{children}</main>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-100 text-sm text-gray-600">
        © {new Date().getFullYear()} HomeServicesEtc. All rights reserved.
      </footer>
    </div>
  );
}
