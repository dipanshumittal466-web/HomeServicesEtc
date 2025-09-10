import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Service Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat.name} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={cat.icon} alt={cat.name} className="h-12 w-12 mb-2" />
            <h2 className="font-semibold">{cat.name}</h2>
            <ul className="list-disc ml-4 text-sm mt-2 space-y-1">
              {cat.subcategories.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
