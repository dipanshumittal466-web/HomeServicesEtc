import React from 'react';
import logo from '../../public/logo-main.png';

export default function Navbar({onToggleSidebar}){
  return (
    <header className="h-16 flex items-center justify-between px-6 header-gradient text-white">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="md:hidden p-2 bg-white bg-opacity-20 rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <img src={logo} alt="logo" className="h-10 w-10 rounded-sm bg-white/10 p-1" />
        <span className="font-semibold text-lg">HomeServicesEtc</span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="/" className="text-white hover:underline">Home</a>
        <a href="/categories" className="text-white hover:underline">Categories</a>
        <a href="/jobs" className="text-white hover:underline">Jobs</a>
        <a href="/crm" className="text-white hover:underline">CRM</a>
        <a href="/compliance" className="text-white hover:underline">Compliance</a>
        <a href="/dashboard" className="text-white hover:underline">Dashboard</a>
        <a href="/auth" className="ml-4 bg-white text-indigo-600 px-4 py-2 rounded-md font-medium">Login</a>
      </nav>
    </header>
  )
}