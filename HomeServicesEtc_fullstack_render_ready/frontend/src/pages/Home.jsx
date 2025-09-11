import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      <section className="mb-6 p-6 bg-gradient-to-r from-gray-100 to-white rounded">
        <h2 className="text-3xl font-bold mb-2">Post a Job for Free</h2>
        <p>Tell us what needs to be done & get quotes from verified tradies.</p>
        <div className="mt-4">
          <button className="px-4 py-2 rounded border">Post a Job</button>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">How it works</h3>
        <ol className="list-decimal ml-6">
          <li>Post a job →</li>
          <li>Get quotes from tradespeople →</li>
          <li>Choose & hire</li>
        </ol>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Browse Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/categories" className="p-3 border rounded text-center">All Services</Link>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
        <blockquote className="p-3 border rounded">"Great service — found a tradie in 24 hours!"</blockquote>
      </section>

      <footer className="mt-6 border-t pt-4">
        <p className="text-sm">© HomeServicesEtc — <a href="/investors">Investor info</a> • <a href="#">T&Cs</a> • <a href="#">Privacy</a></p>
      </footer>
    </div>
  )
}
