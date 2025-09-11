import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, Legend } from 'recharts';

const lineData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4000 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 7000 },
];

const barData = [
  { name: 'Electrical', jobs: 120 },
  { name: 'Cleaning', jobs: 90 },
  { name: 'Plumbing', jobs: 75 },
  { name: 'Painting', jobs: 60 },
  { name: 'AC Repair', jobs: 45 },
];

export default function Dashboard() {
  const stats = [
    {label: 'Users', value: '1,234'},
    {label: 'Open Jobs', value: '76'},
    {label: 'Revenue', value: '$12.3k'},
    {label: 'Compliance Issues', value: '3'},
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s=>(
          <div key={s.label} className="card">
            <div className="text-sm text-gray-500">{s.label}</div>
            <div className="text-2xl font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card">
          <h3 className="font-semibold mb-3">Monthly Revenue</h3>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-3">Jobs by Category</h3>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold mb-3">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>New job posted: Electrician — 2 hours ago</li>
          <li>Category added: Cleaning Services — Yesterday</li>
          <li>CRM: Contact "Rohit Sharma" updated — 3 days ago</li>
        </ul>
      </div>
    </div>
  );
}