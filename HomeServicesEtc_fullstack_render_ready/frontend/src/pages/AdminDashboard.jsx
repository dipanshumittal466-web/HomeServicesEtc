import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch provider documents from backend
    fetch(`${import.meta.env.VITE_API_URL}/admin/documents`)
      .then(res => res.json())
      .then(data => setDocuments(data))
      .catch(() => setDocuments([]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Provider Documents Review</h2>

        {documents.length === 0 ? (
          <p className="text-gray-600">No documents pending review.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Provider</th>
                <th className="p-2 border">Document Type</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-2 border">{doc.providerName}</td>
                  <td className="p-2 border">{doc.type}</td>
                  <td className="p-2 border">{doc.status}</td>
                  <td className="p-2 border space-x-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
