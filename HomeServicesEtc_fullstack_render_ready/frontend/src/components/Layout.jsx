import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({children}){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={()=>setSidebarOpen(s=>!s)} />
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} />
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  )
}