import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        
        {/* Transparent Logo */}
        <img
          src={TransparentLogo}
          alt="HomeServicesEtc Logo"
          className="h-20 mb-6 drop-shadow-lg"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to HomeServicesEtc
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Find trusted professionals for Plumbing, Electrical, Cleaning,
          Gardening, Security, and more. Verified service providers at your
          fingertips.
        </p>
        <div className="flex gap-4">
          <Link
            to="/categories"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition font-semibold"
          >
            Browse Categories
          </Link>
          <Link
            to="/dashboard"
            className="bg-indigo-800 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-900 transition font-semibold"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose HomeServicesEtc?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Verified Providers</h3>
            <p>Every service provider is background checked and ID-verified.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Wide Categories</h3>
            <p>
              From Plumbing to Security, 11 main categories and 300+ subcategories covered.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Easy to Use</h3>
            <p>
              Simple dashboard to post jobs, review providers, and manage bookings.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
