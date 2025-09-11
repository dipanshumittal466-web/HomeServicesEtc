import React from 'react';
import logo from '../../public/logo-main.png';
import { NavLink } from 'react-router-dom';

const LinkItem = ({to,icon,label}) => (
  <NavLink to={to} className={({isActive})=>`flex items-center gap-3 px-3 py-2 rounded-md transition ${isActive ? 'bg-indigo-600/20 text-indigo-400' : 'text-gray-300 hover:bg-white/5'}`}>
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{label}</span>
  </NavLink>
);

export default function Sidebar({open,onClose}){
  return (
    <aside className="hidden md:flex md:flex-col w-64 sidebar-dark text-gray-200 p-4">
      <div className="flex items-center gap-3 mb-6">
        <img src={logo} alt="logo" className="h-10 w-10 rounded-sm bg-white/5 p-1" />
        <div className="font-semibold">HomeServicesEtc</div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        <LinkItem to="/" icon="🏠" label="Home" />
        <LinkItem to="/categories" icon="📂" label="Categories" />
        <LinkItem to="/jobs" icon="🧰" label="Jobs" />
        <LinkItem to="/crm" icon="🤝" label="CRM" />
        <LinkItem to="/compliance" icon="✅" label="Compliance" />
        <LinkItem to="/admindashboard" icon="🛠️" label="Admin" />
      </nav>
      <div className="mt-4">
        <button className="w-full bg-white/5 text-sm py-2 rounded">Settings</button>
      </div>
    </aside>
  )
}