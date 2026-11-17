import React from 'react';
import { Link } from 'react-router-dom';

const BlogCTA = () => (
  <section className="bg-green-100 text-center py-12 mt-12 rounded">
    <h2 className="text-2xl font-semibold mb-4">Ready to explore our sustainable solutions?</h2>
    <p className="mb-6">Contact us or browse our product range to find the perfect coir product for your needs.</p>
    <div className="flex justify-center gap-4">
      <Link
        to="/products"
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
      >
        View Products
      </Link>
      <Link
        to="/contact"
        className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded"
      >
        Contact Us
      </Link>
    </div>
  </section>
);

export default BlogCTA;
