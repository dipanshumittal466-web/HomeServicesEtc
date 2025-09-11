import React, { useState } from "react";

export default function Modal({ isOpen, onClose, title, items }) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  // Filter items based on search
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search subcategories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg mb-4"
        />

        {/* List */}
        {filteredItems.length > 0 ? (
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {filteredItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No subcategories found.</p>
        )}

        {/* Close Button */}
        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
