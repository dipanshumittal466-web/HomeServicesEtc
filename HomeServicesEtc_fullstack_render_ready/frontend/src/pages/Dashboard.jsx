import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const cards = [
    {
      title: "My Jobs",
      description: "View and manage the jobs you have posted.",
      link: "/jobs",
    },
    {
      title: "Browse Categories",
      description: "Find service providers across 11 categories and 300 subcategories.",
      link: "/categories",
    },
    {
      title: "Compliance",
      description: "Upload required documents and track verification status.",
      link: "/compliance",
    },
    {
      title: "CRM",
      description: "Manage customer relationships and communications.",
      link: "/crm",
    },
    {
      title: "Admin Dashboard",
      description: "For admins to review provider documents and approve jobs.",
      link: "/admindashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            to={card.link}
            key={card.title}
            className="block border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
