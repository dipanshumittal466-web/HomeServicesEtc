import React, { useState } from "react";

export default function CRM() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", lastContact: "2025-09-01" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastContact: "2025-09-05" },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!selectedCustomer || !message) return;
    alert(`Message sent to ${selectedCustomer.name}: ${message}`);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">CRM - Customer Relationship Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customer List */}
        <div className="bg-white p-6 rounded-2xl shadow md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Customers</h2>
          <ul className="space-y-2">
            {customers.map((cust) => (
              <li
                key={cust.id}
                onClick={() => setSelectedCustomer(cust)}
                className={`p-3 border rounded cursor-pointer hover:bg-gray-100 ${
                  selectedCustomer?.id === cust.id ? "bg-blue-50 border-blue-400" : ""
                }`}
              >
                <p className="font-semibold">{cust.name}</p>
                <p className="text-sm text-gray-600">{cust.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Communication Log */}
        <div className="bg-white p-6 rounded-2xl shadow md:col-span-2 flex flex-col">
          {selectedCustomer ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Communicate with {selectedCustomer.name}
              </h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full border rounded p-3 mb-4 flex-1"
              />
              <button
                onClick={handleSend}
                className="self-end bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </>
          ) : (
            <p className="text-gray-600">Select a customer to start communication.</p>
          )}
        </div>
      </div>
    </div>
  );
}
