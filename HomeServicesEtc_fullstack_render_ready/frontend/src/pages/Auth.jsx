import React, { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);
  const acknowledged = localStorage.getItem('hs_acknowledged') === '1';

  React.useEffect(()=>{
    // show popup on registration view if not acknowledged
    if(!acknowledged && !isLogin) setShowPopup(true);
  }, [isLogin]);

  const acknowledge = ()=>{
    localStorage.setItem('hs_acknowledged','1');
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in with ${form.email}`);
    } else {
      alert(`Registering ${form.email}`);
    }
  };

  return (
    <>\n      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg max-w-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Important Notice for Trades & Service Providers</h3>
            <p className="mb-4">Upload a valid Currency Certificate and Photo ID before accessing jobs. You must acknowledge this to continue.</p>
            <div className="flex items-center gap-3">
              <button onClick={acknowledge} className="px-4 py-2 bg-blue-600 text-white rounded">I Acknowledge</button>
              <button onClick={()=>setShowPopup(false)} className="px-4 py-2 border rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
}
