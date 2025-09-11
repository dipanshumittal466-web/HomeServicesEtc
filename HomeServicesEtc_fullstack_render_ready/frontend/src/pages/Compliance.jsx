import React, { useState } from "react";

export default function Compliance() {
  const [insurance, setInsurance] = useState(null);
  const [idProof, setIdProof] = useState(null);
  const [status, setStatus] = useState("Pending");

  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (type === "insurance") setInsurance(file);
    if (type === "id") setIdProof(file);
  };

  const handleSubmit = () => {
    // TODO: integrate with backend API for file upload
    setStatus("Under Review");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Compliance & Verification</h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-6 max-w-2xl">
        <div>
          <label className="block font-semibold mb-2">Upload Insurance Document</label>
          <input
            type="file"
            onChange={(e) => handleUpload(e, "insurance")}
            className="block w-full border p-2 rounded"
          />
          {insurance && <p className="text-sm text-green-600 mt-1">{insurance.name} selected</p>}
        </div>

        <div>
          <label className="block font-semibold mb-2">Upload ID Proof</label>
          <input
            type="file"
            onChange={(e) => handleUpload(e, "id")}
            className="block w-full border p-2 rounded"
          />
          {idProof && <p className="text-sm text-green-600 mt-1">{idProof.name} selected</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Submit for Review
        </button>

        <div className="mt-6">
          <h2 className="font-semibold">Verification Status:</h2>
          <p className="text-gray-700">{status}</p>
        </div>
      </div>
    </div>
  );
}
