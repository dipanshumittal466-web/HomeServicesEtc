import React, { useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Fix leaking pipe", description: "Bathroom pipe leaking", budget: 50, category: "Plumbing" },
    { id: 2, title: "Install ceiling fan", description: "Need fan installation in bedroom", budget: 80, category: "Electrical" },
  ]);

  const [form, setForm] = useState({ title: "", description: "", budget: "", category: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { ...form, id: jobs.length + 1 };
    setJobs([...jobs, newJob]);
    setForm({ title: "", description: "", budget: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Job Tendering</h1>

      {/* Job Posting Form */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget ($)"
            value={form.budget}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Gardening">Gardening</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Post Job
          </button>
        </form>
      </div>

      {/* Job Listings */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
                <p className="text-sm text-gray-500">Category: {job.category}</p>
                <p className="text-sm text-gray-700 font-semibold">Budget: ${job.budget}</p>
                {/* Future placeholder for bids */}
                <div className="mt-2 text-sm text-blue-600 italic">Bids section coming soon...</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
